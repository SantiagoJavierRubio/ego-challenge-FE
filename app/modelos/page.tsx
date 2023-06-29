import axios from 'axios'

import { Models } from '@/components/Models'

export default async function Modelos() {
  const { data: modelsData } = await axios.get(
    'https://challenge.egodesign.dev/api/models/'
  )

  return (
    <main className="flex min-h-screen max-w-full flex-col items-center justify-between overflow-hidden p-24">
      <Models models={modelsData} />
    </main>
  )
}
