import welcome from '@/assets/images/welcome.png'
import { twMerge } from 'tailwind-merge'
import Button from './ui/Button'
import { useInView } from 'react-intersection-observer'

interface Props {
  className?: string
}

export default function Welcome({ className }: Props) {
  const { ref, inView } = useInView({
    triggerOnce: true
  })

  return (
    <div className={twMerge(className, 'xl:px-9 2xl:px-68')}>
      <div
        className={`sm:w-1/2 z-40 flex flex-col justify-center relative items-center md:justify-start md:items-start md:text-left text-center animate-fade-right`}
      >
        <p className="text-primary ">Welcome to creatic</p>
        <p className="text-4xl lg:text-5xl font-bold mt-11">
          WE ARE <span className="text-primary ">CREATIVE </span> DESIGN AGENCY
        </p>
        <div className="bg-primary  items-center w-36 h-1 my-11" />
        <p className="text-lg lg:text-2xl">
          Lorem ipsumNeque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit Neque
          porro elit Neque porro quis ipsum
        </p>
        <Button className="mt-11">
          <p className="text-sm lg:text-xl">GET IN TOUCH</p>
        </Button>
      </div>
      {/* <div className="absolute bg-gradient-liner  h-200  right-0 top-0"> */}
      <img src={welcome} alt="welcome" className=" absolute h-fit w-fit mt-32 sm:mt-56 right-0 top-0 " />
      {/* </div> */}
    </div>
  )
}
