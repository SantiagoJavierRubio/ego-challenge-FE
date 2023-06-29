import React, { FC, useState } from 'react'

import { BiChevronUp } from 'react-icons/bi'

interface DropDownProps {
  title?: string
  selectedOption: any
  options: { value: any; label?: string }[]
  onChange: (value: any) => void
}

export const DropDown: FC<DropDownProps> = ({
  title = '',
  selectedOption,
  options,
  onChange
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const toggleOpen = () => {
    setIsOpen(curr => !curr)
  }

  const handleSelection = (value: any) => {
    onChange(value)
    setIsOpen(false)
  }
  return (
    <div className="relative flex w-fit items-center">
      {title}
      <button onClick={toggleOpen}>
        <BiChevronUp
          className={`${isOpen ? 'rotate-0' : 'rotate-180'} transition-all`}
        />
      </button>
      <div
        className={`absolute right-0 top-full flex w-fit origin-top flex-col rounded-sm bg-white text-left shadow-black drop-shadow-lg transition-all ${
          isOpen ? 'scale-y-100 opacity-100' : 'scale-y-0 opacity-0'
        }`}
      >
        {isOpen &&
          options.map((opt, index) => (
            <div
              key={opt.value}
              onClick={() => handleSelection(opt.value)}
              className={`w-full whitespace-nowrap p-4 text-sm ${
                index !== 0 ? 'border-gray border-t-2' : 'border-none'
              }
                ${
                  opt.value === selectedOption
                    ? 'bg-gray-400/20'
                    : 'cursor-pointer bg-white hover:bg-gray-100'
                }`}
            >
              {opt.label || opt.value}
            </div>
          ))}
      </div>
    </div>
  )
}
