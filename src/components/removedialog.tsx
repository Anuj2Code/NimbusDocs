"use client"

import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { toast } from "sonner"
import { Id } from "../../convex/_generated/dataModel"
import React, { useState } from "react";
import { useMutation } from "convex/react";
import { api } from "../../convex/_generated/api";

interface props {
    documentId: Id<"documents">;
    children: React.ReactNode
}

export const RemoveDialog = ({ documentId, children }: props) => {
    const remove = useMutation(api.documents.removeById)
    const [isRemoving, setIsRemoving] = useState(false)
    return (
        <AlertDialog>
            <AlertDialogTrigger asChild>
                {children}
            </AlertDialogTrigger>
            <AlertDialogContent onClick={(e) => e.stopPropagation()}>
                <AlertDialogHeader>
                    <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                    <AlertDialogDescription>
                        This action cannot be undone. This will permanently delete your document.
                    </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <AlertDialogCancel onClick={(e) => e.stopPropagation()}>Cancel</AlertDialogCancel>
                    <AlertDialogAction
                   disabled={isRemoving}
                   onClick={(e)=>{
                      e.stopPropagation()
                      setIsRemoving(true)
                      remove({id:documentId})
                      .then(()=> toast.success("Document remove"))
                      .catch(()=>{
                        toast.error("Something went wrong")
                      })
                      .finally(()=>{
                        setIsRemoving(false)
                      })
                   }}
                    >Delete</AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    )
}