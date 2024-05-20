export interface ICamera {
  id: string
  name: string
  category?: string
  description?: string
  resolution?: string
  price: number
  img: string
  quantityInCart: number
  delay?: number
}