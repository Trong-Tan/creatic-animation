import { twMerge } from 'tailwind-merge'
import searchIcon from '../assets/svgs/search.svg'

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
    <div className={twMerge('flex justify-between', className)}>
      <div className="text-center">
        <p className="text-primary font-semibold text-6xl">CREATIC</p>
        <p className="text-sm">CREATIVE AGENCY</p>
      </div>
      <ul className="flex gap-14 items-center">
        {NAV_LINKS.map(nav => {
          return (
            <li key={nav.name} className="hover:border-b-primary p-2 hover:border-b-4">
              <a href={nav.href}>{nav.name}</a>
            </li>
          )
        })}
        <img src={searchIcon} alt="search" className="cursor-pointer" />
      </ul>
    </div>
  )
}
