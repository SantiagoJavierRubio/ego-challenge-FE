import axios from 'axios'

import { Models } from "@/components/Models"

export default async function Home() {
  const { data: modelsData } = await axios.get('https://challenge.egodesign.dev/api/models/')

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Models models={modelsData}/>
    </main>
  )
}
