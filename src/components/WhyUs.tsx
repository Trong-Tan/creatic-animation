import { useInView } from 'react-intersection-observer'
import { twMerge } from 'tailwind-merge'
import Button from './ui/Button'
import vector from '@/assets/svgs/vector.svg'

interface Props {
  className?: string
}

export default function AboutUs({ className }: Props) {
  const { ref, inView } = useInView({
    triggerOnce: true
  })

  console.log(ref)
  return (
    <div
      className={twMerge('grid grid-flow-row sm:grid-flow-col gap-12 sm:px-9 2xl:px-68 ', className)}
      id="why-us"
      ref={ref}
    >
      <div
        className={`flex flex-col justify-center items-center text-center md:justify-start md:items-start md:text-left gap-6  mr-16 w-fit ${
          inView ? 'animate-fade-up' : ''
        }`}
      >
        <span className="text-white">WHY US?</span>
        <div className="bg-primary block w-36 h-1 mt-1 mb-6" />
        <p className=" text-4xl lg:text-5xl font-[700]">
          25 YEAR OF <span className="text-primary">EXPERIENCE </span>
          <br /> AS A CREATIVE ENERGY
        </p>
        <Button className=" mt-11">READ MORE</Button>
      </div>
      <div className=" sm:ml-auto flex flex-col justify-center items-center text-center md:justify-start md:items-start md:text-left gap-6 ">
        <p className={`text-lg md:text-2xl ${inView ? 'animate-fade-up' : ''}`}>
          Lorem ipsum Neque porro quisquam est qui do <br /> lorem ipsum quia dolor sit amet, Neque porro elit <br />
          NeDque porro Lorem ipsum
        </p>
        <div className="mt-10">
          {['HAPPY CUSTOMER', 'Experienced Team', 'Modern Technology'].map((title, index) => (
            <div
              className={`flex gap-3 ${inView ? 'animate-fade-up' : ''}`}
              style={{ animationDelay: `${index}s`, animationFillMode: 'both' }}
            >
              <img src={vector} alt="" />
              <p className="text-white">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
