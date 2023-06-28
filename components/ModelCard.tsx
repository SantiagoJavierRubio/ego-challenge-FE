import { ApiModelsResponse } from '@/lib/types/api.types'
import React, { FC } from 'react'

interface ModelCardProps {
  modelData: ApiModelsResponse
}

export const ModelCard: FC<ModelCardProps> = ({ modelData }) => {
  return (
    <div>
     <h6>{modelData.name}</h6>
     <p>{modelData.year} | {modelData.price}</p>
     <img src={modelData.thumbnail} alt={modelData.name} />
    </div>
  )
}