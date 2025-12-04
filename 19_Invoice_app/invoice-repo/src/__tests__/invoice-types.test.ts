/**
 * Tests for invoice-types module
 */

import {
  isRecipientCompany,
  isRecipientIndividual,
  Recipient,
  RecipientCompany,
  RecipientIndividual,
} from '../invoice-types';

describe('Invoice Types', () => {
  describe('Type Guards', () => {
    describe('isRecipientCompany', () => {
      it('should return true for a company recipient', () => {
        const company: RecipientCompany = {
          name: 'Test Company',
          id: '123456',
          taxId: 'BG123456',
        };
        expect(isRecipientCompany(company)).toBe(true);
      });

      it('should return true for a company with all properties', () => {
        const company: RecipientCompany = {
          name: 'Full Company',
          id: 'COMP-001',
          taxId: 'BG123456789',
          address: '123 Main St',
          manager: 'John Doe',
        };
        expect(isRecipientCompany(company)).toBe(true);
      });

      it('should return true for a company with id property', () => {
        const company: RecipientCompany = {
          name: 'Company with ID',
          id: 'COMP-123',
        };
        expect(isRecipientCompany(company)).toBe(true);
      });

      it('should return true for a company with taxId property', () => {
        const company: RecipientCompany = {
          name: 'Company with Tax ID',
          taxId: 'BG987654',
        };
        expect(isRecipientCompany(company)).toBe(true);
      });

      it('should return false for an individual recipient', () => {
        const individual: RecipientIndividual = {
          name: 'John Smith',
          nationalIdNumber: 'ID-123',
        };
        expect(isRecipientCompany(individual)).toBe(false);
      });

      it('should return false for an individual with only name', () => {
        const individual: RecipientIndividual = {
          name: 'Jane Doe',
        };
        expect(isRecipientCompany(individual)).toBe(false);
      });
    });

    describe('isRecipientIndividual', () => {
      it('should return true for an individual recipient', () => {
        const individual: RecipientIndividual = {
          name: 'John Smith',
          nationalIdNumber: 'ID-123456',
        };
        expect(isRecipientIndividual(individual)).toBe(true);
      });

      it('should return true for an individual with only name', () => {
        const individual: RecipientIndividual = {
          name: 'Jane Doe',
        };
        expect(isRecipientIndividual(individual)).toBe(true);
      });

      it('should return false for a company recipient', () => {
        const company: RecipientCompany = {
          name: 'Test Company',
          id: '123456',
        };
        expect(isRecipientIndividual(company)).toBe(false);
      });
    });
  });

  describe('Type Interfaces', () => {
    it('should allow creating a valid IssuerCompany', () => {
      const issuer = {
        name: 'My Company',
        id: '123456',
        taxId: 'BG123456',
        address: '123 Main St',
        manager: 'John Manager',
        iban: 'BG123456789',
      };
      expect(issuer.name).toBe('My Company');
      expect(issuer.taxId).toBe('BG123456');
    });

    it('should allow creating a RecipientCompany with optional fields', () => {
      const recipient: RecipientCompany = {
        name: 'Customer Ltd',
      };
      expect(recipient.name).toBe('Customer Ltd');
      expect(recipient.id).toBeUndefined();
      expect(recipient.taxId).toBeUndefined();
    });

    it('should allow creating a RecipientIndividual with optional ID', () => {
      const individual: RecipientIndividual = {
        name: 'John Smith',
      };
      expect(individual.name).toBe('John Smith');
      expect(individual.nationalIdNumber).toBeUndefined();
    });

    it('should allow creating an InvoiceItem', () => {
      const item = {
        product: 'Software License',
        quantity: 10,
        unit: 'pcs' as const,
        price: 100,
        vatRate: 0.2,
        value: 1000,
      };
      expect(item.product).toBe('Software License');
      expect(item.quantity).toBe(10);
      expect(item.unit).toBe('pcs');
      expect(item.vatRate).toBe(0.2);
    });

    it('should allow creating an Invoice', () => {
      const invoice = {
        id: 'INV-001',
        date: new Date('2025-01-15'),
        issuer: {
          name: 'Company',
          id: '123',
          taxId: 'BG123',
          address: 'Addr',
          manager: 'John',
          iban: 'IBAN123',
        },
        recipient: {
          name: 'Customer',
        },
        items: [],
        subtotalAmount: 1000,
        vatAmount: 200,
        totalAmount: 1200,
      };
      expect(invoice.id).toBe('INV-001');
      expect(invoice.items.length).toBe(0);
      expect(invoice.totalAmount).toBe(1200);
    });

    it('should support all ProductUnit types', () => {
      const units: Array<'pcs' | 'kg' | 'liters' | 'meters'> = ['pcs', 'kg', 'liters', 'meters'];
      expect(units).toHaveLength(4);
      expect(units).toContain('pcs');
      expect(units).toContain('kg');
      expect(units).toContain('liters');
      expect(units).toContain('meters');
    });
  });
});
