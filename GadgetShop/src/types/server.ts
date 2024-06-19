

export interface Product {
  id: number
  title: string
  price: number
  description: string
  category: string
  image: string
  rating: ProductrRating
}

export interface ProductrRating {
  rate: number
  count: number
}
