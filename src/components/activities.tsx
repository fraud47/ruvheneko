import { GraduationCap, School, Volleyball, Waypoints } from "lucide-react"

const activities = [
    {
        label:"Secondary Life",
        desc:"Overall here",
        icon: <School size={36} strokeWidth={1}  />
    },
    {
        label:"Prize giving day",
        desc: "School awards",
        icon: <GraduationCap size={36}strokeWidth={1} />
    },
    {
        label:"Athletics",
        desc:"Sports clubs",
        icon:<Volleyball size={36} strokeWidth={1}   />
    },
  
    {
        label:"Clubs",
        desc:"overall here",
        icon: <Waypoints size={36} strokeWidth={1} />
    },
]


const Activities = () => {
  return (
    <div className="lg:h-32 my-9">
        <div className="max-w-6xl mx-5 grid-cols-1  h-full gap-10 lg:gap-4 grid lg:grid-cols-4
        ">
            {activities.map((item,index)=>{
                return(
                    <div key={index}  className="flex gap-6 lg:gap-2 h-full w-full items-center ">
                        {item.icon}
                         <div>

                        <h3 className="text-primary font-bold">{item.label}</h3>
                        <h6 className="text-gray-400 font-semibold">{item.desc}</h6>
                         </div>
                    </div>
                )
            })}
        </div>


    </div>
  )
}

export default Activities