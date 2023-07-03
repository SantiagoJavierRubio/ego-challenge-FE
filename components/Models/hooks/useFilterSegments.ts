import { useState, useCallback } from 'react'
import { ApiModelsResponse } from '@/lib/types/api.types'

export default function useFilterSegments(models: ApiModelsResponse[]) {
  const SEGMENTS = new Set(models.map(model => model.segment))
  const [filtered, setFilter] = useState<ApiModelsResponse[]>(models)
  const [selectedSegment, setSelectedSegment] = useState<
    ApiModelsResponse['segment'] | undefined
  >(undefined)

  const changeFilter = useCallback(
    (segment: ApiModelsResponse['segment'] | undefined) => {
      setSelectedSegment(segment)
      if (segment === undefined) setFilter(models)
      else setFilter(...[models.filter(m => m.segment === segment)])
    },
    [models]
  )

  return {
    SEGMENTS,
    filtered,
    selectedSegment,
    changeFilter
  }
}
