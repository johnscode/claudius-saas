
import OpenAI from "openai";
import ChatCompletionMessageParam = OpenAI.ChatCompletionMessageParam;
import ChatCompletionUserMessageParam = OpenAI.ChatCompletionUserMessageParam;
import ChatCompletionAssistantMessageParam = OpenAI.ChatCompletionAssistantMessageParam;
import ChatCompletionSystemMessageParam = OpenAI.ChatCompletionSystemMessageParam;
import ChatCompletionContentPart = OpenAI.ChatCompletionContentPart;
import Configuration from "openai";

export const openai = new OpenAI({
    organization: 'org-y5GoVom0GCfFqSSh52xKSb8a',
});

export const OpenAIConfig = new Configuration({
    apiKey: process.env.OPENAI_API_KEY
})

export type ClaudeMsgType = "user" | "assistant"

export interface ClaudeChatMsg {
    content: string|null|undefined
    role: ClaudeMsgType
}

export class UserMsg implements ClaudeChatMsg {
    content: string|null|undefined;
    role: 'user';
    constructor(content: string|null|undefined) {
        this.content = content;
        this.role = 'user'
    }
}
export class AsstMsg implements ClaudeChatMsg {
    content: string|null|undefined;
    role: 'assistant';
    constructor(content: string|null|undefined) {
        this.content = content;
        this.role = 'assistant'
    }
}

export function createMsg(type: ClaudeMsgType, msg: string|null|undefined): ClaudeChatMsg {
    switch (type) {
        case "user":
            return new UserMsg(msg);
        case "assistant":
            return new AsstMsg(msg)
    }
}