import { useInView } from 'react-intersection-observer'
import { twMerge } from 'tailwind-merge'
import ourWork1 from '@/assets/images/ourWork1.png'
import ourWork2 from '@/assets/images/ourWork2.png'
import ourWork3 from '@/assets/images/ourWork3.png'

const images = [
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
      {inView && (
        <>
          <h1 className="text-5xl text-center font-bold">
            ENJOY OUR <span className="text-primary">LATEST </span> <br /> PROJECTS{' '}
          </h1>
          <div className=" flex justify-center items-center gap-3 pt-12">
            <div className="block h-1 w-24 bg-white" />
            <p className="text-primary">OUR WORK</p>
            <div className="block h-1 w-24 bg-white" />
          </div>
          <div id="default-carousel" className="flex  gap-7 mt-12" data-carousel="slide">
            {images.map(imgs => (
              <div className=" duration-700 ease-in-out pt-14 pb-14 justify-center" data-carousel-item>
                <img
                  src={imgs.img}
                  className={` w-[600px] h-[600px] hover:w-[650px] hover:h-[650px] pt-12 pb-12 hover:p-0 ${imgs.animation}`}
                  alt="..."
                />
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  )
}
