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
    <div className={twMerge('flex  2xl:px-68 relative', className)} id="about-us" ref={ref}>
      <img
        src={aboutUs}
        alt="about-us"
        className={`absolute w-full bg-gradient-liner top-14 md:top-0 sm:w-1/2 xl:left-0 -z-20 ${
          inView ? 'animate-fade-right' : ''
        }`}
      />
      <div
        className={`flex flex-col justify-center items-center text-center sm:justify-start sm:items-start mt-12 md:mt-0 sm:text-left gap-6 px-5 xl:mt-36 w-full sm:ml-auto sm:w-1/2  ${
          inView ? 'animate-fade-left' : ''
        }`}
      >
        <p className="text-primary">ABOUT US</p>
        <p className="text-4xl lg:text-5xl  font-bold">
          We Bring <span className="text-primary ">Creative</span>
          <br />
          Ideas To life.
        </p>
        <div className="block h-1 w-24 bg-white" />
        <p className="text-primary"> We love Creating </p>
        <p className="text-lg lg:text-2xl ">
          Lorem ipsumNeque porro quisquam est qui do lorem ipsum quia dolor sit amet, Neque porro elit NeDque porro
          Lorem ipsum Neque porro Neque porro Neque porro quisquam est qui do lorem ipsum quia dolor sit amet, Lorem
          ipsum Neque quis ipsum
        </p>
        <Button className="w-fit">
          <p className="text-sm lg:text-xl">READ MORE</p>
        </Button>
      </div>
    </div>
  )
}
