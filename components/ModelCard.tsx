import { ApiModelsResponse } from '@/lib/types/api.types'
import React, { FC } from 'react'

interface ModelCardProps {
  modelData: ApiModelsResponse
}

export const ModelCard: FC<ModelCardProps> = ({ modelData }) => {
  return (
    <div>
     ModelCard
     {modelData.name}
     {modelData.price}
     {modelData.year}
    </div>
  )
}