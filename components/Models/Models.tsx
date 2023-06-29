'use client'
import React, { FC, useState, useCallback } from 'react'
import { ApiModelsResponse } from '@/lib/types/api.types'
import { ModelCard } from './ModelCard'
import useFilterSegments from './hooks/useFilterSegments'
import useOrderBy from './hooks/useOrderBy'
import { ValueOf } from 'next/dist/shared/lib/constants'

import { DropDown } from '../Common/DropDown'

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

  const handleSortSelection = (value: ValueOf<typeof CRITERIA>) => {
    if (Object.values(CRITERIA).includes(value)) setCurrentCriteria(value)
  }

  const options = [
    { value: CRITERIA.NONE, label: 'Ninguno' },
    { value: CRITERIA.PRECIO_ASC, label: 'De menor a mayor precio' },
    { value: CRITERIA.PRECIO_DESC, label: 'De mayor a menor precio' },
    { value: CRITERIA.NUEVO, label: 'Más nuevos primero' },
    { value: CRITERIA.VIEJO, label: 'Más viejos primero' }
  ]

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
        <DropDown
          selectedOption={currentCriteria}
          onChange={handleSortSelection}
          options={options}
          title={'Ordernar por'}
        />
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
