import React, { FC, useState, HTMLAttributes, useRef } from 'react'
import { twMerge } from 'tailwind-merge'

import useClickOutside from '@/lib/hooks/useClickOutside'

import { BiChevronUp } from 'react-icons/bi'

interface DropDownProps extends HTMLAttributes<HTMLDivElement> {
  title?: string
  selectedOption: any
  options: { value: any; label?: any }[]
  handleChange: (value: any) => void
  expandLeft?: boolean
}

export const DropDown: FC<DropDownProps> = ({
  title = '',
  selectedOption,
  options,
  handleChange,
  expandLeft = true,
  className,
  ...props
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const ref = useRef(null)
  useClickOutside(ref, () => setIsOpen(false))
  const toggleOpen = () => {
    setIsOpen(curr => !curr)
  }

  const handleSelection = (value: any) => {
    if (value !== selectedOption) handleChange(value)
    setIsOpen(false)
  }

  const style = twMerge('relative flex w-fit items-center', className)
  return (
    <div className={style} {...props} ref={ref}>
      <button onClick={toggleOpen} className="flex items-center">
        <h6 className="font-semibold">{title}</h6>
        <BiChevronUp
          className={`${isOpen ? 'rotate-0' : 'rotate-180'} transition-all`}
        />
      </button>
      <div
        className={`absolute ${
          expandLeft ? 'right-0' : 'left-0'
        } top-full flex w-fit origin-top flex-col rounded-sm bg-white text-left shadow-black drop-shadow-lg transition-all ${
          isOpen ? 'scale-y-100 opacity-100' : 'scale-y-0 opacity-0'
        }`}
      >
        {isOpen &&
          options.map((opt, index) => (
            <button
              key={opt.value}
              onClick={() => handleSelection(opt.value)}
              className={`w-full whitespace-nowrap p-4 text-left text-sm ${
                index !== 0 ? 'border-gray border-t-2' : 'border-none'
              }
                ${
                  opt.value === selectedOption
                    ? 'bg-gray-400/20'
                    : 'cursor-pointer bg-white hover:bg-gray-100'
                }`}
            >
              {opt.label || opt.value}
            </button>
          ))}
      </div>
    </div>
  )
}
