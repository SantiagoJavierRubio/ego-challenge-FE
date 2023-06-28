import { ApiModelsResponse } from '@/lib/types/api.types'
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
      className="flex aspect-square h-full w-full cursor-pointer flex-col items-center justify-start text-center"
      onClick={handleSelect}
    >
      <h6
        className={`mb-2 truncate text-2xl font-semibold ${
          isSelected ? 'text-red-600' : 'text-inherit'
        }`}
      >
        {modelData.name}
      </h6>
      <p className="text-sm font-light">
        {modelData.year} <span className="px-1">|</span> $
        {modelData.price.toLocaleString()}
      </p>
      <div className="flex w-full grow flex-col items-center justify-center">
        <img src={modelData.thumbnail} alt={modelData.name} width="300px" />
      </div>
      <a href={`/modelos/${modelData.id}`}>
        <div
          className={`rounded-xl bg-black px-6 py-2 text-white ${
            isSelected ? 'visible' : 'invisible'
          }`}
        >
          Ver Modelo
        </div>
      </a>
    </div>
  )
}
