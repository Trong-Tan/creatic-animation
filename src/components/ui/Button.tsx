import { PropsWithChildren } from 'react'
import { twMerge } from 'tailwind-merge'

type ButtonProps = PropsWithChildren<{
  className?: string
}>

export default function Button({ children, className }: ButtonProps) {
  return (
    <button
      type="button"
      className={twMerge('text-xl px-6 py-3 border border-primary hover:bg-primary hover:text-white', className)}
    >
      {children}
    </button>
  )
}
