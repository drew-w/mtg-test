export interface CardType {
  name: string
  manaCost: string
  cmc: number
  colors: 'B' | 'G' | 'U' | 'W'[]
  colorIdentity: 'B' | 'G' | 'U' | 'W'[]
  type: string
  supertypes: string[]
  types: string[]
  subtypes: string[]
  rarity: string
  set: string
  setName: string
  text: string
  artist: string
  number: string
  power: string
  toughness: string
  layout: string
  multiverseid: string
  imageUrl: string
  variations: string[]
  rulings: {
    date: string
    text: string
  }[]
  foreignNames: {
    name: string
    text: string
    type: string
    flavor: string
    imageUrl: string
    language: string
    multiverseid: number
  }[]

  printings: string[]
  originalText: string
  originalType: string
  legalities: {
    format: string
    legality: string
  }[]
  id: string
}
