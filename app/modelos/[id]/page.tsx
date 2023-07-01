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

  return (
    <main className="mx-auto my-12 flex min-h-screen flex-col justify-between gap-4 overflow-hidden sm:gap-12">
      <section className="grid w-full grid-cols-1 sm:mt-6 sm:grid-cols-2 sm:gap-2 lg:px-12">
        <img
          src={modelData.photo}
          alt="automóvil de costado"
          className="m-auto w-4/5 sm:w-11/12 md:w-full"
        />
        <div className="flex flex-col items-start justify-center gap-1 pl-12 lg:gap-4">
          <h1 className="my-0 py-0 text-left text-xl font-semibold">
            {modelData.name}
          </h1>
          <h2 className="my-0 text-left text-4xl font-semibold lg:text-5xl">
            {modelData.title}
          </h2>
          <div className="my-6 leading-7">{parse(modelData.description)}</div>
        </div>
      </section>
      <section>
        <Carousel
          items={modelData.model_features.map(feat => (
            <FeatureCard feature={feat} key={feat.name} />
          ))}
        />
      </section>
      <section className="lg:px-16 xl:px-24">
        {modelData.model_highlights.map((highlight, index) => {
          const isOnLeft = index % 2 > 0
          return (
            <div
              key={highlight.title + index}
              className={`my-8 flex flex-col items-center justify-between px-2 sm:max-w-[95%] sm:flex-row sm:gap-6 ${
                isOnLeft ? 'float-left' : 'float-right'
              }`}
            >
              <img
                src={highlight.image}
                alt={'ilustración de feature'}
                className={`w-full rounded-md sm:w-auto sm:max-w-[50%] ${
                  !isOnLeft ? 'sm:hidden' : ''
                }`}
              />
              <div className="lg:px-12 xl:px-16">
                <h5 className="my-6 text-xl font-semibold">
                  {highlight.title}
                </h5>
                <div className="leading-7">{parse(highlight.content)}</div>
              </div>
              <img
                src={highlight.image}
                alt={'ilustración de feature'}
                className={`rounded-md sm:max-w-[50%] ${
                  !isOnLeft ? 'hidden sm:block' : 'hidden'
                }`}
              />
            </div>
          )
        })}
      </section>
    </main>
  )
}
