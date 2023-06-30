'use client'
import React, { FC, useState, PropsWithChildren } from 'react'
import { BiChevronLeft } from 'react-icons/bi'

interface CarouselProps extends PropsWithChildren {
  items: React.ReactNode[]
}

function getModProximal(
  reference: number,
  direction: 1 | -1,
  size: number
): number {
  if (direction === 1) return (reference + 1) % size
  if (direction === -1) return reference === 0 ? size - 1 : reference - 1
  return 0
}

export const Carousel: FC<CarouselProps> = ({ items }) => {
  const [page, setPage] = useState(0)

  const goNext = () => {
    setPage(prev => getModProximal(prev, 1, items.length))
  }
  const goPrev = () => {
    setPage(prev => getModProximal(prev, -1, items.length))
  }

  return (
    <div id="carousel-container" className="flex w-full flex-col">
      <div id="carousel-wrapper" className="relative flex w-full">
        <div
          className="absolute left-0 top-8 z-10 hidden h-16 cursor-pointer items-center bg-gray-200/75 transition-all hover:bg-gray-300/90 md:flex"
          onClick={goPrev}
        >
          <BiChevronLeft size={28} />
        </div>
        <div
          id="carousel-content-wrapper"
          className="flex h-full w-full flex-nowrap overflow-hidden"
        >
          <div
            id="carousel-content"
            className={`flex w-full gap-8 md:-ml-10 lg:-ml-16`}
          >
            <div className="hidden shrink-0 grow md:block md:w-1/3 lg:w-1/4">
              {items[getModProximal(page, -1, items.length)]}
            </div>
            <div className="w-[90%] shrink-0 grow md:w-1/3 lg:w-1/4">
              {items[page]}
            </div>
            <div className="w-[90%] shrink-0 grow -translate-x-4 sm:translate-x-0 md:w-1/3 lg:w-1/4">
              {items[getModProximal(page, 1, items.length)]}
            </div>
            <div className="shrink-0 grow lg:w-1/4">
              {items[getModProximal(page + 1, 1, items.length)]}
            </div>
          </div>
        </div>
        <div
          className="absolute right-0 top-8 z-10 hidden h-16 rotate-180 cursor-pointer items-center bg-gray-200/75 transition-all hover:bg-gray-300/90 md:flex"
          onClick={goNext}
        >
          <BiChevronLeft size={28} />
        </div>
      </div>
    </div>
  )
}
