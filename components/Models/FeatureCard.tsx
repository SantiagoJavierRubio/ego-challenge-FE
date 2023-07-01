import { ApiModelDetailsResponse } from '@/lib/types/api.types'
import React, { FC } from 'react'
import parse from 'html-react-parser'

interface FeatureCardProps {
  feature: ApiModelDetailsResponse['model_features'][0]
}

export const FeatureCard: FC<FeatureCardProps> = ({ feature }) => {
  return (
    <div>
      <img
        className="aspect-video w-full select-none rounded-md"
        alt="ilustración de feature"
        src={feature.image}
      />
      <h6 className="my-2 ml-2 text-ellipsis text-sm font-semibold sm:ml-0">
        {feature.name}
      </h6>
      <div className="w-ful ml-2 text-ellipsis text-sm sm:ml-0">
        {parse(feature.description)}
      </div>
    </div>
  )
}
