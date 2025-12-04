/**
 * Invoice Repository
 * Manages invoices, recipients, and settings
 */

import {
  Invoice,
  InvoiceSettings,
  IssuerCompany,
  Recipient,
  RecipientCompany,
} from './invoice-types';

/**
 * InvoiceRepo class - manages all invoices and recipients
 */
export default class InvoiceRepo {
  private settings: InvoiceSettings;
  private recipients: Map<string, Recipient> = new Map();
  private invoices: Map<string, Invoice> = new Map();

  /**
   * Initialize InvoiceRepo with settings
   */
  constructor(settings: InvoiceSettings) {
    this.settings = settings;
  }

  /**
   * Get current settings
   */
  getSettings(): InvoiceSettings {
    return this.settings;
  }

  /**
   * Update settings
   */
  updateSettings(settings: Partial<InvoiceSettings>): void {
    this.settings = { ...this.settings, ...settings };
  }

  // ===== RECIPIENTS MANAGEMENT =====

  /**
   * Add a new recipient
   */
  addRecipient(id: string, recipient: Recipient): void {
    if (this.recipients.has(id)) {
      throw new Error(`Recipient with ID '${id}' already exists`);
    }
    this.recipients.set(id, recipient);
  }

  /**
   * Find recipient by ID
   */
  findRecipientById(id: string): Recipient | undefined {
    return this.recipients.get(id);
  }

  /**
   * Find recipient by name
   */
  findRecipientByName(name: string): Recipient | undefined {
    for (const recipient of this.recipients.values()) {
      if (recipient.name === name) {
        return recipient;
      }
    }
    return undefined;
  }

  /**
   * Get all recipients
   */
  getAllRecipients(): Map<string, Recipient> {
    return new Map(this.recipients);
  }

  /**
   * Delete recipient by ID
   */
  deleteRecipient(id: string): boolean {
    return this.recipients.delete(id);
  }

  // ===== INVOICES MANAGEMENT =====

  /**
   * Add a new invoice
   */
  addInvoice(invoice: Invoice): void {
    if (this.invoices.has(invoice.id)) {
      throw new Error(`Invoice with ID '${invoice.id}' already exists`);
    }
    this.invoices.set(invoice.id, invoice);
  }

  /**
   * Find invoice by ID
   */
  findInvoiceById(id: string): Invoice | undefined {
    return this.invoices.get(id);
  }

  /**
   * Find invoices by recipient ID or name
   */
  findInvoicesByRecipient(recipientIdOrName: string): Invoice[] {
    const result: Invoice[] = [];
    
    for (const invoice of this.invoices.values()) {
      const recipient = invoice.recipient as RecipientCompany;
      if (
        (recipient.id === recipientIdOrName) ||
        (recipient.name === recipientIdOrName)
      ) {
        result.push(invoice);
      }
    }
    
    return result;
  }

  /**
   * Get all invoices
   */
  getAllInvoices(): Map<string, Invoice> {
    return new Map(this.invoices);
  }

  /**
   * Get invoices by date range
   */
  getInvoicesByDateRange(startDate: Date, endDate: Date): Invoice[] {
    const result: Invoice[] = [];
    
    for (const invoice of this.invoices.values()) {
      if (invoice.date >= startDate && invoice.date <= endDate) {
        result.push(invoice);
      }
    }
    
    return result;
  }

  /**
   * Delete invoice by ID
   */
  deleteInvoice(id: string): boolean {
    return this.invoices.delete(id);
  }

  /**
   * Calculate total amount for all invoices
   */
  calculateTotalAmount(): number {
    let total = 0;
    for (const invoice of this.invoices.values()) {
      total += invoice.totalAmount;
    }
    return total;
  }

  /**
   * Get number of invoices
   */
  getInvoiceCount(): number {
    return this.invoices.size;
  }

  /**
   * Get number of recipients
   */
  getRecipientCount(): number {
    return this.recipients.size;
  }
}
