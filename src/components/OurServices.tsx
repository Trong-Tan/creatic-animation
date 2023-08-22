import { useInView } from 'react-intersection-observer'
import { twMerge } from 'tailwind-merge'
import Button from './ui/Button'
import video from '@/assets/svgs/video.svg'
import uxui from '@/assets/svgs/uxui.svg'
import website from '@/assets/svgs/website.svg'
import graphic from '@/assets/svgs/graphic.svg'

const images = [
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
    <div className={twMerge('flex px-68 relative', className)} id="our-service" ref={ref}>
      {inView && (
        <div className="flex gap-6 flex-col animate-fade-right">
          <p className="text-primary">OUR SERVICES</p>
          <p className="text-5xl font-[700]">
            Experience The Power <br /> Of <span className="text-primary"> Innovation.</span>
          </p>
          <div className=" h-1 w-24 bg-white" />
          <p className="w-2/5">
            Lorem ipsum Neque porro quisquam est qui do lorem ipsum quia dolor sit amet, Neque porro elit NeDque porro
            Neque porro quisquam est qui do lorem ipsum quia dolor sit amets ipsum
          </p>
          <Button className="w-fit">VIEW ALL</Button>
        </div>
      )}
      {inView && (
        <div className=" grid grid-cols-2 grid-rows-2 -ml-52">
          {images.map(imgs => (
            <div className={`flex flex-col justify-center items-center p-9 ${imgs.animation}`}>
              <img src={imgs.img} alt="" />
              <p className="text-primary text-center w-fit">{imgs.title}</p>
              <p className="text-center">Lorem ipsum Neque do porro quisquam est qui do quam </p>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
