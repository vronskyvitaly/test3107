export interface JokeType {
  id: string
  value: string
  updated_at: string
  icon_url: string
}

export interface JokeResponseType {
  total: number | null | undefined
  result: JokeType[]
}
