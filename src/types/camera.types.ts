export interface ICamera {
  id: string
  name: string
  category?: string
  description?: string
  resolution?: string
  price: number
  img: string
  isInCart: boolean
  delay?: number
}