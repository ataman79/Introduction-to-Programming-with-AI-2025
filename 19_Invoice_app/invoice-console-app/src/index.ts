/**
 * Invoice Console Application
 * Demonstrates CRUD operations on invoices using the invoice-repo library
 */

import InvoiceRepo, { generateSampleData, Invoice, InvoiceItem, Recipient } from 'invoice-repo';

// ===== UTILITY FUNCTIONS =====

/**
 * Print a section header
 */
function printHeader(title: string): void {
  console.log('\n' + '='.repeat(80));
  console.log(`  ${title}`);
  console.log('='.repeat(80) + '\n');
}

/**
 * Print a section divider
 */
function printDivider(): void {
  console.log('-'.repeat(80));
}

/**
 * Format currency
 */
function formatCurrency(amount: number): string {
  return `BGN ${amount.toFixed(2)}`;
}

/**
 * Print invoice details
 */
function printInvoiceDetails(invoice: Invoice): void {
  const recipientName = invoice.recipient.name;
  
  console.log(`  Invoice ID: ${invoice.id}`);
  console.log(`  Date: ${invoice.date.toLocaleDateString()}`);
  console.log(`  Recipient: ${recipientName}`);
  console.log(`  Items: ${invoice.items.length}`);
  
  invoice.items.forEach((item, index) => {
    console.log(`    ${index + 1}. ${item.product}`);
    console.log(`       Qty: ${item.quantity} ${item.unit} @ ${formatCurrency(item.price)} = ${formatCurrency(item.value)}`);
    console.log(`       VAT: ${(item.vatRate * 100).toFixed(0)}%`);
  });
  
  console.log(`  Subtotal: ${formatCurrency(invoice.subtotalAmount)}`);
  console.log(`  VAT Amount: ${formatCurrency(invoice.vatAmount)}`);
  console.log(`  Total: ${formatCurrency(invoice.totalAmount)}`);
}

/**
 * Print recipient details
 */
function printRecipientDetails(id: string, recipient: Recipient): void {
  console.log(`  ID: ${id}`);
  console.log(`  Name: ${recipient.name}`);
  
  if ('taxId' in recipient) {
    console.log(`  Tax ID: ${recipient.taxId || 'N/A'}`);
  }
  if ('nationalIdNumber' in recipient) {
    console.log(`  National ID: ${recipient.nationalIdNumber || 'N/A'}`);
  }
}

// ===== MAIN DEMONSTRATION =====

