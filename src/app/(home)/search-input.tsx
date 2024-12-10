"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { SearchIcon, XIcon } from "lucide-react"
import { useRef, useState } from "react"
import { useSearchParams } from "../hooks/use-search-params"

export const Searchinput = () => {
    const [search,setSearch] = useSearchParams("search")
    const [value,setValue] = useState("");
    const input = useRef<HTMLInputElement>(null);
    console.log(search);
    
    const handleChange = (e:React.ChangeEvent<HTMLInputElement>)=>{
     setValue(e.target.value)
    }

    const handleClear = ()=>{
        setValue("");
        setSearch("")
        input.current?.blur()
    }
    
    const handleSubmit = (e:React.FormEvent<HTMLFormElement>)=>{
      e.preventDefault();
      setSearch(value);
      input.current?.blur()
    }

    return (
        <div className="flex-1 flex items-center justify-center">
            <form onSubmit={handleSubmit} className="relative max-w-[720px] w-full">
                <Input value={value} onChange={handleChange} ref={input} placeholder="Search" className="md:text-base placeholder:text-neutral-800 px-14 w-full border-none bg-[#F0F4F8] rounded-full h-[48px] focus-visible:ring-0 " />
                <Button className="absolute left-3 top-1/2 -translate-y-1/2 [&_svg]:size-5 rounded-full" variant="ghost" size="icon" type="submit">
                    <SearchIcon />
                </Button>
                {value && (
                     <Button
                     onClick={handleClear}
                     type="button" 
                     className="absolute right-3 top-1/2 -translate-y-1/2 [&_svg]:size-5 rounded-full" 
                     variant="ghost" 
                     size="icon" >
                     <XIcon />
                 </Button>
                )}
            </form>
        </div>
    )
}


