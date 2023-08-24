import { useInView } from 'react-intersection-observer'
import { twMerge } from 'tailwind-merge'
import Button from './ui/Button'
import OurClient1 from '@/assets/images/our-client1.png'
import OurClient2 from '@/assets/images/our-client2.png'
import Ellipse from '@/assets/images/our-work2.png'
import vector2 from '@/assets/svgs/vector2.svg'

interface Props {
  className?: string
}

export default function OurClient({ className }: Props) {
  const { ref, inView } = useInView({
    triggerOnce: true
  })

  console.log(ref)
  return (
    <div className={twMerge('flex ', className)} id="our-client" ref={ref}>
      <div className=" hidden lg:block w-full">
        <img src={OurClient1} className={`w-full h-full ${inView ? 'animate-fade-right' : ''}`} alt="" />
      </div>
      <div className={`flex flex-col just text-center w-fit xl:px-24 pt-16 ${inView ? 'animate-fade-up' : ''}`}>
        <div className={`flex flex-col justify-center items-center text-center `}>
          <p className="text-5xl font-bold ">
            WHAT<span className="text-primary"> OUR </span>
            <br /> CLIENTS SAY?
          </p>
          <div className="bg-primary block w-fit h-1 mt-1 mb-6 " />
        </div>
        <span className="text-white">TESTIMONIALS</span>
        <div className="p-9 bg-[#11182a] rounded-3xl mt-24">
          <p className="text-white w-56 ">
            Lorem ipsum Neque porro quisquam est qui do lorem ipsum quia dolor sit amet, Neque porro elit
          </p>
          <div className="flex p-9 bg-[#11182a] rounded-3xl ">
            <img src={Ellipse} className="w-[100px] h-[100px] rounded-full" alt="" />
            <div className="flex flex-col ml-4 justify-center items-center">
              <p className="text-white text-xl font-bold">Carol Chaves</p>
              <p className="text-primary text-sm font-light">@caroles.gmail.com</p>
            </div>
            <div className="ml-20 flex">
              <img src={vector2} className="" alt="" />
              <img src={vector2} alt="" />
            </div>
          </div>
        </div>
        <Button className="mt-11 w-fit">VIEW ALL TESTIMONIALS </Button>
      </div>
      <div className="w-full">
        <img
          src={OurClient2}
          className={`w-full h-full ml-auto ${inView ? 'animate-fade-left' : ''} hidden lg:block`}
          alt=""
        />
      </div>
    </div>
  )
}
