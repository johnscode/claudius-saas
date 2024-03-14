"use client";

import Link from "next/link";
import Image from "next/image";
import {usePathname} from "next/navigation";
import { Montserrat } from 'next/font/google'

import { cn } from "@/lib/utils";
import {LayoutDashboard, MessageSquare, ImageIcon, VideoIcon, Music, Code, Settings} from "lucide-react";
import {FreeCounter} from "@/components/free-counter";

const montserrat = Montserrat ({ weight: '600', subsets: ['latin'] });

const routes = [
    {
        label: "Dash",
        icon: LayoutDashboard,
        href: '/dash',
        color: "text-sky-500"
    },
    {
        label: 'Conversation',
        icon: MessageSquare,
        href: '/conversation',
        color: "text-violet-500",
    },
    {
        label: 'Image Generation',
        icon: ImageIcon,
        color: "text-pink-700",
        href: '/image',
    },
    {
        label: 'Code Generation',
        icon: Code,
        color: "text-green-700",
        href: '/code',
    },
    {
        label: 'Settings',
        icon: Settings,
        href: '/settings',
    },
]

export interface SideBarProps {
    apiLimit: number
    isPro: boolean
}

const SideBar = ({apiLimit = 0, isPro=false}: SideBarProps) => {
    const pathname = usePathname();
    return (
        <div className="space-y-4 py-4 flex flex-col h-full bg-[#111827] text-white" >
            <div className="px-3 py-2 flex-1">
                <Link href="/dash" className="flex items-center pl-3 mb-14">
                    <div className="relative h-8 w-8 mr-4">
                        <Image fill alt="Logo" src="/EveLogo.png"/>
                    </div>
                    <h1 className={cn("text-2xl font-bold", montserrat.className)}>
                        Eve
                    </h1>
                </Link>
                <div className="space-y-1">
                    {routes.map((route) => (
                        <Link
                            key={route.href}
                            href={route.href}
                            className={cn(
                                "text-sm group flex p-3 w-full justify-start font-medium cursor-pointer hover:text-white hover:bg-white/10 rounded-lg transition",
                                pathname === route.href ? "text-white bg-white/10" : "text-zinc-400",
                            )}
                        >
                            <div className="flex items-center flex-1">
                                <route.icon className={cn("h-5 w-5 mr-3", route.color)}/>
                                {route.label}
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
            <FreeCounter apiLimit={apiLimit} isPro={isPro} />
        </div>
    )
}

export default SideBar;