import { ApiModelDetailsResponse } from '@/lib/types/api.types'

interface PageParams {
  params: { id: number }
}

export default async function Ficha({ params }: PageParams) {
  const modelData: ApiModelDetailsResponse = await fetch(
    `https://challenge.egodesign.dev/api/models/${params.id}`
  ).then(res => res.json())

  return (
    <main className="mx-auto flex min-h-screen max-w-7xl flex-col justify-between overflow-hidden sm:p-24">
      <h1 className="my-6 text-left text-5xl font-bold">
        Ficha tecnica de {modelData.name}
      </h1>
    </main>
  )
}
