import { ApiModelDetailsResponse } from '@/lib/types/api.types'
import React, { FC } from 'react'
import parse from 'html-react-parser'

interface FeatureCardProps {
  feature: ApiModelDetailsResponse['model_features'][0]
}

export const FeatureCard: FC<FeatureCardProps> = ({ feature }) => {
  return (
    <div>
      <img className="aspect-video w-full select-none" src={feature.image} />
      <h6>{feature.name}</h6>
      <div>{parse(feature.description)}</div>s
    </div>
  )
}
