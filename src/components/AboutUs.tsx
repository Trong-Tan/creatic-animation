import aboutUs from '@/assets/images/about-us.png'
import { useInView } from 'react-intersection-observer'
import { twMerge } from 'tailwind-merge'
import Button from './ui/Button'

interface Props {
  className?: string
}

export default function AboutUs({ className }: Props) {
  const { ref, inView } = useInView({
    triggerOnce: true
  })

  console.log(ref)
  return (
    <div className={twMerge('flex px-68 relative', className)} id="about-us" ref={ref}>
      {inView && (
        <>
          <div className="absolute bg-gradient-to-r from-[rgba(109,150,252,0.3)] to-[rgba(21,21,21,0)] h-full w-96 left-[-100px]"></div>
          <img src={aboutUs} alt="about-us" className=" w-1/2 animate-fade-right" />
        </>
      )}
      {inView && (
        <div className="flex gap-6 flex-col w-1/2 animate-fade-left">
          <p className="text-primary">ABOUT US</p>
          <p className="text-5xl font-[700]">
            We Bring <span className="text-primary ">Creative </span> Ideas <br /> To life.
          </p>
          <div className="block h-1 w-24 bg-white" />
          <p className="text-primary"> We love Creating </p>
          <p>
            Lorem ipsumNeque porro quisquam est qui do lorem ipsum quia dolor sit amet, Neque porro elit NeDque porro
            Lorem ipsum Neque porro Neque porro Neque porro quisquam est qui do lorem ipsum quia dolor sit amet, Lorem
            ipsum Neque quis ipsum
          </p>
          <Button className="w-fit">READ MORE</Button>
        </div>
      )}
    </div>
  )
}
