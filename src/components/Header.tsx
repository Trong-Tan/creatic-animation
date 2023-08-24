import { twMerge } from 'tailwind-merge'
import searchIcon from '../assets/svgs/search.svg'
import humburger from '../assets/svgs/hbg.svg'

interface Props {
  className?: string
}

const NAV_LINKS = [
  {
    name: 'Home',
    href: '#'
  },
  {
    name: 'About Us',
    href: '#about-us'
  },
  {
    name: 'Services',
    href: '#services'
  },
  {
    name: 'Portfolio',
    href: '#portfolio'
  },
  {
    name: 'Pages',
    href: '#pages'
  },
  {
    name: 'Contact Us',
    href: '#contact-us'
  }
]

export default function Header({ className }: Props) {
  return (
    <div className={twMerge('flex justify-between xl:px-9 2xl:68', className)}>
      <div className="text-center">
        <p className="text-primary font-semibold text-4xl xl:text-6xl">CREATIC</p>
        <p className="text-xs md:text-sm">CREATIVE AGENCY</p>
      </div>
      <div className="hidden md:block">
        <ul className=" flex gap-4 lg:gap-14 items-center">
          {NAV_LINKS.map(nav => {
            return (
              <li key={nav.name} className="hover:border-b-primary p-2 hover:border-b-4">
                <a href={nav.href} className="text-base lg:text-xl">
                  {nav.name}
                </a>
              </li>
            )
          })}
          <img src={searchIcon} alt="search" className="cursor-pointer" />
        </ul>
      </div>
      <img src={humburger} className="block md:hidden" alt="" />
    </div>
  )
}
