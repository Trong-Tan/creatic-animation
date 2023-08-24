import { useInView } from 'react-intersection-observer'
import { twMerge } from 'tailwind-merge'
import Button from './ui/Button'
import address from '@/assets/svgs/address.svg'
import phone from '@/assets/svgs/phone.svg'
import email from '@/assets/svgs/email.svg'

const contacts = [
  { icon: address, title1: 'Office Address', title2: '98, Arca St, PR City, 33414 , Indonesia' },
  { icon: phone, title1: 'Call Us', title2: '(+BK) 123 456 7891' },
  { icon: email, title1: 'Mail Us', title2: 'info@creaticagency.com' }
]

interface Props {
  className?: string
}

export default function Contact({ className }: Props) {
  const { ref, inView } = useInView({
    triggerOnce: true
  })

  console.log(ref)
  return (
    <div
      className={twMerge('grid grid-cols-1 grid-rows-2 md:flex md:gap-10  lg:grid-cols-2 ', className)}
      id="contact"
      ref={ref}
    >
      <div
        className={`flex gap-6 flex-col lg:w-1/2 ${
          inView ? 'animate-fade-left' : ''
        } mt-20 xl:mt-28 2xl:mt-44 lg:mb-52 lg:ml-28 2xl:ml-72 lg:mr-28`}
      >
        <div className="flex justify-center items-center md:justify-start md:items-start flex-col gap-6">
          <p className="text-5xl font-[700] text-center">
            GET IN <span className="text-primary ">TOUCH </span>
          </p>
          <div className=" h-1 w-24 bg-white " />
        </div>
        <p className="text-white w-auto">
          Lorem ipsum Neque porro quisquam est qui do lorem ipsum quia dolor sit amet, Neque porro elit NeDque porro
        </p>
        <div className="grid grid-flow-row gap-10">
          {contacts.map(cont => (
            <div className="flex">
              <img src={cont.icon} className="" alt="" />
              <div className="flex flex-col ml-8 ">
                <p className="text-white text-xl font-bold">{cont.title1}</p>
                <p className="text-primary text-sm font-light">{cont.title2}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-center items-center xl:w-1/2 rounded-3xl bg-coner">
        <form
          action=""
          className={`grid grid-flow-row bg-[#11182a] gap-5 w-full  h-auto p-9 xl:mr-44 2xl:ml-9 2xl:my-32 2xl:mr-80 rounded-3xl ${
            inView ? 'animate-fade-up' : ''
          }`}
        >
          <label htmlFor="" className="font-normal font-pop text-base">
            YOUR NAME
          </label>
          <input type="text" className="bg-transparent text-black  border border-gray-300 rounded-md w-auto h-12" />
          <label htmlFor="" className="font-normal font-pop text-base">
            YOUR EMAIL
          </label>
          <input type="text" className="bg-transparent text-black  border border-gray-300 rounded-md w-auto h-12" />
          <label htmlFor="" className="font-normal font-pop text-base">
            YOUR MESSAGE
          </label>
          <input type="textarea" className="bg-transparent text-black  border border-gray-300 rounded-md w-auto h-44" />
          <Button className="w-fit">SENT MESSAGE</Button>
        </form>
      </div>
    </div>
  )
}
