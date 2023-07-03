import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Home'
}

export default function Home() {
  return (
    <main className="mt-32 flex min-h-screen max-w-full flex-col items-center justify-start gap-4 overflow-hidden lg:p-24">
      <h1 className="text-3xl font-bold">Home</h1>
      <p className="p-8 text-center">
        Utilizar el menú para navegar hacia /modelos
      </p>
    </main>
  )
}