function main(): void {
  printHeader('INVOICE CONSOLE APPLICATION DEMO');
  console.log('This application demonstrates CRUD operations on invoices.\n');

  // 1. LOAD SAMPLE DATA
  printHeader('1. LOADING SAMPLE DATA');
  const repo = generateSampleData();
  
  console.log(`✓ Loaded ${repo.getInvoiceCount()} invoices`);
  console.log(`✓ Loaded ${repo.getRecipientCount()} recipients`);
  console.log(`✓ Default VAT rate: ${(repo.getSettings().defaultVatRate * 100).toFixed(0)}%`);
  console.log(`✓ Issuer: ${repo.getSettings().issuer.name}`);

  // 2. DISPLAY ALL INVOICES
  printHeader('2. ALL INVOICES IN REPOSITORY');
  
  const allInvoices = repo.getAllInvoices();
  let invoiceCount = 0;
  
  allInvoices.forEach((invoice, id) => {
    invoiceCount++;
    console.log(`\n[Invoice ${invoiceCount}]`);
    printInvoiceDetails(invoice);
    printDivider();
  });
  
  console.log(`\nTotal repository amount: ${formatCurrency(repo.calculateTotalAmount())}`);

  // 3. FIND INVOICE BY ID
  printHeader('3. FIND INVOICE BY ID');
  
  const searchId = 'INV-2025-003';
  const foundInvoice = repo.findInvoiceById(searchId);
  
  if (foundInvoice) {
    console.log(`✓ Found invoice: ${searchId}`);
    printInvoiceDetails(foundInvoice);
  } else {
    console.log(`✗ Invoice not found: ${searchId}`);
  }

  // 4. FIND INVOICES BY RECIPIENT
  printHeader('4. FIND INVOICES BY RECIPIENT');
  
  const recipientId = 'cust-001';
  const recipientInvoices = repo.findInvoicesByRecipient(recipientId);
  
  const recipient = repo.findRecipientById(recipientId);
  if (recipient) {
    console.log(`✓ Found ${recipientInvoices.length} invoice(s) for: ${recipient.name}\n`);
    
    recipientInvoices.forEach((invoice, index) => {
      console.log(`[Invoice ${index + 1}]`);
      printInvoiceDetails(invoice);
      printDivider();
    });
  }

  // 5. FIND INVOICES BY DATE RANGE
  printHeader('5. FIND INVOICES BY DATE RANGE');
  
  const startDate = new Date('2025-02-01');
  const endDate = new Date('2025-02-28');
  const februaryInvoices = repo.getInvoicesByDateRange(startDate, endDate);
  
  console.log(`✓ Found ${februaryInvoices.length} invoice(s) between ${startDate.toLocaleDateString()} and ${endDate.toLocaleDateString()}\n`);
  
  februaryInvoices.forEach((invoice, index) => {
    console.log(`[Invoice ${index + 1}]`);
    printInvoiceDetails(invoice);
    printDivider();
  });

  // 6. ADD NEW INVOICE
  printHeader('6. ADD NEW INVOICE');
  
  const newInvoice: Invoice = {
    id: 'INV-2025-DEMO-001',
    date: new Date('2025-03-10'),
    issuer: repo.getSettings().issuer,
    recipient: {
      name: 'Demo Customer Inc',
      id: 'DEMO-CUST-001',
      taxId: 'BGDEMOCUST001',
      address: '999 Demo Street, Sofia, Bulgaria',
      manager: 'Demo Manager'
    },
    items: [
      {
        product: 'Custom Software Development',
        quantity: 160,
        unit: 'pcs',
        price: 75,
        vatRate: 0.2,
        value: 12000
      },
      {
        product: 'Technical Support Package',
        quantity: 12,
        unit: 'pcs',
        price: 200,
        vatRate: 0.2,
        value: 2400
      }
    ],
    subtotalAmount: 14400,
    vatAmount: 2880,
    totalAmount: 17280
  };

  repo.addInvoice(newInvoice);
  console.log(`✓ Added new invoice: ${newInvoice.id}`);
  console.log(`  Amount: ${formatCurrency(newInvoice.totalAmount)}`);
  console.log(`\n  Invoice details:`);
  printInvoiceDetails(newInvoice);
  console.log(`\n✓ New repository total amount: ${formatCurrency(repo.calculateTotalAmount())}`);

  // 7. EDIT/UPDATE INVOICE
  printHeader('7. EDIT/UPDATE INVOICE');
  
  const invoiceToEdit = repo.findInvoiceById('INV-2025-001');
  
  if (invoiceToEdit) {
    console.log(`Original invoice (${invoiceToEdit.id}):`);
    console.log(`  Item count: ${invoiceToEdit.items.length}`);
    console.log(`  Total: ${formatCurrency(invoiceToEdit.totalAmount)}\n`);

    // Delete and recreate with modifications
    repo.deleteInvoice(invoiceToEdit.id);
    
    const updatedInvoice: Invoice = {
      ...invoiceToEdit,
      items: [
        ...invoiceToEdit.items,
        {
          product: 'Additional Consulting',
          quantity: 20,
          unit: 'pcs',
          price: 100,
          vatRate: 0.2,
          value: 2000
        }
      ],
      subtotalAmount: invoiceToEdit.subtotalAmount + 2000,
      vatAmount: invoiceToEdit.vatAmount + 400,
      totalAmount: invoiceToEdit.totalAmount + 2400
    };
    
    repo.addInvoice(updatedInvoice);
    
    console.log(`✓ Updated invoice (${updatedInvoice.id}):`);
    console.log(`  Item count: ${updatedInvoice.items.length}`);
    console.log(`  Total: ${formatCurrency(updatedInvoice.totalAmount)}\n`);
    console.log(`  Updated details:`);
    printInvoiceDetails(updatedInvoice);
  }

  // 8. DELETE INVOICE
  printHeader('8. DELETE INVOICE');
  
  const invoiceToDelete = 'INV-2025-002';
  const invoiceCountBefore = repo.getInvoiceCount();
  const totalBefore = repo.calculateTotalAmount();
  
  const deleted = repo.deleteInvoice(invoiceToDelete);
  
  if (deleted) {
    const invoiceCountAfter = repo.getInvoiceCount();
    const totalAfter = repo.calculateTotalAmount();
    
    console.log(`✓ Deleted invoice: ${invoiceToDelete}`);
    console.log(`  Invoice count: ${invoiceCountBefore} → ${invoiceCountAfter}`);
    console.log(`  Total amount: ${formatCurrency(totalBefore)} → ${formatCurrency(totalAfter)}`);
  } else {
    console.log(`✗ Invoice not found: ${invoiceToDelete}`);
  }

  // 9. DISPLAY ALL RECIPIENTS
  printHeader('9. ALL RECIPIENTS IN REPOSITORY');
  
  const allRecipients = repo.getAllRecipients();
  let recipientCount = 0;
  
  allRecipients.forEach((recip, id) => {
    recipientCount++;
    console.log(`\n[Recipient ${recipientCount}]`);
    printRecipientDetails(id, recip);
    
    const recipInvoices = repo.findInvoicesByRecipient(id);
    console.log(`  Invoices: ${recipInvoices.length}`);
  });

  // 10. FINAL SUMMARY
  printHeader('10. FINAL SUMMARY');
  
  console.log(`Total invoices: ${repo.getInvoiceCount()}`);
  console.log(`Total recipients: ${repo.getRecipientCount()}`);
  console.log(`Total repository amount: ${formatCurrency(repo.calculateTotalAmount())}`);
  console.log(`Default VAT rate: ${(repo.getSettings().defaultVatRate * 100).toFixed(0)}%`);
  console.log(`Issuer company: ${repo.getSettings().issuer.name}`);

  printHeader('DEMONSTRATION COMPLETED');
  console.log('All CRUD operations completed successfully!\n');
}

// Run the application
main();
