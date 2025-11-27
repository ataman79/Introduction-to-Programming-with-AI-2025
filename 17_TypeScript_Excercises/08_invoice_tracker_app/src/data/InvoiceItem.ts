export interface InvoiceItem {
  id: string
  productId: string
  productName: string
  quantity: number
  unitPrice: number
  discount: number
  tax: number
  lineTotal: number
}
