"use client";

import { useRouter } from "next/navigation";

import {ArrowRight, Code, ImageIcon, MessageSquare, Music, VideoIcon} from "lucide-react";
import {Card} from "@/components/ui/card";
import {cn} from "@/lib/utils";
import {tools} from "@/constants";


const DashPage = () => {
    const router = useRouter();
    return (
        <main>
            <h2 className="text-3xl text-blue-700 text-center font-bold"> Dashboard</h2>
            <div className="mb-8 space-y-4">   </div>
            <div className="px-4 md:px-20 lg:px-32 space-y-4">
                {tools.map((tool) => (
                    <Card onClick={() => router.push(tool.href)} key={tool.href} className="p-4 border-black/5 flex items-center
                    justify-between hover:shadow-md transition cursor-pointer">
                        <div className="flex items-center gap-x-4">
                            <div className={cn("p-2 w-fit rounded-md", tool.bgColor)}>
                                <tool.icon className={cn("w-8 h-8", tool.color)}/>
                            </div>
                            <div className="font-semibold">
                                {tool.label}
                            </div>
                        </div>
                        <ArrowRight className="w-5 h-5"/>
                    </Card>
                ))}
            </div>
        </main>

    );
}

export default DashPage