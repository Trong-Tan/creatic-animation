import { useInView } from 'react-intersection-observer'
import { twMerge } from 'tailwind-merge'
import Button from './ui/Button'
import video from '@/assets/svgs/video.svg'
import uxui from '@/assets/svgs/uxui.svg'
import website from '@/assets/svgs/website.svg'
import graphic from '@/assets/svgs/graphic.svg'

const SECTIONS = [
  { img: video, title: 'VIDEO MARKETING', animation: 'animate-fade-right' },
  { img: uxui, title: 'GRAPHIC DESIGN', animation: 'animate-fade-down' },
  { img: website, title: 'UX/UI DESIGN', animation: 'animate-fade-up' },
  { img: graphic, title: 'WEBSITE DESIGN', animation: 'animate-fade-left' }
]

interface Props {
  className?: string
}

export default function OurServices({ className }: Props) {
  const { ref, inView } = useInView({
    triggerOnce: true
  })

  console.log(ref)
  return (
    <div
      className={twMerge('grid grid-flow-row lg:grid-flow-col md:px-9  relative', className)}
      id="our-service"
      ref={ref}
    >
      <div
        className={`flex flex-col justify-center items-center text-center md:justify-start md:items-start md:text-left gap-6 ${
          inView ? 'animate-fade-right' : ''
        }`}
      >
        <p className="text-primary">OUR SERVICES</p>
        <p className="text-4xl lg:text-5xl font-[700]">
          Experience The Power <br /> Of <span className="text-primary"> Innovation.</span>
        </p>
        <div className=" h-1 w-24 bg-white" />
        <p className="text-lg lg:text-2xl w-2/5 md:justify-start md:items-start md:text-left">
          Lorem ipsum Neque porro quisquam est qui do lorem ipsum quia dolor sit amet, Neque porro elit NeDque porro
          Neque porro quisquam est qui do lorem ipsum quia dolor sit amets ipsum
        </p>
        <Button className="w-fit">VIEW ALL</Button>
      </div>
      <div className=" grid grid-cols-2 grid-rows-2 lg:-ml-52">
        {SECTIONS.map(section => (
          <div className={`flex flex-col justify-center items-center p-9 ${inView ? section.animation : ''}`}>
            <img src={section.img} alt="" />
            <p className="text-primary text-center w-fit">{section.title}</p>
            <p className="text-center text-lg lg:text-2xl">Lorem ipsum Neque do porro quisquam est qui do quam </p>
          </div>
        ))}
      </div>
    </div>
  )
}
