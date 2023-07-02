'use client'
import React, { FC, useState, PropsWithChildren, TouchEvent } from 'react'
import { BiChevronLeft } from 'react-icons/bi'

interface CarouselProps extends PropsWithChildren {
  items: React.ReactNode[]
}

const TOUCH_SCREEN_SLIDE_TOLERANCE = 35

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
  const [touchStart, setTouchStart] = useState<number | null>(null)

  const goNext = () => {
    setPage(prev => getModProximal(prev, 1, items.length))
  }
  const goPrev = () => {
    setPage(prev => getModProximal(prev, -1, items.length))
  }

  const handleTouchStart = (e: TouchEvent) => {
    setTouchStart(e.touches[0].screenX)
  }

  const handleTouchEnd = (e: TouchEvent) => {
    if (touchStart !== null) {
      const dif = touchStart - e.changedTouches[0].screenX
      if (dif < 0 && dif < TOUCH_SCREEN_SLIDE_TOLERANCE * -1) {
        goPrev()
      } else if (dif > TOUCH_SCREEN_SLIDE_TOLERANCE) goNext()
      setTouchStart(null)
    }
  }

  return (
    <div
      id="carousel-container"
      className="flex w-full flex-col bg-gray-100 pt-8"
    >
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
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <div
            id="carousel-content"
            className={`flex w-full gap-6 md:-ml-10 md:h-64 lg:-ml-16`}
          >
            <div
              key={`prev-at-${page - 1}`}
              className="relative hidden h-full shrink-0 grow md:block md:w-1/4 md:opacity-20 lg:w-1/5 xl:w-1/6"
            >
              {items[getModProximal(page, -1, items.length)]}
            </div>
            <div
              key={`main-at-${page}`}
              className="w-[90%] shrink-0 grow animate-appear md:w-1/4 lg:w-1/5 xl:w-1/6"
            >
              {items[page]}
            </div>
            <div
              key={`second-at-${page + 1}`}
              className="w-[90%] shrink-0 grow -translate-x-4 animate-appear sm:translate-x-0 md:w-1/4 lg:w-1/5 xl:w-1/6"
            >
              {items[getModProximal(page, 1, items.length)]}
            </div>
            <div
              key={`third-at-${page + 2}`}
              className="shrink-0 grow -translate-x-4 animate-appear sm:translate-x-0 md:w-1/4 md:animate-none md:opacity-20 lg:w-1/5 lg:animate-appear lg:opacity-100 xl:w-1/6"
            >
              {items[getModProximal(page + 1, 1, items.length)]}
            </div>
            <div
              key={`fourth-at-${page + 3}`}
              className="shrink-0 grow -translate-x-4 animate-appear sm:translate-x-0 md:w-1/4 lg:w-1/5 lg:animate-none lg:opacity-20 xl:w-1/6 xl:animate-appear xl:opacity-100"
            >
              {items[getModProximal(page + 2, 1, items.length)]}
            </div>
            <div
              key={`next-at-${page + 4}`}
              className="shrink-0 grow lg:w-1/5 xl:w-1/6 xl:opacity-20"
            >
              {items[getModProximal(page + 3, 1, items.length)]}
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
      <div className="mx-auto my-8 flex items-center">
        {items.map((_, index) => (
          <div key={`indicator-${index}`} className="flex w-10 justify-center">
            <div
              className={`aspect-square h-2 ${
                page === index ? 'w-8 bg-gray-400' : 'w-2 bg-gray-300'
              } origin-center rounded-full transition-all`}
            />
          </div>
        ))}
      </div>
    </div>
  )
}
