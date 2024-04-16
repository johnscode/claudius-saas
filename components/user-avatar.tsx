
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {UserProfile} from "@auth0/nextjs-auth0/client";
import {MouseEventHandler} from "react";

export interface UserAvatarProps {
    // apiLimit: number
    user: UserProfile
    onClick: MouseEventHandler<HTMLSpanElement|undefined>
}
export const UserAvatar = (props: UserAvatarProps) => {
    const url = props.user.picture===null?undefined:props.user.picture
    return (
        <Avatar className="h-8 w-8" onClick={props.onClick}>
            <AvatarImage src={url} />
            <AvatarFallback>
                {props.user.nickname}
            </AvatarFallback>
        </Avatar>
    );
};



// import { useUser } from "@clerk/nextjs";
//
// import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
//
// export const UserAvatar = () => {
//   const { user } = useUser();
//
//   return (
//     <Avatar className="h-8 w-8">
//       <AvatarImage src={user?.profileImageUrl} />
//       <AvatarFallback>
//         {user?.firstName?.charAt(0)}
//         {user?.lastName?.charAt(0)}
//       </AvatarFallback>
//     </Avatar>
//   );
// };
