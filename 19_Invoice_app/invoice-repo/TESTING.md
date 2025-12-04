# Invoice-Repo Test Suite

Comprehensive Jest test suite for the invoice-repo TypeScript package.

## Test Coverage

✅ **100% Code Coverage**
- All files: 100% statements, branches, functions, and lines

## Test Files

### 1. `invoice-types.test.ts`
Tests for TypeScript types and type guards.

**Sections:**
- **Type Guards**
  - `isRecipientCompany()` - 5 test cases
  - `isRecipientIndividual()` - 3 test cases
- **Type Interfaces**
  - Valid creation of `IssuerCompany`
  - Valid creation of `RecipientCompany` with optional fields
  - Valid creation of `RecipientIndividual`
  - Valid creation of `InvoiceItem`
  - Valid creation of `Invoice`
  - All `ProductUnit` types validation

**Tests: 16**

### 2. `invoice-repo.test.ts`
Comprehensive tests for the InvoiceRepo class.

**Sections:**
- **Settings Management** (4 tests)
  - Initialize with correct settings
  - Update VAT rate
  - Update issuer
  - Partial updates

- **Recipients Management** (14 tests)
  - Add recipients (company, individual, multiple)
  - Duplicate error handling
  - Find by ID and name
  - Get all recipients
  - Delete recipients

- **Invoices Management** (13 tests)
  - Add invoices (single, multiple)
  - Duplicate error handling
  - Find by ID
  - Find by recipient (ID and name)
  - Find by date range (with boundaries)
  - Get all invoices
  - Delete invoices

- **Calculations** (4 tests)
  - Single and multiple invoice totals
  - Empty repo handling
  - Updates after deletion

- **Counts** (3 tests)
  - Invoice counting
  - Recipient counting

**Tests: 38**

### 3. `invoice-repo-sample-data.test.ts`
Tests for the sample data generator function.

**Sections:**
- **Basic Structure** (3 tests)
  - Returns InvoiceRepo instance
  - Correct default settings
  - Issuer with all required properties

- **Recipients** (5 tests)
  - Minimum recipient count
  - Exact count (5 recipients)
  - Company and individual recipient mix
  - Tax ID format validation

- **Invoices** (8 tests)
  - Minimum and exact invoice count (8)
  - Valid invoice IDs and dates
  - Invoice items presence
  - Amount calculations and VAT verification
  - No negative amounts

- **Invoice Items** (3 tests)
  - Valid units (pcs, kg, liters, meters)
  - Positive quantities and prices
  - Product descriptions

- **Total Calculations** (3 tests)
  - Total repository amount
  - Minimum total threshold
  - Consistent totals across methods

- **Data Relationships** (3 tests)
  - Valid recipient relationships
  - Issuer consistency
  - Diverse invoice dates

- **Sample Data Consistency** (2 tests)
  - Same data on multiple calls
  - Independent instances

**Tests: 29**

## Running Tests

```bash
# Run all tests
npm test

# Run tests in watch mode
npm run test:watch

# Run tests with coverage report
npm run test:coverage
```

## Test Statistics

- **Total Test Suites**: 3
- **Total Tests**: 83
- **Passing**: 83 (100%)
- **Failing**: 0
- **Coverage**: 100%
  - Statements: 100%
  - Branches: 100%
  - Functions: 100%
  - Lines: 100%

## Test Configuration

Jest is configured via `jest.config.js` with:
- **Preset**: `ts-jest` for TypeScript support
- **Environment**: Node.js
- **Test Pattern**: `**/__tests__/**/*.test.ts` and `**/*.test.ts`
- **Coverage Threshold**: 70% (all files meet 100%)
- **Coverage Collection**: Excludes `.d.ts` and `index.ts` files

## Key Test Scenarios

### Type Safety
- Type guards correctly identify recipients
- All interface types can be properly instantiated
- Product units are validated

### Repository Operations
- Add, find, and delete recipients
- Add, find, and delete invoices
- Search by ID, name, and date range
- Error handling for duplicates

### Calculations
- Subtotal and VAT calculations
- Total amount computations
- Multi-invoice aggregation
- Amount updates after modifications

### Sample Data
- 8 pre-populated invoices
- 5 diverse recipients (companies and individuals)
- Realistic invoice amounts (BGN 1,500-9,120 per invoice)
- 20% default VAT rate
- Date diversity across 2+ months

## Continuous Integration

To integrate into CI/CD pipeline:

```bash
npm run build && npm test -- --coverage
```

All tests must pass and coverage must meet 70% threshold on all metrics.
