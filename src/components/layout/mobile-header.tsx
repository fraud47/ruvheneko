"use client"

import { Menu, Search } from "lucide-react"
import { usePathname } from 'next/navigation'

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { navs } from "./header"
import Link from "next/link"
import { cn } from "@/lib/utils"





const MobileHeader = () => {

  const pathname = usePathname()

  
  return (
    <div className="lg:hidden flex items-center gap-4">
     

     <Search className="text-primary"/>

      
      <Sheet>
      <SheetTrigger asChild>
      <Menu size={32} />
      </SheetTrigger>
      <SheetContent className="z-1000 bg-neutral-900 border-none">

       <SheetHeader>
        <SheetTitle></SheetTitle>
       </SheetHeader>
        <div className=" flex flex-col items-center cursor-pointer w-full gap-2 justify-center h-full">
          {navs.map((item,index)=>{
            const selected= pathname==item.route
          return(
            <Link href={item.route} key={index}
            className=" border-b border-muted-foreground w-[70%] py-4">
              <h3 className={cn("text-muted-foreground hover:text-white uppercase font-bold text-xs",
                selected&&"text-white"
              )}>{item.name}</h3>
            </Link>
          )
          })}
        </div>
        

      </SheetContent>
    </Sheet>
     
    </div>
  )
}

export default MobileHeader