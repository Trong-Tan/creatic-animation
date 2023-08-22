import { useInView } from 'react-intersection-observer'
import { twMerge } from 'tailwind-merge'
import group from '@/assets/svgs/group.svg'
import group2 from '@/assets/svgs/group2.svg'
import group3 from '@/assets/svgs/group3.svg'
import group4 from '@/assets/svgs/group4.svg'

const images = [
  { img: group, title: '50+', title2: 'Team members' },
  { img: group2, title: '200+', title2: 'Project done' },
  { img: group3, title: '500+', title2: 'Happy customers' },
  { img: group4, title: '75+', title2: 'Award Winning' }
]

interface Props {
  className?: string
}

export default function SectionDetail({ className }: Props) {
  const { ref, inView } = useInView({
    triggerOnce: true
  })

  console.log(ref)
  return (
    <div
      className={twMerge('bg-gradient-to-r from-[rgba(21,21,21,0)] to-[rgba(109,150,252,0.3)] px-12', className)}
      id="detail"
      ref={ref}
    >
      {inView && (
        <div className="grid grid-cols-4">
          {images.map(imgs => (
            <div className={`flex flex-col justify-center items-center pt-20 pb-16 `}>
              <img src={imgs.img} alt="" />
              <p className="text-white text-center w-fit text-6xl">{imgs.title}</p>
              <p className="text-primary text-center">{imgs.title2}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
