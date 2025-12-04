# Invoice Repository (invoice-repo)

A TypeScript library for managing invoices with comprehensive data types, business logic, and sample data generation.

## Features

- **Type-safe invoice management** using TypeScript interfaces
- **Flexible recipient types** - support for both companies and individuals
- **Invoice tracking** with items, VAT calculations, and totals
- **Recipients management** - add, find, and manage invoice recipients
- **Settings management** - configurable VAT rates and issuer company details
- **Sample data generation** - pre-built test data with 8 sample invoices

## Installation

```bash
npm install invoice-repo
```

## Package Structure

The package is organized into 3 modules:

### 1. `invoice-types.ts`
Defines all TypeScript interfaces and types:

- **`IssuerCompany`** - The company issuing invoices (all properties mandatory)
  - `name`: Company name
  - `id`: Company ID
  - `taxId`: Tax identification number
  - `address`: Company address
  - `manager`: Manager name
  - `iban`: Bank account IBAN

- **`RecipientCompany`** - Company receiving invoice (name mandatory)
  - `name`: Company name (required)
  - `id?`: Company ID
  - `taxId?`: Tax identification number
  - `address?`: Company address
  - `manager?`: Manager name

- **`RecipientIndividual`** - Individual receiving invoice
  - `name`: Person's name (required)
  - `nationalIdNumber?`: National ID number

- **`Recipient`** - Union type of `RecipientCompany | RecipientIndividual`

- **`ProductUnit`** - Enumeration: `'pcs' | 'kg' | 'liters' | 'meters'`

- **`InvoiceItem`** - Individual line item on invoice
  - `product`: Product/service description
  - `quantity`: Amount
  - `unit`: Unit of measurement
  - `price`: Unit price
  - `vatRate`: VAT rate (as decimal, e.g., 0.20 for 20%)
  - `value`: Total without VAT

- **`Invoice`** - Complete invoice document
  - `id`: Unique invoice identifier
  - `date`: Invoice date
  - `issuer`: Issuing company details
  - `recipient`: Recipient (company or individual)
  - `items`: List of invoice items
  - `subtotalAmount`: Total amount without VAT
  - `vatAmount`: Total VAT amount
  - `totalAmount`: Total amount including VAT

- **`InvoiceSettings`** - Configuration settings
  - `defaultVatRate`: Default VAT rate (decimal)
  - `issuer`: Issuer company details

### 2. `invoice-repo.ts`
Implements the `InvoiceRepo` class with the following functionality:

#### Initialization
```typescript
const repo = new InvoiceRepo({
  defaultVatRate: 0.20, // 20% VAT
  issuer: issuerCompany
});
```

#### Settings Management
- `getSettings()` - Retrieve current settings
- `updateSettings(partial)` - Update settings

#### Recipients Management
- `addRecipient(id, recipient)` - Add a new recipient
- `findRecipientById(id)` - Find recipient by ID
- `findRecipientByName(name)` - Find recipient by name
- `getAllRecipients()` - Get all recipients
- `deleteRecipient(id)` - Delete recipient by ID
- `getRecipientCount()` - Count of recipients

#### Invoices Management
- `addInvoice(invoice)` - Add a new invoice
- `findInvoiceById(id)` - Find invoice by ID
- `findInvoicesByRecipient(idOrName)` - Find invoices for specific recipient
- `getAllInvoices()` - Get all invoices
- `getInvoicesByDateRange(startDate, endDate)` - Find invoices by date
- `deleteInvoice(id)` - Delete invoice by ID
- `calculateTotalAmount()` - Calculate total value of all invoices
- `getInvoiceCount()` - Count of invoices

### 3. `invoice-repo-sample-data.ts`
Exports the `generateSampleData()` function that creates a pre-populated repository with:

- **5 Recipients** - Mix of companies and individuals
- **8 Sample Invoices** - Various amounts and items
- **Default VAT Rate** - 20%
- **Tax IDs** - Formatted as "[country code] + company id" (e.g., BG200776618)

## Usage Examples

### Basic Setup

```typescript
import InvoiceRepo, { generateSampleData } from 'invoice-repo';

// Create sample data
const repo = generateSampleData();

console.log(`Total invoices: ${repo.getInvoiceCount()}`);
console.log(`Total recipients: ${repo.getRecipientCount()}`);
```

