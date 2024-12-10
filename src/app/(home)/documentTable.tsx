import { PaginationStatus } from "convex/react";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { Doc } from "../../../convex/_generated/dataModel"
import { LoaderIcon } from "lucide-react";
import { DocumentRow } from "./document-Row";
import { Button } from "@/components/ui/button";

interface props {
    documents: Doc<"documents">[] | undefined;
    loadmore: (numItems: number) => void;
    status: PaginationStatus
}

export const DocumentTable = ({ documents, loadmore, status }: props) => {
    return (
        <div className="max-w-screen-xl mx-auto px-16 py-6 flex flex-col gap-5">
            {documents === undefined ? (
                <div className="flex justify-center items-center h-24">
                    <LoaderIcon className="animate-spin" />
                </div>
            ) : (
                <Table>
                    <TableHeader>
                        <TableRow className="hover:bg-transparent border-none">
                            <TableHead>Status</TableHead>
                            <TableHead>&nbsp;</TableHead>
                            <TableHead className="hidden md:table-cell">Shared</TableHead>
                            <TableHead className="hidden md:table-cell">Created at</TableHead>
                        </TableRow>
                    </TableHeader>
                    {documents.length === 0 ? (
                        <TableBody>
                            <TableRow className="hover:bg-transparent">
                                <TableCell className="h-24 text-center text-muted-foreground" colSpan={4}>
                                    No documents found
                                </TableCell>
                            </TableRow>
                        </TableBody>
                    ) : (
                        <TableBody>
                            {documents.map((document) => (
                                <DocumentRow key={document._id} document={document} />
                            ))}
                        </TableBody>
                    )}
                </Table>
            )}
            <div className="flex items-center justify-center">
                <Button variant="ghost" size="sm" onClick={() => loadmore(5)} disabled={status !== "CanLoadMore"}>
                    {status === "CanLoadMore" ? "Load more" : "End of Results"}
                </Button>
            </div>
        </div>
    )
}


