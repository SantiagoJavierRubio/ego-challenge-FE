import { ApiModelsResponse } from '@/lib/types/api.types'
import Link from 'next/link'
import React, { FC } from 'react'

interface ModelCardProps {
  modelData: ApiModelsResponse
  selectedId?: number
  setSelected: (id: number) => void
}

export const ModelCard: FC<ModelCardProps> = ({
  modelData,
  selectedId,
  setSelected
}) => {
  const isSelected = selectedId === modelData.id
  const handleSelect = () => {
    setSelected(modelData.id)
  }
  return (
    <div
      className="mb-2 flex h-full w-full cursor-pointer flex-col items-center justify-start text-center"
      onClick={handleSelect}
    >
      <h6
        className={`truncate text-2xl font-semibold sm:mb-2 ${
          isSelected ? 'text-red-500' : 'text-inherit'
        } transition-all`}
      >
        {modelData.name}
      </h6>
      <p className="text-sm font-light">
        {modelData.year} <span className="px-1">|</span> $
        {modelData.price.toLocaleString()}
      </p>
      <div className="flex h-48 w-full flex-col items-center justify-center">
        <img src={modelData.thumbnail} alt={modelData.name} width="300px" />
      </div>
      <Link href={`/modelos/${modelData.id}`}>
        <div
          className={`-mt-4 rounded-xl bg-black px-6 py-2 text-white hover:bg-black/75 active:bg-black/50 ${
            isSelected ? 'visible' : 'invisible'
          }`}
        >
          Ver Modelo
        </div>
      </Link>
    </div>
  )
}
