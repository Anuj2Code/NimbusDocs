"use client"

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"

import { Id } from "../../convex/_generated/dataModel"
import React, { useState } from "react";
import { useMutation } from "convex/react";
import { api } from "../../convex/_generated/api";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { toast } from "sonner";

interface props {
    documentId: Id<"documents">;
    children: React.ReactNode;
    initialTitle: string
}

export const RenameDialog = ({ documentId, children, initialTitle }: props) => {
    const update = useMutation(api.documents.updateById);
    const [isUpdating, setIsUpdating] = useState(false);
    const [title, setTitle] = useState(initialTitle);
    const [open, setOpen] = useState(false);

    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setIsUpdating(true);
        update({ id: documentId, title: title.trim() || "untitled" })
            .then(() => toast.success("Document modified"))
            .catch(() => {
                toast.error("Something went wrong")
            })
            .finally(() => {
                setIsUpdating(false);
                setOpen(false);
            })
    }

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>{children}</DialogTrigger>
            <DialogContent onClick={(e) => e.stopPropagation()}>
                <form onSubmit={onSubmit}>
                    <DialogHeader>
                        <DialogTitle>Rename document</DialogTitle>
                        <DialogDescription>
                            Enter a new name for this document
                        </DialogDescription>
                    </DialogHeader>
                    <div className="my-2">
                        <Input value={title} onChange={(e) => setTitle(e.target.value)} onClick={(e) => e.stopPropagation()} />
                    </div>
                    <p className="text-sm mb-2 text-muted-foreground">When you are done with it , Press Enter to save the changes</p>
                    <DialogFooter>
                        <Button type="button" variant="ghost" disabled={isUpdating} onClick={(e) => e.stopPropagation()}>Cancel</Button>
                        <Button type="button" disabled={isUpdating} onClick={(e) => e.stopPropagation()}>Save</Button>
                    </DialogFooter>
                </form>
            </DialogContent>
        </Dialog>

    )
}