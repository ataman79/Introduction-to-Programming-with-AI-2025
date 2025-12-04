/**
 * Sample Data Generator for Invoice Repository
 * Generates test invoices and recipients
 */

import InvoiceRepo from './invoice-repo';
import {
  IssuerCompany,
  Invoice,
  InvoiceItem,
  Recipient,
} from './invoice-types';

/**
 * Generate sample company tax ID (country code + company id)
 */
function generateTaxId(countryCode: string, companyId: string): string {
  return `${countryCode}${companyId}`;
}

/**
 * Generate sample invoices and populate the repo
 */
export default function generateSampleData(): InvoiceRepo {
  // Define issuer company
  const issuerCompany: IssuerCompany = {
    name: 'TechSoft Ltd.',
    id: '200776618',
    taxId: generateTaxId('BG', '200776618'),
    address: '123 Tech Street, Sofia, Bulgaria',
    manager: 'Ivan Petrov',
    iban: 'BG80BNBG96611020345678',
  };

  // Initialize repo with settings
  const repo = new InvoiceRepo({
    defaultVatRate: 0.2, // 20% VAT
    issuer: issuerCompany,
  });

  // Add sample recipients
  const recipients: Array<{ id: string; recipient: Recipient }> = [
    {
      id: 'cust-001',
      recipient: {
        name: 'ABC Corporation',
        id: '100123456',
        taxId: generateTaxId('BG', '100123456'),
        address: '456 Business Ave, Sofia, Bulgaria',
        manager: 'Petar Dimitrov',
      },
    },
    {
      id: 'cust-002',
      recipient: {
        name: 'XYZ Industries',
        id: '200654321',
        taxId: generateTaxId('BG', '200654321'),
        address: '789 Industrial Park, Plovdiv, Bulgaria',
        manager: 'Maria Ivanova',
      },
    },
    {
      id: 'cust-003',
      recipient: {
        name: 'GlobalTrade LLC',
        id: '300789012',
        taxId: generateTaxId('BG', '300789012'),
        address: '321 Export Road, Burgas, Bulgaria',
      },
    },
    {
      id: 'indv-001',
      recipient: {
        name: 'John Smith',
        nationalIdNumber: 'ID-123456789',
      },
    },
    {
      id: 'indv-002',
      recipient: {
        name: 'Jane Doe',
      },
    },
  ];

  recipients.forEach(({ id, recipient }) => {
    repo.addRecipient(id, recipient);
  });

  // Add sample invoices
  const invoices: Invoice[] = [
    {
      id: 'INV-2025-001',
      date: new Date('2025-01-15'),
      issuer: issuerCompany,
      recipient: recipients[0].recipient,
      items: [
        {
          product: 'Software Development Services',
          quantity: 40,
          unit: 'pcs',
          price: 50,
          vatRate: 0.2,
          value: 2000,
        },
        {
          product: 'Software Support',
          quantity: 10,
          unit: 'pcs',
          price: 30,
          vatRate: 0.2,
          value: 300,
        },
      ],
      subtotalAmount: 2300,
      vatAmount: 460,
      totalAmount: 2760,
    },
    {
      id: 'INV-2025-002',
      date: new Date('2025-01-20'),
      issuer: issuerCompany,
      recipient: recipients[1].recipient,
      items: [
        {
          product: 'Web Development',
          quantity: 80,
          unit: 'pcs',
          price: 75,
          vatRate: 0.2,
          value: 6000,
        },
      ],
      subtotalAmount: 6000,
      vatAmount: 1200,
      totalAmount: 7200,
    },
    {
      id: 'INV-2025-003',
      date: new Date('2025-02-01'),
      issuer: issuerCompany,
      recipient: recipients[2].recipient,
      items: [
        {
          product: 'Cloud Infrastructure',
          quantity: 12,
          unit: 'pcs',
          price: 250,
          vatRate: 0.2,
          value: 3000,
        },
        {
          product: 'Database Services',
          quantity: 6,
          unit: 'pcs',
          price: 400,
          vatRate: 0.2,
          value: 2400,
        },
      ],
      subtotalAmount: 5400,
      vatAmount: 1080,
      totalAmount: 6480,
    },
    {
      id: 'INV-2025-004',
      date: new Date('2025-02-10'),
      issuer: issuerCompany,
      recipient: recipients[3].recipient,
      items: [
        {
          product: 'Consulting Services',
          quantity: 20,
          unit: 'pcs',
          price: 100,
          vatRate: 0.2,
          value: 2000,
        },
      ],
      subtotalAmount: 2000,
      vatAmount: 400,
      totalAmount: 2400,
    },
    {
      id: 'INV-2025-005',
      date: new Date('2025-02-15'),
      issuer: issuerCompany,
      recipient: recipients[4].recipient,
      items: [
        {
          product: 'Technical Support',
          quantity: 15,
          unit: 'pcs',
          price: 60,
          vatRate: 0.2,
          value: 900,
        },
        {
          product: 'Training Session',
          quantity: 8,
          unit: 'pcs',
          price: 80,
          vatRate: 0.2,
          value: 640,
        },
      ],
      subtotalAmount: 1540,
      vatAmount: 308,
      totalAmount: 1848,
    },
    {
      id: 'INV-2025-006',
      date: new Date('2025-02-20'),
      issuer: issuerCompany,
      recipient: recipients[0].recipient,
      items: [
        {
          product: 'Bug Fixes and Maintenance',
          quantity: 30,
          unit: 'pcs',
          price: 45,
          vatRate: 0.2,
          value: 1350,
        },
      ],
      subtotalAmount: 1350,
      vatAmount: 270,
      totalAmount: 1620,
    },
    {
      id: 'INV-2025-007',
      date: new Date('2025-03-01'),
      issuer: issuerCompany,
      recipient: recipients[1].recipient,
      items: [
        {
          product: 'Mobile App Development',
          quantity: 100,
          unit: 'pcs',
          price: 60,
          vatRate: 0.2,
          value: 6000,
        },
        {
          product: 'UI/UX Design',
          quantity: 20,
          unit: 'pcs',
          price: 80,
          vatRate: 0.2,
          value: 1600,
        },
      ],
      subtotalAmount: 7600,
      vatAmount: 1520,
      totalAmount: 9120,
    },
    {
      id: 'INV-2025-008',
      date: new Date('2025-03-05'),
      issuer: issuerCompany,
      recipient: recipients[2].recipient,
      items: [
        {
          product: 'System Administration',
          quantity: 40,
          unit: 'pcs',
          price: 55,
          vatRate: 0.2,
          value: 2200,
        },
      ],
      subtotalAmount: 2200,
      vatAmount: 440,
      totalAmount: 2640,
    },
  ];

  invoices.forEach((invoice) => {
    repo.addInvoice(invoice);
  });

  return repo;
}
