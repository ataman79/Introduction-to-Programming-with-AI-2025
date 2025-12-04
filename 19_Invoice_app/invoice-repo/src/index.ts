/**
 * Invoice Repository Package Entry Point
 */

// Export types
export {
  IssuerCompany,
  RecipientCompany,
  RecipientIndividual,
  Recipient,
  isRecipientCompany,
  isRecipientIndividual,
  ProductUnit,
  InvoiceItem,
  InvoiceSettings,
  Invoice,
} from './invoice-types';

// Export InvoiceRepo class as default and named export
export { default as InvoiceRepo } from './invoice-repo';
export { default } from './invoice-repo';

// Export sample data generator - as both named and default
export { default as generateSampleData } from './invoice-repo-sample-data';

// Also create a helper function to get the generateSampleData
import generateSampleDataFn from './invoice-repo-sample-data';
export const getSampleData = generateSampleDataFn;
