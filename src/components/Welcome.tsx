import welcome from '@/assets/images/welcome.png'
import { twMerge } from 'tailwind-merge'
import Button from './ui/Button'

interface Props {
  className?: string
}

export default function Welcome({ className }: Props) {
  return (
    <div className={twMerge(className, 'px-68')}>
      <div className="absolute bg-gradient-to-l from-[rgba(109,150,252,0.3)] to-[rgba(21,21,21,0)] h-full w-1/3 left-[1199px] top-28"></div>
      <div className="w-1/2 z-40 animate-fade-right ">
        <p className="text-primary ">Welcome to creatic</p>
        <p className="text-7xl mt-11 font-bold">
          WE ARE <span className="text-primary">CREATIVE </span> DESIGN AGENCY
        </p>
        <div className="bg-primary block w-36 h-1 my-11" />
        <p>
          Lorem ipsumNeque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit Neque
          porro elit Neque porro quis ipsum
        </p>
        <Button className="mt-11">GET IN TOUCH</Button>
      </div>
      <img src={welcome} alt="welcome" className="h-200 absolute -z-20 mt-56 right-0 top-0 " />
    </div>
  )
}
