import { api } from "../../../../convex/_generated/api";
import { Id } from "../../../../convex/_generated/dataModel";
import { Document } from "./document";
import { auth } from "@clerk/nextjs/server";
import {preloadQuery} from "convex/nextjs"


interface DocumentsProps {
  params: Promise<{ documentId: Id<"documents"> }>;
}

const DocumentIdPage = async ({ params }: DocumentsProps) => {
  const { documentId } = await params;
  const {getToken} = await auth()
  const token = await getToken({template:"convex"}) ?? undefined

  if(!token){
    throw new Error("unauthorized")
  }
   const preLoadedDocuments = await preloadQuery(
    api.documents.getById,
    {id:documentId},
    {token}
   )
   if(!preLoadedDocuments){
    throw new Error("Document not found");
   }
  return <Document preLoaded={preLoadedDocuments}/>;
}

export default DocumentIdPage
