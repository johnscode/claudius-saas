import {Button} from "@/components/ui/button";
import {Menu} from "lucide-react";
import {UserButton} from "@clerk/nextjs";
import MobileSideBar from "@/components/mobile-sidebar";
import {SideBarProps} from "@/components/sidebar";


const DashNavBar = ({apiLimit = 0, isPro=false}: SideBarProps) => {
    return (
        <div className="flex items-center p-4">
            <div>Dashboard</div>
            <div className="flex w-full justify-end">
                <UserButton afterMultiSessionSingleSignOutUrl="/" afterSignOutUrl="/" />
            </div>
        </div>
    )
}

export default DashNavBar;

