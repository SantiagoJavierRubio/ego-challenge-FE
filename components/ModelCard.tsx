import { ApiModelsResponse } from '@/lib/types/api.types'
import React, { FC } from 'react'

interface ModelCardProps {
  modelData: ApiModelsResponse
}

export const ModelCard: FC<ModelCardProps> = ({ modelData }) => {
  return (
    <div className="flex aspect-square w-full flex-col items-center justify-start text-center">
      <h6 className="mb-2 truncate text-2xl font-semibold">{modelData.name}</h6>
      <p className="text-sm font-light">
        {modelData.year} | {modelData.price}
      </p>
      <div className="flex w-full grow flex-col items-center justify-center">
        <img src={modelData.thumbnail} alt={modelData.name} width="300px" />
      </div>
    </div>
  )
}
