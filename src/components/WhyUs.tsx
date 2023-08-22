import { useInView } from 'react-intersection-observer'
import { twMerge } from 'tailwind-merge'
import Button from './ui/Button'
import vector from '@/assets/svgs/vector.svg'

const title = ['HAPPY CUSTOMER', 'Experienced Team', 'Modern Technology']

interface Props {
  className?: string
}

export default function AboutUs({ className }: Props) {
  const { ref, inView } = useInView({
    triggerOnce: true
  })

  console.log(ref)
  return (
    <div className={twMerge('flex px-68 ', className)} id="why-us" ref={ref}>
      {inView && (
        <div className="mr-16 w-fit animate-fade-right">
          <span className="text-white">WHY US?</span>
          <div className="bg-primary block w-36 h-1 mt-1 mb-6" />
          <p className="text-5xl font-bold ">
            25 YEAR OF <span className="text-primary">EXPERIENCE </span>
            <br /> AS A CREATIVE ENERGY
          </p>
          <Button className="mt-11">READ MORE</Button>
        </div>
      )}
      {inView && (
        <div className="  ml-auto animate-fade-up">
          <p className="text-2xl">
            Lorem ipsum Neque porro quisquam est qui do <br /> lorem ipsum quia dolor sit amet, Neque porro elit <br />
            NeDque porro Lorem ipsum
          </p>
          <div className="mt-10">
            {title.map(titles => (
              <div className="flex gap-3">
                <img src={vector} alt="" />
                <p className="text-white">{titles}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
