import { Button } from "@/components/ui/button"
import { ExternalLinkIcon, FilePenIcon, MoreVertical, TrashIcon } from "lucide-react"
import { Id } from "../../../convex/_generated/dataModel"

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { RemoveDialog } from "@/components/removedialog"
import { RenameDialog } from "@/components/rename-dialog"


interface props {
    documentId: Id<"documents">
    title: string;
    onNewTab: (id: Id<"documents">) => void
}

export const DropdownMenus = ({ documentId, title, onNewTab }: props) => {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="rounded-full">
                    <MoreVertical className="size-4" />
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
                <RenameDialog documentId={documentId} initialTitle={title}>
                    <DropdownMenuItem
                     onSelect={(e)=>e.preventDefault()}
                     onClick={(e)=>e.stopPropagation()}
                    >
                       <FilePenIcon className="size-4"/>
                       Rename
                    </DropdownMenuItem>
                </RenameDialog>
                <RemoveDialog documentId={documentId}>
                    <DropdownMenuItem
                     onSelect={(e)=>e.preventDefault()}
                     onClick={(e)=>e.stopPropagation()}
                    >
                       <TrashIcon className="size-4"/>
                       Remove
                    </DropdownMenuItem>
                </RemoveDialog>
                <DropdownMenuItem onClick={()=>onNewTab(documentId)}>
                    <ExternalLinkIcon className="size-4 mr-2"/>
                    open in a new Tab
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}

