/**
 * Tests for InvoiceRepo class
 */

import InvoiceRepo from '../invoice-repo';
import { Invoice, IssuerCompany, RecipientCompany, RecipientIndividual } from '../invoice-types';

describe('InvoiceRepo', () => {
  let repo: InvoiceRepo;
  let issuer: IssuerCompany;

  beforeEach(() => {
    issuer = {
      name: 'Test Company',
      id: '123456',
      taxId: 'BG123456',
      address: '123 Test St',
      manager: 'Test Manager',
      iban: 'BG123456789',
    };

    repo = new InvoiceRepo({
      defaultVatRate: 0.2,
      issuer,
    });
  });

  describe('Settings Management', () => {
    it('should initialize with correct settings', () => {
      const settings = repo.getSettings();
      expect(settings.defaultVatRate).toBe(0.2);
      expect(settings.issuer.name).toBe('Test Company');
    });

    it('should update VAT rate', () => {
      repo.updateSettings({ defaultVatRate: 0.19 });
      expect(repo.getSettings().defaultVatRate).toBe(0.19);
    });

    it('should update issuer', () => {
      const newIssuer: IssuerCompany = {
        name: 'New Company',
        id: '654321',
        taxId: 'BG654321',
        address: '456 New Ave',
        manager: 'New Manager',
        iban: 'BG987654321',
      };

      repo.updateSettings({ issuer: newIssuer });
      expect(repo.getSettings().issuer.name).toBe('New Company');
    });

    it('should partially update settings', () => {
      const oldIssuer = repo.getSettings().issuer;
      repo.updateSettings({ defaultVatRate: 0.17 });

      const settings = repo.getSettings();
      expect(settings.defaultVatRate).toBe(0.17);
      expect(settings.issuer).toBe(oldIssuer);
    });
  });

  describe('Recipients Management', () => {
    let companyRecipient: RecipientCompany;
    let individualRecipient: RecipientIndividual;

    beforeEach(() => {
      companyRecipient = {
        name: 'Customer Corp',
        id: 'CUST-001',
        taxId: 'BG987654',
        address: '789 Customer St',
        manager: 'Customer Manager',
      };

      individualRecipient = {
        name: 'John Doe',
        nationalIdNumber: 'ID-123456',
      };
    });

    describe('Add Recipients', () => {
      it('should add a company recipient', () => {
        repo.addRecipient('cust-001', companyRecipient);
        expect(repo.getRecipientCount()).toBe(1);
      });

      it('should add an individual recipient', () => {
        repo.addRecipient('indv-001', individualRecipient);
        expect(repo.getRecipientCount()).toBe(1);
      });

      it('should add multiple recipients', () => {
        repo.addRecipient('cust-001', companyRecipient);
        repo.addRecipient('indv-001', individualRecipient);
        expect(repo.getRecipientCount()).toBe(2);
      });

      it('should throw error when adding duplicate recipient', () => {
        repo.addRecipient('cust-001', companyRecipient);
        expect(() => {
          repo.addRecipient('cust-001', companyRecipient);
        }).toThrow(`Recipient with ID 'cust-001' already exists`);
      });
    });

    describe('Find Recipients', () => {
      beforeEach(() => {
        repo.addRecipient('cust-001', companyRecipient);
        repo.addRecipient('indv-001', individualRecipient);
      });

      it('should find recipient by ID', () => {
        const found = repo.findRecipientById('cust-001');
        expect(found).toEqual(companyRecipient);
      });

      it('should return undefined for non-existent ID', () => {
        const found = repo.findRecipientById('non-existent');
        expect(found).toBeUndefined();
      });

      it('should find recipient by name', () => {
        const found = repo.findRecipientByName('Customer Corp');
        expect(found).toEqual(companyRecipient);
      });

      it('should find individual by name', () => {
        const found = repo.findRecipientByName('John Doe');
        expect(found).toEqual(individualRecipient);
      });

      it('should return undefined for non-existent name', () => {
        const found = repo.findRecipientByName('Non Existent');
        expect(found).toBeUndefined();
      });
    });

    describe('Get All Recipients', () => {
      it('should return empty map for new repo', () => {
        const recipients = repo.getAllRecipients();
        expect(recipients.size).toBe(0);
      });

      it('should return all recipients', () => {
        repo.addRecipient('cust-001', companyRecipient);
        repo.addRecipient('indv-001', individualRecipient);
        const recipients = repo.getAllRecipients();
        expect(recipients.size).toBe(2);
        expect(recipients.has('cust-001')).toBe(true);
        expect(recipients.has('indv-001')).toBe(true);
      });
    });

    describe('Delete Recipients', () => {
      beforeEach(() => {
        repo.addRecipient('cust-001', companyRecipient);
        repo.addRecipient('indv-001', individualRecipient);
      });

      it('should delete recipient by ID', () => {
        const result = repo.deleteRecipient('cust-001');
        expect(result).toBe(true);
        expect(repo.getRecipientCount()).toBe(1);
      });

      it('should return false when deleting non-existent recipient', () => {
        const result = repo.deleteRecipient('non-existent');
        expect(result).toBe(false);
      });

      it('should remove all recipients', () => {
        repo.deleteRecipient('cust-001');
        repo.deleteRecipient('indv-001');
        expect(repo.getRecipientCount()).toBe(0);
      });
    });
  });

  describe('Invoices Management', () => {
    let invoice: Invoice;
    let recipient: RecipientCompany;

    beforeEach(() => {
      recipient = {
        name: 'Customer Corp',
        id: 'CUST-001',
        taxId: 'BG987654',
      };

      invoice = {
        id: 'INV-001',
        date: new Date('2025-01-15'),
        issuer,
        recipient,
        items: [
          {
            product: 'Service A',
            quantity: 10,
            unit: 'pcs',
            price: 100,
            vatRate: 0.2,
            value: 1000,
          },
        ],
        subtotalAmount: 1000,
        vatAmount: 200,
        totalAmount: 1200,
      };
    });

    describe('Add Invoices', () => {
      it('should add an invoice', () => {
        repo.addInvoice(invoice);
        expect(repo.getInvoiceCount()).toBe(1);
      });

      it('should add multiple invoices', () => {
        repo.addInvoice(invoice);
        const invoice2 = { ...invoice, id: 'INV-002' };
        repo.addInvoice(invoice2);
        expect(repo.getInvoiceCount()).toBe(2);
      });

      it('should throw error when adding duplicate invoice', () => {
        repo.addInvoice(invoice);
        expect(() => {
          repo.addInvoice(invoice);
        }).toThrow(`Invoice with ID 'INV-001' already exists`);
      });
    });

    describe('Find Invoices', () => {
      beforeEach(() => {
        repo.addInvoice(invoice);
      });

      it('should find invoice by ID', () => {
        const found = repo.findInvoiceById('INV-001');
        expect(found).toEqual(invoice);
      });

      it('should return undefined for non-existent ID', () => {
        const found = repo.findInvoiceById('non-existent');
        expect(found).toBeUndefined();
      });

      it('should find invoices by recipient ID', () => {
        const found = repo.findInvoicesByRecipient('CUST-001');
        expect(found).toHaveLength(1);
        expect(found[0]).toEqual(invoice);
      });

      it('should find invoices by recipient name', () => {
        const found = repo.findInvoicesByRecipient('Customer Corp');
        expect(found).toHaveLength(1);
      });

      it('should return empty array for non-existent recipient', () => {
        const found = repo.findInvoicesByRecipient('non-existent');
        expect(found).toHaveLength(0);
      });
    });

    describe('Get Invoices by Date Range', () => {
      beforeEach(() => {
        repo.addInvoice(invoice);
        const invoice2 = {
          ...invoice,
          id: 'INV-002',
          date: new Date('2025-02-15'),
        };
        repo.addInvoice(invoice2);
      });

      it('should return invoices within date range', () => {
        const start = new Date('2025-01-01');
        const end = new Date('2025-01-31');
        const found = repo.getInvoicesByDateRange(start, end);
        expect(found).toHaveLength(1);
        expect(found[0].id).toBe('INV-001');
      });

      it('should return multiple invoices in range', () => {
        const start = new Date('2025-01-01');
        const end = new Date('2025-03-01');
        const found = repo.getInvoicesByDateRange(start, end);
        expect(found).toHaveLength(2);
      });

      it('should return empty array for empty range', () => {
        const start = new Date('2025-05-01');
        const end = new Date('2025-05-31');
        const found = repo.getInvoicesByDateRange(start, end);
        expect(found).toHaveLength(0);
      });

      it('should include boundary dates', () => {
        const start = new Date('2025-01-15');
        const end = new Date('2025-02-15');
        const found = repo.getInvoicesByDateRange(start, end);
        expect(found).toHaveLength(2);
      });
    });

    describe('Get All Invoices', () => {
      it('should return empty map for new repo', () => {
        const invoices = repo.getAllInvoices();
        expect(invoices.size).toBe(0);
      });

      it('should return all invoices', () => {
        repo.addInvoice(invoice);
        const invoice2 = { ...invoice, id: 'INV-002' };
        repo.addInvoice(invoice2);
        const invoices = repo.getAllInvoices();
        expect(invoices.size).toBe(2);
      });
    });

    describe('Delete Invoices', () => {
      beforeEach(() => {
        repo.addInvoice(invoice);
      });

      it('should delete invoice by ID', () => {
        const result = repo.deleteInvoice('INV-001');
        expect(result).toBe(true);
        expect(repo.getInvoiceCount()).toBe(0);
      });

      it('should return false when deleting non-existent invoice', () => {
        const result = repo.deleteInvoice('non-existent');
        expect(result).toBe(false);
      });
    });
  });

  describe('Calculations', () => {
    let invoice1: Invoice;
    let invoice2: Invoice;
    let recipient: RecipientCompany;

    beforeEach(() => {
      recipient = {
        name: 'Customer',
        id: 'CUST-001',
      };

      invoice1 = {
        id: 'INV-001',
        date: new Date('2025-01-15'),
        issuer,
        recipient,
        items: [
          {
            product: 'Service',
            quantity: 10,
            unit: 'pcs',
            price: 100,
            vatRate: 0.2,
            value: 1000,
          },
        ],
        subtotalAmount: 1000,
        vatAmount: 200,
        totalAmount: 1200,
      };

      invoice2 = {
        id: 'INV-002',
        date: new Date('2025-02-15'),
        issuer,
        recipient,
        items: [
          {
            product: 'Product',
            quantity: 5,
            unit: 'kg',
            price: 50,
            vatRate: 0.2,
            value: 250,
          },
        ],
        subtotalAmount: 250,
        vatAmount: 50,
        totalAmount: 300,
      };
    });

    it('should calculate total amount for single invoice', () => {
      repo.addInvoice(invoice1);
      expect(repo.calculateTotalAmount()).toBe(1200);
    });

    it('should calculate total amount for multiple invoices', () => {
      repo.addInvoice(invoice1);
      repo.addInvoice(invoice2);
      expect(repo.calculateTotalAmount()).toBe(1500);
    });

    it('should return 0 for empty repo', () => {
      expect(repo.calculateTotalAmount()).toBe(0);
    });

    it('should update total after deletion', () => {
      repo.addInvoice(invoice1);
      repo.addInvoice(invoice2);
      repo.deleteInvoice('INV-001');
      expect(repo.calculateTotalAmount()).toBe(300);
    });
  });

  describe('Counts', () => {
    it('should return 0 for new repo', () => {
      expect(repo.getInvoiceCount()).toBe(0);
      expect(repo.getRecipientCount()).toBe(0);
    });

    it('should count invoices correctly', () => {
      const invoice = {
        id: 'INV-001',
        date: new Date(),
        issuer,
        recipient: { name: 'Customer' },
        items: [],
        subtotalAmount: 0,
        vatAmount: 0,
        totalAmount: 0,
      };
      repo.addInvoice(invoice);
      expect(repo.getInvoiceCount()).toBe(1);

      const invoice2 = { ...invoice, id: 'INV-002' };
      repo.addInvoice(invoice2);
      expect(repo.getInvoiceCount()).toBe(2);
    });

    it('should count recipients correctly', () => {
      repo.addRecipient('cust-001', { name: 'Customer 1' });
      expect(repo.getRecipientCount()).toBe(1);

      repo.addRecipient('cust-002', { name: 'Customer 2' });
      expect(repo.getRecipientCount()).toBe(2);
    });
  });
});
