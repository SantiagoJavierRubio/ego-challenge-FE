export default function NotFound() {
  return (
    <main className="flex min-h-screen max-w-full flex-col items-center justify-center gap-2 overflow-hidden p-24 text-center">
      <h1 className="text-3xl font-bold text-red-500">Página no disponible</h1>
      <h3 className="text-xl font-semibold ">
        Diseño no especificado en el desafío 😔
      </h3>
      <a
        href="/"
        className="mt-4 underline hover:text-red-500 active:text-red-400"
      >
        Volver al inicio
      </a>
    </main>
  )
}
