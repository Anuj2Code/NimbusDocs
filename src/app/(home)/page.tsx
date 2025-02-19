"use client"
import { usePaginatedQuery } from "convex/react";
import { Navbar } from "./navbar";
import { TemplateGallery } from "./TemplateGallery";
import { api } from "../../../convex/_generated/api";
import { DocumentTable } from "./documentTable";
import { useSearchParams } from "../hooks/use-search-params";

export default function Home() {
  const [search] = useSearchParams("search")
  const {results,status,loadMore} = usePaginatedQuery(api.documents.getDocuments,{search},{initialNumItems:5})
  return (
    <div className="flex min-h-screen flex-col ">
      <div className="fixed top-0 left-0 right-0 z-10 h-16 bg-white p-4">
        <Navbar />
      </div>
      <div className="mt-16">
       <TemplateGallery/>
       <DocumentTable
         documents={results}
         loadmore={loadMore}
         status={status}
       />
      </div>
    </div>
  );
}
