import Image from 'next/image'
import { Button } from './ui/button'

const Hero = () => {
  return (
    <div className=' h-64 md:h-screen relative   w-full bg-cover bg-center bg-no-repeat'  >
              <div className="absolute inset-0 z-0">
          <Image src="/assets/ruvheneko_hero.jpg" alt="Student studying" fill className="object-cover" priority />
        </div>
        <div className='absolute insert-0 bg-gradient-to-r from-blue-950 to-slate-400/20 w-full h-full '/>
        <div className="mx-6 flex flex-col gap-y-4 justify-center h-full relative z-10 text-white">
          <h1 className="text-base md:text-2xl lg:text-2xl  max-w-2xl capitalize">The Fastest developing school in the province</h1>
          <h3 className='font-playfair text-2xl lg:text-5xl font-bold'>Ruvheneko Secondary School</h3>
          <div>
          <Button className='bg-white rounded-none text-black px-0 py-0' >
            <div className='bg-secondary h-full w-1'/>
            <p className='px-3 text-xs lg:text-base'>Take a Tour</p>
          </Button>
          </div>
          
        </div>
    </div>
  )
}

export default Hero