import { InvoiceItem } from './InvoiceItem'

export type InvoiceStatus = 'draft' | 'sent' | 'paid' | 'overdue' | 'cancelled'

export interface Invoice {
  id: string
  invoiceNumber: string
  clientId: string
  clientName: string
  companyId: string
  issueDate: Date
  dueDate: Date
  items: InvoiceItem[]
  subtotal: number
  totalDiscount: number
  totalTax: number
  total: number
  currency: string
  status: InvoiceStatus
  notes?: string
  terms?: string
  paymentMethod?: string
  createdAt: Date
  updatedAt: Date
}
