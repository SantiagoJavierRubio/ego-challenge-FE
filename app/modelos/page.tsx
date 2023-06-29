import axios from 'axios'

import { Models } from '@/components/Models/Models'

export default async function Modelos() {
  const { data: modelsData } = await axios.get(
    'https://challenge.egodesign.dev/api/models/'
  )

  return (
    <main className="mx-auto flex min-h-screen max-w-7xl flex-col justify-between overflow-hidden sm:p-24">
      <h1 className="my-6 text-left text-5xl font-bold">
        Descubrí todos los modelos
      </h1>
      <Models models={modelsData} />
    </main>
  )
}
