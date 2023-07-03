import { useState } from 'react'
import { ApiModelsResponse } from '@/lib/types/api.types'
import { ValueOf } from 'next/dist/shared/lib/constants'

type ModelSortFunction = (a: ApiModelsResponse, b: ApiModelsResponse) => number

export default function useOrderBy() {
  const CRITERIA = {
    NONE: 'NONE',
    PRECIO_ASC: 'PRECIO_ASC',
    PRECIO_DESC: 'PRECIO_DESC',
    VIEJO: 'VIEJO',
    NUEVO: 'NUEVO'
  } as const

  const defaultFun: ModelSortFunction = (a, b) => a.id - b.id

  function matchCriteria(
    criteria: ValueOf<typeof CRITERIA>
  ): ModelSortFunction {
    switch (criteria) {
      case CRITERIA.NUEVO:
        return (a, b) => b.year - a.year
      case CRITERIA.VIEJO:
        return (a, b) => a.year - b.year
      case CRITERIA.PRECIO_ASC:
        return (a, b) => a.price - b.price
      case CRITERIA.PRECIO_DESC:
        return (a, b) => b.price - a.price
      case CRITERIA.NONE:
      default:
        return defaultFun
    }
  }

  const [currentCriteria, setCurrentCriteria] = useState<
    ValueOf<typeof CRITERIA>
  >(CRITERIA.NONE)

  return {
    CRITERIA,
    currentCriteria,
    setCurrentCriteria,
    sortFunction: matchCriteria(currentCriteria)
  }
}
