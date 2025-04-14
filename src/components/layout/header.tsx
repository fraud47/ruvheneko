"use client"



import { Separator } from '../ui/separator'
import { Phone, Search } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { cn } from '@/lib/utils'
import { usePathname } from 'next/navigation'
import MobileHeader from './mobile-header'

export const navs=[
    {
        name: "home",
        route: "/"
    },
    {
        name: "Admissions",
        route: "/admissions"
    },
    {
        name: "Courses",
        route: "/courses"
    },
    {
        name: "Secondary life",
        route: "/about"
    },
    {
        name: "Sports",
        route: "/sports"
    },
]


const navTabs =[
    {
        name: "Calendar",
        route: "/admissions"
    },
    {
        name: "Support",
        route: "/"
    },
]


const Header = () => {

 
   
    

    const pathname = usePathname()
  return (
    <div className='w-full s'>
        <div className='bg-blue-950  h-14 text-slate-500'>
            <div className=" max-w-6xl mx-5 h-full flex justify-between items-center lg:mx-auto ">
                <div className='space-x-4 flex py-4 items-center h-full'>
                    <p className=''>ruvheneko@gmail.com</p>
                    <Separator orientation="vertical" className=' bg-slate-500' />  
                    <Phone size={18}/>
                    <p>+263772817881</p>
                </div>
                <div className='flex gap-2 h-full items-center'>
                   {navTabs.map((item,index)=>{


                    if(item.name=="Support") return <Link href={item.route}  key={index} className='bg-[#D69D26] h-full text-sm flex items-center text-white font-bold px-4 
                    '>
                    <p >{item.name}</p>
                    </Link> 
                    return(
                        <Link key={index} href={item.route}>
                        <p >{item.name}</p>
                       
                        </Link>
                    )
                   })} 
                </div>
            </div>
        </div>


        <div className='max-w-6xl mx-5   flex justify-between items-center lg:mx-auto h-16 sticky z-100'>

            <div className='font-playfair flex items-center gap-2'>

            <Image src="/ruvheneko.png" height={50} width={50} alt='logo'/>
            <h4 >Ruvheneko <span className='text-primary font-bold'>Secondary</span></h4>
            </div>
            <MobileHeader/>
             <div className=' hidden lg:flex gap-x-6 h-full capitalize items-center text-sm'>
                {navs.map((item,index)=>{

                    const selected= pathname==item.route

                    return(
                       <Link href={item.route} className={cn("text-blue-950 group group-hover:text-[#D69D26] font-medium border-[#D69D26] relative flex items-center h-full hover:border-b-3 hover:text-[#D69D26]",
                        selected&&"text-[#D69D26] border-secondary   border-b-3 duration-500 ease"
                       )} key={index}>
                           <p className='text-center '>{item.name}</p>
                           <div className=' hidden group-hover:block group-hover:border-b-3 absolute group-hover:bottom-0 
                           group-hover:border-secondary'/>
                       </Link>
                    )
                })}
                <Search size={18}/>
             </div>

        </div>

    </div>
  )
}

export default Header