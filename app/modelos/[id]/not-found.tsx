'use client'

export default function NotFound() {
  return (
    <main className="flex min-h-screen max-w-full flex-col items-center justify-center gap-2 overflow-hidden p-24 text-center">
      <h1 className="text-3xl font-bold text-red-500">Lo sentimos!</h1>
      <h3 className="text-xl font-semibold ">
        No podemos encontrar el modelo que buscas
      </h3>
      <a
        href="/modelos"
        className="mt-4 underline hover:text-red-500 active:text-red-400"
      >
        Volver a los modelos
      </a>
    </main>
  )
}
