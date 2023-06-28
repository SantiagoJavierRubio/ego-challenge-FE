'use client'
import React, { FC, useState } from 'react'
import { ApiModelsResponse } from '@/lib/types/api.types'
import { ModelCard } from './ModelCard'

interface modelsProps {
  models: ApiModelsResponse[]
}

export const Models: FC<modelsProps> = ({ models }) => {
  const SEGMENTS = new Set(models.map(model => model.segment))
  const [filtered, setFilter] = useState<ApiModelsResponse[]>(models)
  const [selectedSegment, setSelectedSegment] = useState<
    ApiModelsResponse['segment'] | undefined
  >(undefined)

  const filterBySegment = (segment: ApiModelsResponse['segment']) => {
    setSelectedSegment(segment)
    setFilter(...[models.filter(m => m.segment === segment)])
  }
  const resetFilters = () => {
    setSelectedSegment(undefined)
    setFilter(models)
  }
  return (
    <div>
      <div className="flex items-center justify-evenly gap-4">
        <button onClick={resetFilters} disabled={selectedSegment === undefined}>
          Todos
        </button>
        {Array.from(SEGMENTS).map(segment => (
          <button
            key={segment}
            onClick={() => filterBySegment(segment)}
            disabled={segment === selectedSegment}
          >
            {segment}
          </button>
        ))}
      </div>
      {filtered.map(model => (
        <ModelCard key={model.id} modelData={model} />
      ))}
    </div>
  )
}
