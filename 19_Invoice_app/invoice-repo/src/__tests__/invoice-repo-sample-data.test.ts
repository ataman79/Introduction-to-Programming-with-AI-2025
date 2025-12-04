/**
 * Tests for sample data generator
 */

import generateSampleData from '../invoice-repo-sample-data';
import InvoiceRepo from '../invoice-repo';
import { isRecipientCompany, isRecipientIndividual } from '../invoice-types';

describe('generateSampleData', () => {
  let repo: InvoiceRepo;

  beforeEach(() => {
    repo = generateSampleData();
  });

  describe('Basic Structure', () => {
    it('should return an InvoiceRepo instance', () => {
      expect(repo).toBeInstanceOf(InvoiceRepo);
    });

    it('should have correct settings', () => {
      const settings = repo.getSettings();
      expect(settings.defaultVatRate).toBe(0.2);
      expect(settings.issuer.name).toBe('TechSoft Ltd.');
    });

    it('should have issuer with all required properties', () => {
      const issuer = repo.getSettings().issuer;
      expect(issuer.name).toBeDefined();
      expect(issuer.id).toBeDefined();
      expect(issuer.taxId).toBeDefined();
      expect(issuer.address).toBeDefined();
      expect(issuer.manager).toBeDefined();
      expect(issuer.iban).toBeDefined();
    });
  });

  describe('Recipients', () => {
    it('should have at least 5 recipients', () => {
      expect(repo.getRecipientCount()).toBeGreaterThanOrEqual(5);
    });

    it('should have exactly 5 recipients in sample data', () => {
      expect(repo.getRecipientCount()).toBe(5);
    });

    it('should contain company recipients', () => {
      const allRecipients = repo.getAllRecipients();
      let companyCount = 0;
      allRecipients.forEach((recipient) => {
        if (isRecipientCompany(recipient)) {
          companyCount++;
        }
      });
      expect(companyCount).toBeGreaterThan(0);
    });

    it('should contain individual recipients', () => {
      const allRecipients = repo.getAllRecipients();
      let individualCount = 0;
      allRecipients.forEach((recipient) => {
        if (isRecipientIndividual(recipient)) {
          individualCount++;
        }
      });
      expect(individualCount).toBeGreaterThan(0);
    });

    it('should have recipients with company tax IDs in correct format', () => {
      const allRecipients = repo.getAllRecipients();
      let foundFormattedTaxId = false;
      allRecipients.forEach((recipient) => {
        if (isRecipientCompany(recipient) && recipient.taxId) {
          // Check if taxId matches pattern like BG123456789
          if (/^[A-Z]{2}\d+$/.test(recipient.taxId)) {
            foundFormattedTaxId = true;
          }
        }
      });
      expect(foundFormattedTaxId).toBe(true);
    });
  });

  describe('Invoices', () => {
    it('should have at least 5 invoices', () => {
      expect(repo.getInvoiceCount()).toBeGreaterThanOrEqual(5);
    });

    it('should have exactly 8 invoices in sample data', () => {
      expect(repo.getInvoiceCount()).toBe(8);
    });

    it('should have invoices with valid IDs', () => {
      const allInvoices = repo.getAllInvoices();
      allInvoices.forEach((invoice) => {
        expect(invoice.id).toBeDefined();
        expect(invoice.id.length).toBeGreaterThan(0);
      });
    });

    it('should have invoices with valid dates', () => {
      const allInvoices = repo.getAllInvoices();
      allInvoices.forEach((invoice) => {
        expect(invoice.date).toBeInstanceOf(Date);
        expect(invoice.date.getTime()).toBeLessThanOrEqual(Date.now() + 86400000); // Within 1 day
      });
    });

    it('should have invoices with items', () => {
      const allInvoices = repo.getAllInvoices();
      allInvoices.forEach((invoice) => {
        expect(invoice.items.length).toBeGreaterThan(0);
      });
    });

    it('should have invoices with correct amount calculations', () => {
      const allInvoices = repo.getAllInvoices();
      allInvoices.forEach((invoice) => {
        // Verify that total = subtotal + VAT (with small tolerance for rounding)
        const expectedTotal = invoice.subtotalAmount + invoice.vatAmount;
        expect(invoice.totalAmount).toBeCloseTo(expectedTotal, 2);

        // Verify VAT calculation
        const sumItems = invoice.items.reduce((sum, item) => sum + item.value, 0);
        expect(invoice.subtotalAmount).toBeCloseTo(sumItems, 2);

        // Verify items have correct values
        invoice.items.forEach((item) => {
          const expectedValue = item.quantity * item.price;
          expect(item.value).toBeCloseTo(expectedValue, 2);
        });
      });
    });

    it('should have invoices with 20% VAT rate', () => {
      const allInvoices = repo.getAllInvoices();
      allInvoices.forEach((invoice) => {
        invoice.items.forEach((item) => {
          expect(item.vatRate).toBe(0.2);
        });
      });
    });

    it('should have invoices with valid amounts (no negatives)', () => {
      const allInvoices = repo.getAllInvoices();
      allInvoices.forEach((invoice) => {
        expect(invoice.subtotalAmount).toBeGreaterThan(0);
        expect(invoice.vatAmount).toBeGreaterThan(0);
        expect(invoice.totalAmount).toBeGreaterThan(0);
      });
    });
  });

  describe('Invoice Items', () => {
    it('should have items with valid units', () => {
      const validUnits = ['pcs', 'kg', 'liters', 'meters'];
      const allInvoices = repo.getAllInvoices();
      allInvoices.forEach((invoice) => {
        invoice.items.forEach((item) => {
          expect(validUnits).toContain(item.unit);
        });
      });
    });

    it('should have items with positive quantities and prices', () => {
      const allInvoices = repo.getAllInvoices();
      allInvoices.forEach((invoice) => {
        invoice.items.forEach((item) => {
          expect(item.quantity).toBeGreaterThan(0);
          expect(item.price).toBeGreaterThan(0);
          expect(item.value).toBeGreaterThan(0);
        });
      });
    });

    it('should have items with product descriptions', () => {
      const allInvoices = repo.getAllInvoices();
      allInvoices.forEach((invoice) => {
        invoice.items.forEach((item) => {
          expect(item.product).toBeDefined();
          expect(item.product.length).toBeGreaterThan(0);
        });
      });
    });
  });

  describe('Total Calculations', () => {
    it('should calculate total repository amount', () => {
      const total = repo.calculateTotalAmount();
      expect(total).toBeGreaterThan(0);
    });

    it('should have minimum total amount (at least 30000 for 8 invoices)', () => {
      const total = repo.calculateTotalAmount();
      expect(total).toBeGreaterThan(30000);
    });

    it('should have consistent totals', () => {
      const allInvoices = repo.getAllInvoices();
      let calculatedTotal = 0;
      allInvoices.forEach((invoice) => {
        calculatedTotal += invoice.totalAmount;
      });

      expect(repo.calculateTotalAmount()).toBeCloseTo(calculatedTotal, 2);
    });
  });

  describe('Data Relationships', () => {
    it('should have valid recipient relationships', () => {
      const allInvoices = repo.getAllInvoices();
      const allRecipients = repo.getAllRecipients();

      allInvoices.forEach((invoice) => {
        // Verify recipient has a name
        expect(invoice.recipient.name).toBeDefined();
        expect(invoice.recipient.name.length).toBeGreaterThan(0);
      });
    });

    it('should have issuer in all invoices matching repo issuer', () => {
      const repoIssuer = repo.getSettings().issuer;
      const allInvoices = repo.getAllInvoices();

      allInvoices.forEach((invoice) => {
        expect(invoice.issuer.id).toBe(repoIssuer.id);
        expect(invoice.issuer.name).toBe(repoIssuer.name);
      });
    });

    it('should have diverse invoice dates', () => {
      const allInvoices = repo.getAllInvoices();
      const dates = new Set<string>();

      allInvoices.forEach((invoice) => {
        dates.add(invoice.date.toDateString());
      });

      // Should have at least 5 different dates for 8 invoices
      expect(dates.size).toBeGreaterThanOrEqual(5);
    });
  });

  describe('Sample Data Consistency', () => {
    it('should generate same data on multiple calls', () => {
      const repo2 = generateSampleData();

      expect(repo.getInvoiceCount()).toBe(repo2.getInvoiceCount());
      expect(repo.getRecipientCount()).toBe(repo2.getRecipientCount());
      expect(repo.calculateTotalAmount()).toBe(repo2.calculateTotalAmount());
    });

    it('should have independent instances', () => {
      const repo2 = generateSampleData();

      repo.addInvoice({
        id: 'TEST-INV-001',
        date: new Date(),
        issuer: repo.getSettings().issuer,
        recipient: { name: 'Test' },
        items: [],
        subtotalAmount: 0,
        vatAmount: 0,
        totalAmount: 0,
      });

      // Second repo should not be affected
      expect(repo.getInvoiceCount()).toBe(repo2.getInvoiceCount() + 1);
    });
  });
});
