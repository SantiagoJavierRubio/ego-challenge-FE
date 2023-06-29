'use client'
import React, { FC, useState, useCallback, useEffect } from 'react'
import { ApiModelsResponse } from '@/lib/types/api.types'
import { ModelCard } from './ModelCard'
import useFilterSegments from './hooks/useFilterSegments'
import useOrderBy from './hooks/useOrderBy'
import { ValueOf } from 'next/dist/shared/lib/constants'

interface modelsProps {
  models: ApiModelsResponse[]
}

export const Models: FC<modelsProps> = ({ models }) => {
  const { SEGMENTS, filtered, selectedSegment, changeFilter } =
    useFilterSegments(models)
  const { CRITERIA, currentCriteria, setCurrentCriteria, sortFunction } =
    useOrderBy()

  const [selectedModelId, setSelectedModel] = useState<number | undefined>(
    undefined
  )
  const setSelectedModelId = useCallback((id: number) => {
    if (id !== undefined) setSelectedModel(prev => (prev !== id ? id : prev))
  }, [])

  const filterBySegment = (segment: ApiModelsResponse['segment']) => {
    changeFilter(segment)
    setSelectedModel(undefined)
  }
  const resetFilters = () => {
    changeFilter(undefined)
    setSelectedModel(undefined)
  }

  const handleSortSelection = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const val = e.target.value as ValueOf<typeof CRITERIA>
    if (Object.values(CRITERIA).includes(val)) setCurrentCriteria(val)
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
      <div>
        <select value={currentCriteria} onChange={handleSortSelection}>
          <option value={CRITERIA.NONE}>Ninguno</option>
          <option value={CRITERIA.PRECIO_ASC}>De menor a mayor precio</option>
          <option value={CRITERIA.PRECIO_DESC}>De mayor a menor precio</option>
          <option value={CRITERIA.NUEVO}>Más nuevos primero</option>
          <option value={CRITERIA.VIEJO}>Más viejos primero</option>
        </select>
      </div>
      <div className="mt-16 grid w-full grid-cols-1 gap-0 sm:grid-cols-2 sm:gap-6 md:grid-cols-3 lg:grid-cols-4">
        {filtered.sort(sortFunction).map(model => (
          <ModelCard
            key={model.id}
            modelData={model}
            selectedId={selectedModelId}
            setSelected={setSelectedModelId}
          />
        ))}
      </div>
    </div>
  )
}
