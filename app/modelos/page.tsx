import { Models } from '@/components/Models/Models'
import { ApiModelsResponse } from '@/lib/types/api.types'

export default async function Modelos() {
  const modelsData: ApiModelsResponse[] = await fetch(
    'https://challenge.egodesign.dev/api/models/'
  ).then(res => res.json())

  return (
    <main className="mx-auto flex min-h-screen max-w-7xl flex-col justify-between overflow-hidden sm:p-24">
      <h1 className="my-6 text-left text-5xl font-bold">
        Descubrí todos los modelos
      </h1>
      <Models models={modelsData} />
    </main>
  )
}
