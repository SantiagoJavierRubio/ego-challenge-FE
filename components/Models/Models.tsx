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
    {
      value: CRITERIA.PRECIO_ASC,
      label: (
        <p>
          De <span className="font-semibold">menor</span> a{' '}
          <span className="font-semibold">mayor</span> precio
        </p>
      )
    },
    {
      value: CRITERIA.PRECIO_DESC,
      label: (
        <p>
          De <span className="font-semibold">mayor</span> a{' '}
          <span className="font-semibold">menor</span> precio
        </p>
      )
    },
    {
      value: CRITERIA.NUEVO,
      label: (
        <p>
          Más <span className="font-semibold">nuevos</span> primero
        </p>
      )
    },
    {
      value: CRITERIA.VIEJO,
      label: (
        <p>
          Más <span className="font-semibold">viejos</span> primero
        </p>
      )
    }
  ]

  return (
    <section className="my-8 sm:my-12">
      <div className="flex items-center justify-between pb-4">
        <div className="hidden items-center justify-evenly gap-2 md:flex md:gap-0">
          <h6 className="whitespace-nowrap text-sm font-semibold md:mr-2">
            Filtrar por
          </h6>
          <button
            onClick={resetFilters}
            disabled={!selectedSegment}
            className="rounded-2xl p-1 px-4 text-sm disabled:bg-gray-100"
          >
            Todos
          </button>
          {Array.from(SEGMENTS).map(segment => (
            <button
              key={segment}
              onClick={() => filterBySegment(segment)}
              disabled={segment === selectedSegment}
              className="rounded-2xl p-1 px-4 text-sm disabled:bg-gray-100"
            >
              {segment}
            </button>
          ))}
        </div>
        <DropDown
          key="sort-dropdown"
          selectedOption={selectedSegment}
          handleChange={filterBySegment}
          options={[
            { value: undefined, label: 'Todos' },
            ...Array.from(SEGMENTS).map(segment => ({ value: segment }))
          ]}
          title="Filtrar por"
          expandLeft={false}
          className="ml-4 md:hidden"
        />
        <DropDown
          key="order-by-dropdown"
          selectedOption={currentCriteria}
          handleChange={handleSortSelection}
          options={options}
          title={'Ordernar por'}
          className="mr-4 md:m-0"
        />
      </div>
      <hr />
      <div className="mt-4 grid w-full grid-cols-1 gap-y-8 sm:mt-12 sm:grid-cols-2 sm:gap-6 md:grid-cols-3 lg:grid-cols-4">
        {filtered.sort(sortFunction).map(model => (
          <ModelCard
            key={model.id}
            modelData={model}
            selectedId={selectedModelId}
            setSelected={setSelectedModelId}
          />
        ))}
      </div>
    </section>
  )
}
