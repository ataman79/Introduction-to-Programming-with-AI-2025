/**
 * Global Data Repository
 * Holds and manages app data using the invoice-repo library
 */

// Type definition for the invoice repo
interface InvoiceRepo {
  getSettings(): any;
  getInvoiceCount(): number;
  getRecipientCount(): number;
  getAllInvoices(): Map<string, any>;
  getAllRecipients(): Map<string, any>;
  findInvoiceById(id: string): any;
  findRecipientById(id: string): any;
  addInvoice(invoice: any): void;
  updateInvoice(invoice: any): void;
  deleteInvoice(id: string): void;
  addRecipient(id: string, recipient: any): void;
  updateRecipient(id: string, recipient: any): void;
  deleteRecipient(id: string): void;
  calculateTotalAmount(): number;
}

// Global data store
let dataRepo: InvoiceRepo | null = null;

/**
 * Initialize the global data repository with sample data
 */
export async function initializeDataRepo(): Promise<void> {
  if (dataRepo) {
    return;
  }

  try {
    console.log('Loading invoice-repo module...');
    
    // Dynamically import invoice-repo
    const invoiceRepoModule = await import('invoice-repo') as any;
    console.log('Module loaded, exports:', Object.keys(invoiceRepoModule));
    
    // Get the generateSampleData function
    let generateSampleData: any = null;
    
    // Check for named export
    if (invoiceRepoModule.generateSampleData) {
      console.log('Found generateSampleData as named export');
      generateSampleData = invoiceRepoModule.generateSampleData;
    }
    // Check for default export with generateSampleData property
    else if (invoiceRepoModule.default?.generateSampleData) {
      console.log('Found generateSampleData in default export');
      generateSampleData = invoiceRepoModule.default.generateSampleData;
    }
    // Check if default itself is the function
    else if (typeof invoiceRepoModule.default === 'function') {
      console.log('Default export is a function, checking if it generates sample data');
      generateSampleData = invoiceRepoModule.default;
    }

    if (!generateSampleData || typeof generateSampleData !== 'function') {
      console.error('generateSampleData function not found');
      console.error('Module keys:', Object.keys(invoiceRepoModule));
      console.error('Default:', invoiceRepoModule.default);
      throw new Error('generateSampleData function not found in invoice-repo');
    }

    console.log('Calling generateSampleData...');
    // Load sample data
    dataRepo = generateSampleData() as InvoiceRepo;
    console.log('Sample data loaded successfully');

    console.log('✅ Data repository initialized');
    if (dataRepo) {
      console.log(`📊 Loaded ${dataRepo.getInvoiceCount()} invoices and ${dataRepo.getRecipientCount()} recipients`);
    }
  } catch (error) {
    console.error('❌ Failed to initialize data repository:', error);
    throw error;
  }
}

/**
 * Get the global data repository
 * Ensures the repository is initialized before returning
 */
export function getDataRepo(): InvoiceRepo {
  if (!dataRepo) {
    throw new Error('Data repository not initialized. Call initializeDataRepo() first.');
  }
  return dataRepo;
}

/**
 * Check if the data repository is initialized
 */
export function isDataRepoInitialized(): boolean {
  return dataRepo !== null;
}

/**
 * Get all invoices
 */
export function getAllInvoices(): Map<string, any> {
  return getDataRepo().getAllInvoices();
}

/**
 * Get invoice by ID
 */
export function getInvoiceById(id: string): any {
  return getDataRepo().findInvoiceById(id);
}

/**
 * Add new invoice
 */
export function addInvoice(invoice: any): void {
  getDataRepo().addInvoice(invoice);
}

/**
 * Update invoice
 */
export function updateInvoice(invoice: any): void {
  getDataRepo().updateInvoice(invoice);
}

/**
 * Delete invoice
 */
export function deleteInvoice(id: string): void {
  getDataRepo().deleteInvoice(id);
}

/**
 * Get all recipients
 */
export function getAllRecipients(): Map<string, any> {
  return getDataRepo().getAllRecipients();
}

/**
 * Get recipient by ID
 */
export function getRecipientById(id: string): any {
  return getDataRepo().findRecipientById(id);
}

/**
 * Add new recipient
 */
export function addRecipient(id: string, recipient: any): void {
  getDataRepo().addRecipient(id, recipient);
}

/**
 * Update recipient
 */
export function updateRecipient(id: string, recipient: any): void {
  getDataRepo().updateRecipient(id, recipient);
}

/**
 * Delete recipient
 */
export function deleteRecipient(id: string): void {
  getDataRepo().deleteRecipient(id);
}

/**
 * Get app settings
 */
export function getSettings(): any {
  return getDataRepo().getSettings();
}

/**
 * Get invoice count
 */
export function getInvoiceCount(): number {
  return getDataRepo().getInvoiceCount();
}

/**
 * Get recipient count
 */
export function getRecipientCount(): number {
  return getDataRepo().getRecipientCount();
}

/**
 * Calculate total amount of all invoices
 */
export function calculateTotalAmount(): number {
  return getDataRepo().calculateTotalAmount();
}
