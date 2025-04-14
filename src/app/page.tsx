import Activities from "@/components/activities";
import Admissions from "@/components/admission";
import Hero from "@/components/hero";


export default function Home() {
  return (
    <div className="min-h-screen" >
    <Hero/>
    <Activities/>
    <Admissions/>
    </div>
  );
}
