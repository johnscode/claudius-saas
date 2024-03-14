import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";

import {checkApiLimit, incrementApiLimit} from "@/lib/api-limit";
import {ClaudeChatMsg, createMsg} from "@/lib/claudeutils";
import {checkSubscription} from "@/lib/subscription";
import Anthropic from "@anthropic-ai/sdk";

const anthropic = new Anthropic({
    apiKey: process.env['ANTHROPIC_API_KEY'], // This is the default and can be omitted
});

export async function POST(
    req: Request
) {
    try {
        const { userId } = auth();
        const body = await req.json();
        const { messages  } = body;

        if (!userId) {
            return new NextResponse("Unauthorized", { status: 401 });
        }

        if (!messages) {
            return new NextResponse("Messages are required", { status: 400 });
        }

        const freeTrial = await checkApiLimit();
        const isPro = await checkSubscription();
        if (!freeTrial && !isPro) {
            return new NextResponse("Free trial has expired. Please upgrade to pro.", { status: 403 });
        }
        const msgs = messages.map((msg: ClaudeChatMsg) => {
            return createMsg(msg.role, msg.content)
        })
        const stream = anthropic.messages
            .stream({
                system: 'You are an AI assistant with a mischievous sense of humor. Your name is Eve. You answer all requests accurately with a little humor.',
                model: 'claude-3-sonnet-20240229',
                max_tokens: 1024,
                messages: msgs,
            })
            .on('text', (text) => {
                // console.log(text);
            });
        const responseMessage = await stream.finalMessage();
        console.log(responseMessage);
        console.log(`response token count ${JSON.stringify(responseMessage.usage)}`)

        if (!isPro) {
            await incrementApiLimit();
        }
        return NextResponse.json(responseMessage.content[0].text);
    } catch (error) {
        console.log('--- gpt error ---', error);
        return new NextResponse("Internal Error", { status: 500 });
    }
}

