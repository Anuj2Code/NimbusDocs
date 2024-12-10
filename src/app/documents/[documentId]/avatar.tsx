 "use client"
 import { useOthers } from "@liveblocks/react/suspense";
import { ClientSideSuspense, useSelf } from "@liveblocks/react";
import { Separator } from "@/components/ui/separator";

const AVATAR_SIZE = 36

interface Avatar {
    src:string;
    name:string
}

export const Avatars = ()=>{
    return (
        <ClientSideSuspense fallback={null}>
            <AvatarStack/>
        </ClientSideSuspense>
    )
}

const AvatarStack = ()=>{
    const users = useOthers();
    const currentUser = useSelf();
    if(users.length === 0){
        return null;
    }
    return (
        <>
        <div className="flex items-center ">
           {currentUser && (
            <div className="relative ml-2">
                <Avatar src={currentUser.info.avatar} name="You"/>
            </div>
           )}
           <div className="flex ">
             {users.map(({connectionId,info})=>{
                return (
                    <Avatar key={connectionId} src={info.avatar} name={info.name}/>
                )
             })}
           </div>
        </div>
        <Separator className="h-6" orientation="vertical"/>
        </>
    )
}

const Avatar = ({src,name}:Avatar)=>{
 return(
    <div style={{width:AVATAR_SIZE,height:AVATAR_SIZE}} className="group -ml-2 flex shrink-0 place-content-center relative border-4 border-white rounded-full bg-gray-400">
       <div className="opacity-0 group-hover:opacity-100 absolute top-full py-1 px-2 text-white text-sm rounded-lg mt-2.5  z-50 bg-black whitespace-nowrap transition-opacity">
        {name}
        <img src={src} alt={name} className="size-full rounded-full"/>
       </div>
    </div>
 )
}