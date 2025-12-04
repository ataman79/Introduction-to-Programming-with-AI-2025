/**
 * Invoice Repository Data Types
 * Defines all types and interfaces for managing invoices
 */

/**
 * Issuer company information
 * All properties are mandatory
 */
export interface IssuerCompany {
  name: string;
  id: string;
  taxId: string;
  address: string;
  manager: string;
  iban: string;
}

/**
 * Recipient company information
 * Only name is mandatory, other properties are optional
 */
export interface RecipientCompany {
  name: string;
  id?: string;
  taxId?: string;
  address?: string;
  manager?: string;
}

/**
 * Recipient individual person information
 * name is mandatory, national ID is optional
 */
export interface RecipientIndividual {
  name: string;
  nationalIdNumber?: string;
}

/**
 * Recipient can be either a company or an individual
 */
export type Recipient = RecipientCompany | RecipientIndividual;

/**
 * Check if recipient is a company
 */
export function isRecipientCompany(recipient: Recipient): recipient is RecipientCompany {
  return 'id' in recipient || 'taxId' in recipient || 'address' in recipient || 'manager' in recipient;
}

/**
 * Check if recipient is an individual
 */
export function isRecipientIndividual(recipient: Recipient): recipient is RecipientIndividual {
  return !isRecipientCompany(recipient);
}

/**
 * Product unit of measurement
 */
export type ProductUnit = 'pcs' | 'kg' | 'liters' | 'meters';

/**
 * Invoice line item
 */
export interface InvoiceItem {
  product: string;
  quantity: number;
  unit: ProductUnit;
  price: number; // Price per unit
  vatRate: number; // VAT rate as decimal (e.g., 0.20 for 20%)
  value: number; // Total value without VAT (quantity * price)
}

/**
 * Invoice settings and metadata
 */
export interface InvoiceSettings {
  defaultVatRate: number; // VAT rate as decimal (e.g., 0.20 for 20%)
  issuer: IssuerCompany;
}

/**
 * Complete invoice document
 */
export interface Invoice {
  id: string;
  date: Date;
  issuer: IssuerCompany;
  recipient: Recipient;
  items: InvoiceItem[];
  subtotalAmount: number; // Total without VAT
  vatAmount: number; // Total VAT
  totalAmount: number; // Total with VAT
}
