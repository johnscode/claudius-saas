"use client"

import {Button} from "@/components/ui/button";
import {Menu} from "lucide-react";
import {UserButton} from "@clerk/nextjs";
import MobileSideBar from "@/components/mobile-sidebar";
import {SideBarProps} from "@/components/sidebar";
import {UserAvatar} from "@/components/user-avatar";
import { useUser } from "@auth0/nextjs-auth0/client";
import React, { useState } from 'react';


const NavBar = ({apiLimit = 0, isPro=false}: SideBarProps) => {
    const { user } = useUser();
    const [showDropdown, setShowDropdown] = useState(false);
    const toggleDropdown = () => {
        setShowDropdown(!showDropdown);
    };
    return (
        <div className="flex justify-end items-center p-4">
            <MobileSideBar apiLimit={apiLimit} isPro={isPro} /> {user &&
            <div className="relative">
                <UserAvatar user={user} onClick={toggleDropdown}/>
                {showDropdown && (
                    <div
                        className="absolute top-full right-0 mt-2 w-48 rounded-md bg-gray-700 bg-opacity-95 py-1 shadow-lg ring-1 ring-black ring-opacity-5">
                        <a
                            href="/api/auth/logout"
                            className="block px-4 py-2 text-sm text-gray-300  hover:text-white"
                        >
                            Sign out
                        </a>
                    </div>
                )}
            </div>
        }
        </div>
    )
}

export default NavBar;

