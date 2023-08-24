import { useInView } from 'react-intersection-observer'
import { twMerge } from 'tailwind-merge'
import ourWork1 from '@/assets/images/our-work1.png'
import ourWork2 from '@/assets/images/our-work2.png'
import ourWork3 from '@/assets/images/our-work3.png'

const SECTIONS = [
  { img: ourWork1, animation: 'animate-fade-right' },
  { img: ourWork2, animation: 'animate-fade-up' },
  { img: ourWork3, animation: 'animate-fade-left' }
]

interface Props {
  className?: string
}

export default function OurWork({ className }: Props) {
  const { ref, inView } = useInView({
    triggerOnce: true
  })

  console.log(ref)
  return (
    <div className={twMerge('', className)} id="detail" ref={ref}>
      <h1 className=" text-center text-4xl lg:text-5xl font-[700]">
        ENJOY OUR <span className="text-primary">LATEST </span> <br /> PROJECTS{' '}
      </h1>
      <div className=" flex justify-center items-center gap-3 pt-12">
        <div className="h-1 w-24 bg-white" />
        <p className="text-primary">OUR WORK</p>
        <div className="h-1 w-24 bg-white" />
      </div>
      {/* overflow-x-auto overflow-y-hidden  scroll-smooth */}
      <div
        id="default-carousel"
        className="flex overflow-x-auto overflow-y-hidden  scroll-smooth md:overflow-hidden 2xl:gird 2xl:grid-cols-3 2xl:grid-rows-1 gap-7 mt-12"
        data-carousel="slide"
      >
        {SECTIONS.map(section => (
          <img
            key={section.img}
            src={section.img}
            className={`h-64 lg:h-80 2xl:h-[600px] hover:scale-125 duration-700 w-full ${
              inView ? section.animation : ''
            }`}
            alt="..."
          />
        ))}
      </div>
    </div>
  )
}
