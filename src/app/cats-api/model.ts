export const CATS_API_BASE_URL = 'https://cat-fact.herokuapp.com'
export const CATS_API_ENDPOINT_FACTS_RANDOM = '/facts/random'
export const CATS_API_ENDPOINT_FACTS = '/facts' //max 5
export type CatFactStatus={
  sentCount: number
}
export const CATS_API_ENDPOINT_FACTS_BY_ID = '/facts/{}'
export type CatFact= {
  _id: string
  used: boolean
  updatedAt: string
  createdAt: string
  text: string
  deleted: boolean
  type:string
  status: CatFactStatus
}
export type CatFactUser={
  name: CatFactUserName
  _id: string
  photo: string
}
export type CatFactUserName={
  first: string
  last: string
}
export type CatFactDetails= {
  _id: string

  updatedAt: string
  createdAt: string
  text: string
  deleted: boolean
  type:string
  status: CatFactStatus
  user: CatFactUser
}
