export type ApiModelsResponse = {
  id: number
  name: string
  segment: string
  year: number
  price: number
  thumbnail: string
  photo: string
}

export type ApiModelDetailsResponse = {
  id: number
  name: string
  segment: string
  year: number
  price: number
  title: string
  description: string
  thumbnail: string
  photo: string
  model_features: [
    {
      name: string
      description: string
      image: string
    }
  ]
  model_highlights: [
    {
      title: string
      content: string
      image: string
    }
  ]
}
