export interface Product {
  id: string
  name: string
  description: string
  price: number
  currency: string
  category: string
  sku: string
  tax: number
  isActive: boolean
  createdAt: Date
  updatedAt: Date
}
