import { notFound } from 'next/navigation'
import { ApiModelDetailsResponse } from '@/lib/types/api.types'
import parse from 'html-react-parser'
import { Carousel } from '@/components/Common/Carousel'
import { FeatureCard } from '@/components/Models/FeatureCard'

interface PageParams {
  params: { id: number }
}

export default async function Ficha({ params }: PageParams) {
  const modelData: ApiModelDetailsResponse = await fetch(
    `https://challenge.egodesign.dev/api/models/${params.id}`
  ).then(res => res.json())

  if (!modelData.id) notFound()

  console.log(modelData.model_highlights.length)

  return (
    <main className="mx-auto flex min-h-screen flex-col justify-between overflow-hidden md:p-24">
      <img src={modelData.photo} />
      <h1 className="my-6 text-left text-5xl font-bold">
        Ficha tecnica de {modelData.name}
      </h1>
      <h2>{modelData.title}</h2>
      <div>{parse(modelData.description)}</div>

      <Carousel
        items={modelData.model_features.map(feat => (
          <FeatureCard feature={feat} key={feat.name} />
        ))}
      />

      {modelData.model_highlights.map((highlight, index) => (
        <div key={highlight.title + index}>
          <h5>{highlight.title}</h5>
          <div>{parse(highlight.content)}</div>
          <img src={highlight.image} />
        </div>
      ))}
    </main>
  )
}
