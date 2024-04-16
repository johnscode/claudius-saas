import { Settings } from "lucide-react";

import  Heading  from "@/components/heading";
import { SubscriptionButton } from "@/components/subscription-button";
import { checkSubscription } from "@/lib/subscription";
import {getUserProfileData} from "@/lib/user";
import {getApiLimitCount} from "@/lib/api-limit";
import {MAX_FREE_COUNTS} from "@/constants";

const SettingsPage = async () => {
    const user = await  getUserProfileData()
  const isPro = await checkSubscription(user.sub);
    const apilimit = await getApiLimitCount(user.sub)

  return ( 
    <div>
      <Heading
        title="Settings"
        description="Manage account settings."
        icon={Settings}
        iconColor="text-gray-700"
        bgColor="bg-gray-700/10"
      />
        <div className="px-4 lg:px-8 space-y-4">
            <div className="text-muted-foreground text-sm">
                {isPro ? "You are currently on a Pro plan." : `You are currently on a per-use plan, ${MAX_FREE_COUNTS - apilimit} credits remaining.`}
            </div>
            <SubscriptionButton isPro={isPro}/>
        </div>
    </div>
  );
}

export default SettingsPage;

