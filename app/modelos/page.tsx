import { Metadata } from 'next'

import { Models } from '@/components/Models/Models'
import { ApiModelsResponse } from '@/lib/types/api.types'

export const metadata: Metadata = {
  title: 'Modelos'
}

export default async function Modelos() {
  const modelsData: ApiModelsResponse[] = await fetch(
    'https://challenge.egodesign.dev/api/models/'
  ).then(res => res.json())

  return (
    <main className="mx-auto my-20 flex min-h-screen max-w-7xl flex-col justify-start overflow-hidden p-2 sm:my-12 sm:p-6 lg:p-24">
      <h1 className="text-left text-4xl font-bold sm:text-5xl">
        Descubrí todos los modelos
      </h1>
      <Models models={modelsData} />
    </main>
  )
}