### Working with Invoices

```typescript
// Find invoice by ID
const invoice = repo.findInvoiceById('INV-2025-001');
console.log(`Invoice total: ${invoice?.totalAmount}`);

// Get invoices by recipient
const invoicesByRecipient = repo.findInvoicesByRecipient('cust-001');
console.log(`Invoices for recipient: ${invoicesByRecipient.length}`);

// Get invoices in date range
const february = repo.getInvoicesByDateRange(
  new Date('2025-02-01'),
  new Date('2025-02-28')
);
console.log(`February invoices: ${february.length}`);

// Calculate total amount
const totalAmount = repo.calculateTotalAmount();
console.log(`Total amount: ${totalAmount}`);
```

### Working with Recipients

```typescript
// Find recipient by ID
const recipient = repo.findRecipientById('cust-001');
console.log(`Recipient: ${recipient?.name}`);

// Find recipient by name
const abc = repo.findRecipientByName('ABC Corporation');

// Get all recipients
const allRecipients = repo.getAllRecipients();
allRecipients.forEach((recipient, id) => {
  console.log(`${id}: ${recipient.name}`);
});
```

### Creating Custom Invoice

```typescript
import InvoiceRepo, { IssuerCompany, Invoice } from 'invoice-repo';

const issuer: IssuerCompany = {
  name: 'My Company',
  id: '123456789',
  taxId: 'BG123456789',
  address: '123 Main St, City, Country',
  manager: 'John Manager',
  iban: 'BG80BNBG96611020345678'
};

const repo = new InvoiceRepo({
  defaultVatRate: 0.20,
  issuer
});

const invoice: Invoice = {
  id: 'INV-2025-100',
  date: new Date(),
  issuer,
  recipient: {
    name: 'Customer Ltd',
    id: 'CUST-001',
    taxId: 'BG987654321',
    address: '456 Business Ave, City, Country',
    manager: 'Jane Customer'
  },
  items: [
    {
      product: 'Consulting Services',
      quantity: 10,
      unit: 'pcs',
      price: 100,
      vatRate: 0.20,
      value: 1000
    }
  ],
  subtotalAmount: 1000,
  vatAmount: 200,
  totalAmount: 1200
};

repo.addInvoice(invoice);
```

## Tax ID Format

Tax IDs are formatted as a concatenation of country code and company ID:
- Format: `[COUNTRY_CODE][COMPANY_ID]`
- Example: `BG200776618` (Bulgaria + 200776618)

## Default Settings

- **Default VAT Rate**: 20% (0.20)
- **Issuer**: TechSoft Ltd. (used in sample data)
- **Sample Invoices**: 8 invoices
- **Sample Recipients**: 5 recipients (3 companies, 2 individuals)

## Building the Package

```bash
# Install dependencies
npm install

# Build TypeScript
npm run build

# Watch mode for development
npm run build:watch

# Clean dist folder
npm run clean
```

## API Reference

### InvoiceRepo Class

```typescript
class InvoiceRepo {
  constructor(settings: InvoiceSettings)
  
  // Settings
  getSettings(): InvoiceSettings
  updateSettings(settings: Partial<InvoiceSettings>): void
  
  // Recipients
  addRecipient(id: string, recipient: Recipient): void
  findRecipientById(id: string): Recipient | undefined
  findRecipientByName(name: string): Recipient | undefined
  getAllRecipients(): Map<string, Recipient>
  deleteRecipient(id: string): boolean
  getRecipientCount(): number
  
  // Invoices
  addInvoice(invoice: Invoice): void
  findInvoiceById(id: string): Invoice | undefined
  findInvoicesByRecipient(recipientIdOrName: string): Invoice[]
  getAllInvoices(): Map<string, Invoice>
  getInvoicesByDateRange(startDate: Date, endDate: Date): Invoice[]
  deleteInvoice(id: string): boolean
  calculateTotalAmount(): number
  getInvoiceCount(): number
}
```

## Error Handling

The repository throws errors for invalid operations:

- Adding a recipient with duplicate ID: `"Recipient with ID '...' already exists"`
- Adding an invoice with duplicate ID: `"Invoice with ID '...' already exists"`

## License

ISC

## Author

Developed as part of the Introduction to Programming with AI course.
