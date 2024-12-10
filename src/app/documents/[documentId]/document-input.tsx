"use client"
import { BsCloudCheck } from "react-icons/bs"
import { Id } from "../../../../convex/_generated/dataModel"
import React, { useRef, useState } from "react"
import { useMutation } from "convex/react"
import { api } from "../../../../convex/_generated/api"
import { UseDebounce } from "@/app/hooks/useDebounce"
import { toast } from "sonner"

interface props {
  title: string,
  id: Id<"documents">
}

export const Documentinput = ({ title, id }: props) => {
  const [value, setValue] = useState(title)
  const [isEditing, setIsEditing] = useState(false)
  const [isPending, setIsPending] = useState(false)
 console.log(isPending);
 
  const inputRef = useRef<HTMLInputElement>(null)
  const mutate = useMutation(api.documents.updateById)
  const debounceUpdate = UseDebounce((newValue: string) => {
    if (newValue === title) return
    setIsPending(true);
    mutate({ id, title: newValue })
      .then(() => toast.success("Document updated"))
      .catch(() => toast.error("Something went wrong"))
      .finally(() => setIsPending(false))
  })
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsPending(true);
    mutate({ id, title: value })
      .then(() => {
        toast.success("Document updated")
        setIsEditing(false)
      }
      )
      .catch(() => toast.error("Something went wrong"))
      .finally(() => setIsPending(false))
  }
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setValue(newValue);
    debounceUpdate(newValue)
  }
  return (
    <div className="flex items-center gap-2">
      {isEditing ? (
        <form onSubmit={onSubmit} className="relative w-fit max-w-[56ch]">
          <span className="invisible whitespace-pre px-1.5 text-lg">
            {value || " "}
          </span>
          <input value={value}
            onBlur={() => setIsEditing(false)}
            ref={inputRef}
            onChange={onChange}
            className="absolute inset-0 text-lg text-black px-1.5 bg-transparent truncate" />
        </form>
      ) : (
        <span
          onClick={() => {
            setIsEditing(true)
            setTimeout(() => {
              inputRef.current?.focus()
            }, 0);
          }}
          className="text-lg px-1.5 cursor-pointer truncate">{title}</span>
      )}
      <BsCloudCheck />
    </div>
  )
}

