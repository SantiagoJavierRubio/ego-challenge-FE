'use client'
import React, { FC, PropsWithChildren } from 'react'
import { useSelectedLayoutSegment, useParams } from 'next/navigation'

interface NavIndicatorProps extends PropsWithChildren {
  pageName?: 'MODELOS' | 'FICHA'
}

export const NavIndicator: FC<NavIndicatorProps> = ({ children, pageName }) => {
  const segment = useSelectedLayoutSegment()
  const params = useParams()
  if (segment !== 'modelos') return null
  const isActual =
    (pageName === 'FICHA' && params.id !== undefined) ||
    (pageName === 'MODELOS' && params.id === undefined)
  return (
    <div className="relative mt-2 h-full px-2">
      <div
        className={`font-semibold ${
          isActual ? 'text-red-500' : 'text-inherit'
        }`}
      >
        {children}
      </div>
      {isActual && (
        <div className="absolute -inset-x-2 -bottom-1 border-b-4 border-red-500" />
      )}
    </div>
  )
}
