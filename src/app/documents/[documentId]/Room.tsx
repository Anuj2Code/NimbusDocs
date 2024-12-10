"use client";

import { ReactNode, useEffect, useMemo, useState } from "react";
import {
  LiveblocksProvider,
  RoomProvider,
  ClientSideSuspense,
} from "@liveblocks/react/suspense";
import { useParams } from "next/navigation";
import { Fullscreen } from "@/components/full-screen-loader";
import { getUsers,getDocuments } from "./action";
import { toast } from "sonner";
import { Id } from "../../../../convex/_generated/dataModel";

type User = {
  id: string;
  name: string;
  avatar: string
}

export function Room({ children }: { children: ReactNode }) {
  const params = useParams()
  const [user, setUser] = useState<User[]>([])
  const fetchs = useMemo(
    () => async () => {
      try {
        const list = await getUsers()
        setUser(list);
      } catch (error) {
        toast.error("Failed to fetch users")
        console.log(error);
        
      }
    }, []
  )

  useEffect(() => {
    fetchs()
  }, [fetchs])

  return (
    <LiveblocksProvider
      throttle={16}
      authEndpoint={async()=>{
           const endpoint = "/api/liveblocks-auth";
           const room = params.documentId as string
           const response = await fetch(endpoint,{
            method:"POST",
            body:JSON.stringify({room})
           })
           return await response.json()
        }}
      resolveUsers={({ userIds }) => {
        return userIds.map((userId) => user.find((user) => user.id === userId) ?? undefined)
      }}
      resolveMentionSuggestions={({ text }) => {
        let filteredUsers = user;
        if (text) {
          filteredUsers = user.filter((user) => user.name.toLowerCase().includes(text.toLowerCase()))
        }
        return filteredUsers.map((user) => user.id)
      }}
      resolveRoomsInfo={async({roomIds}) => {
          const documents = await getDocuments(roomIds as Id<"documents">[])
          return documents.map((doc)=>({
            id:doc.id,
            name:doc.name
       }))
      }}
    >
      <RoomProvider initialStorage={{leftMargin:56,rightMargin:56}} id={params.documentId as string}>
        <ClientSideSuspense fallback={<Fullscreen label="Room Loading ..." />}>
          {children}
        </ClientSideSuspense>
      </RoomProvider>
    </LiveblocksProvider>
  );
}
