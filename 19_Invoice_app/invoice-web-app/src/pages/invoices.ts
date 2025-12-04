/**
 * Invoices Page
 */

import { getAllInvoices, getInvoiceById } from '../data';

export function renderInvoicesPage(): string {
  try {
    const invoices = getAllInvoices();
    const invoiceArray = Array.from(invoices);

    const invoiceRows = invoiceArray
      .map(
        ([, invoice]: any) => `
          <tr>
            <td><strong>${invoice.id}</strong></td>
            <td>${invoice.date.toLocaleDateString()}</td>
            <td>${invoice.recipient.name}</td>
            <td class="amount">BGN ${invoice.totalAmount.toFixed(2)}</td>
            <td>
              <div class="action-buttons">
                <a href="/invoices/${invoice.id}/view" data-navigo class="btn-action btn-view" title="View details">View</a>
                <a href="/invoices/${invoice.id}/edit" data-navigo class="btn-action btn-edit" title="Edit invoice">Edit</a>
                <button class="btn-action btn-delete" onclick="handleDeleteInvoice('${invoice.id}')" title="Delete invoice">Delete</button>
              </div>
            </td>
          </tr>
        `
      )
      .join('');

    const emptyMessage =
      invoiceArray.length === 0
        ? `<tr><td colspan="6" style="text-align: center; padding: 2rem; color: var(--text-secondary);">No invoices found</td></tr>`
        : '';

    return `
      <div class="page">
        <div class="page-header">
          <h1>Invoices</h1>
          <p>Manage and view all invoices</p>
        </div>
        
        <div class="page-content">
          <div class="page-actions">
            <a href="/invoices/new" data-navigo class="btn btn-primary">+ Create Invoice</a>
          </div>
          
          <div class="table-wrapper">
            <table class="data-table">
              <thead>
                <tr>
                  <th>Invoice ID</th>
                  <th>Date</th>
                  <th>Recipient</th>
                  <th>Amount</th>
                  <th colspan="3">Actions</th>
                </tr>
              </thead>
              <tbody>
                ${invoiceArray.length > 0 ? invoiceRows : emptyMessage}
              </tbody>
            </table>
          </div>
          
          <div class="table-footer">
            <p><strong>${invoiceArray.length}</strong> invoice(s) total</p>
          </div>
        </div>
      </div>
    `;
  } catch (error) {
    console.error('Error rendering invoices page:', error);
    return `
      <div class="page">
        <div class="page-header">
          <h1>Invoices</h1>
          <p>Error loading invoices</p>
        </div>
        <div class="page-content">
          <div class="error-box">
            <p>Failed to load invoices. Please refresh the page.</p>
          </div>
        </div>
      </div>
    `;
  }
}

/**
 * Invoice View Page
 */
export function renderInvoiceViewPage(id: string): string {
  try {
    console.log(`🔍 Looking for invoice with ID: "${id}"`);
    
    const invoice = getInvoiceById(id);
    console.log(`📋 Invoice lookup result:`, invoice);

    if (!invoice) {
      // Get all invoices to help debug
      const allInvoices = getAllInvoices();
      const allIds = Array.from(allInvoices.keys());
      console.log(`❌ Invoice not found. Available invoice IDs:`, allIds);
      
      return `
        <div class="page">
          <div class="page-header">
            <div class="page-header-actions">
              <a href="/invoices" data-navigo class="btn btn-secondary">← Back to Invoices</a>
            </div>
            <h1>Invoice Not Found</h1>
          </div>
          <div class="page-content">
            <div class="error-box">
              <p>Invoice ID: <strong>${id}</strong> was not found in the system.</p>
              <p style="font-size: 0.9rem; color: var(--text-secondary); margin-top: 1rem;">Available invoices: ${allIds.join(', ')}</p>
              <a href="/invoices" data-navigo class="btn btn-primary" style="margin-top: 1rem; display: inline-block;">Back to Invoices</a>
            </div>
          </div>
        </div>
      `;
    }

    // Helper function to format dates - handles both Date objects and strings
    const formatDate = (dateValue: any): string => {
      if (!dateValue) return 'N/A';
      const date = typeof dateValue === 'string' ? new Date(dateValue) : dateValue;
      return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
    };

    const itemsHtml = invoice.items
      .map(
        (item: any) => `
        <tr>
          <td class="item-name">${item.product}</td>
          <td class="item-qty">${item.quantity}</td>
          <td class="item-price">BGN ${item.price.toFixed(2)}</td>
          <td class="item-total">BGN ${(item.quantity * item.price).toFixed(2)}</td>
        </tr>
      `
      )
      .join('');

    return `
      <div class="page">
        <div class="page-header">
          <div class="page-header-actions">
            <a href="/invoices" data-navigo class="btn btn-secondary">← Back to Invoices</a>
          </div>
          <h1>Invoice ${invoice.id}</h1>
          <p>View and manage invoice details</p>
        </div>
        
        <div class="page-content">
          <div class="page-actions">
            <a href="/invoices/${invoice.id}/edit" data-navigo class="btn btn-edit">✎ Edit</a>
            <a href="/invoices/${invoice.id}/pdf" data-navigo class="btn btn-secondary">⬇ Download PDF</a>
          </div>

          <!-- Invoice Header Section -->
          <div class="invoice-section invoice-header">
            <div class="header-row">
              <div class="header-col">
                <div class="header-title">📄 Invoice</div>
                <div class="header-info">
                  <div class="info-row">
                    <span class="info-label">Invoice ID:</span>
                    <span class="info-value">${invoice.id}</span>
                  </div>
                  <div class="info-row">
                    <span class="info-label">Invoice Date:</span>
                    <span class="info-value">${formatDate(invoice.date)}</span>
                  </div>
                  <div class="info-row">
                    <span class="info-label">Status:</span>
                    <span class="info-value status-badge status-sent">Sent</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Issuer and Recipient Section -->
          <div class="invoice-section">
            <div class="two-column-layout">
              <div class="column">
                <h3 class="section-title">From (Issuer)</h3>
                <div class="info-box">
                  <div class="info-row">
                    <span class="label">Company:</span>
                    <span class="value">${invoice.issuerName || 'N/A'}</span>
                  </div>
                  <div class="info-row">
                    <span class="label">ID:</span>
                    <span class="value">${invoice.issuerId || 'N/A'}</span>
                  </div>
                  <div class="info-row">
                    <span class="label">Tax ID:</span>
                    <span class="value">${invoice.issuerTaxId || 'N/A'}</span>
                  </div>
                </div>
              </div>
              <div class="column">
                <h3 class="section-title">To (Recipient)</h3>
                <div class="info-box">
                  <div class="info-row">
                    <span class="label">Name:</span>
                    <span class="value">${invoice.recipient.name}</span>
                  </div>
                  <div class="info-row">
                    <span class="label">ID:</span>
                    <span class="value">${invoice.recipient.id}</span>
                  </div>
                  ${invoice.recipient.taxId ? `
                  <div class="info-row">
                    <span class="label">Tax ID:</span>
                    <span class="value">${invoice.recipient.taxId}</span>
                  </div>
                  ` : ''}
                  ${invoice.recipient.address ? `
                  <div class="info-row">
                    <span class="label">Address:</span>
                    <span class="value">${invoice.recipient.address}</span>
                  </div>
                  ` : ''}
                </div>
              </div>
            </div>
          </div>

          <!-- Items Section -->
          <div class="invoice-section">
            <h3 class="section-title">Invoice Items</h3>
            <div class="table-wrapper">
              <table class="invoice-table">
                <thead>
                  <tr>
                    <th class="col-description">Description</th>
                    <th class="col-qty">Qty</th>
                    <th class="col-price">Unit Price</th>
                    <th class="col-total">Total</th>
                  </tr>
                </thead>
                <tbody>
                  ${itemsHtml}
                </tbody>
              </table>
            </div>
          </div>

          <!-- Summary Section -->
          <div class="invoice-section">
            <h3 class="section-title">Invoice Summary</h3>
            <div class="summary-box">
              <div class="summary-row">
                <span class="summary-label">Subtotal:</span>
                <span class="summary-value">BGN ${invoice.subtotalAmount.toFixed(2)}</span>
              </div>
              <div class="summary-row">
                <span class="summary-label">VAT (${(invoice.vatRate * 100).toFixed(0)}%):</span>
                <span class="summary-value">BGN ${invoice.vatAmount.toFixed(2)}</span>
              </div>
              <div class="summary-row summary-total">
                <span class="summary-label">Total Amount:</span>
                <span class="summary-value">BGN ${invoice.totalAmount.toFixed(2)}</span>
              </div>
            </div>
          </div>

          <!-- Action Buttons -->
          <div class="invoice-section">
            <div class="action-bar">
              <a href="/invoices/${invoice.id}/edit" data-navigo class="btn btn-edit">✎ Edit Invoice</a>
              <a href="/invoices" data-navigo class="btn btn-secondary">← Back to List</a>
            </div>
          </div>
        </div>
      </div>
    `;
  } catch (error) {
    console.error('Error rendering invoice view page:', error);
    return `
      <div class="page">
        <div class="page-header">
          <div class="page-header-actions">
            <a href="/invoices" data-navigo class="btn btn-secondary">← Back</a>
          </div>
          <h1>Error Loading Invoice</h1>
        </div>
        <div class="page-content">
          <div class="error-box">
            <p>Failed to load invoice details. Please try again.</p>
            <a href="/invoices" data-navigo class="btn btn-primary" style="margin-top: 1rem; display: inline-block;">Back to Invoices</a>
          </div>
        </div>
      </div>
    `;
  }
}

/**
 * Invoice Edit Page
 */
export function renderInvoiceEditPage(id: string): string {
  return `
    <div class="page">
      <div class="page-header">
        <div class="page-header-actions">
          <a href="/invoices/${id}/view" data-navigo class="btn btn-secondary">← Back</a>
        </div>
        <h1>Edit Invoice ${id}</h1>
        <p>Edit invoice information</p>
      </div>
      
      <div class="page-content">
        <form class="form">
          <div class="form-group">
            <label>Invoice ID</label>
            <input type="text" value="${id}" disabled>
          </div>
          
          <div class="form-actions">
            <button type="submit" class="btn btn-primary">Save Changes</button>
            <a href="/invoices/${id}/view" data-navigo class="btn btn-secondary">Cancel</a>
          </div>
        </form>
      </div>
    </div>
  `;
}

/**
 * Invoice PDF Page
 */
export function renderInvoicePdfPage(id: string): string {
  return `
    <div class="page">
      <div class="page-header">
        <div class="page-header-actions">
          <a href="/invoices/${id}/view" data-navigo class="btn btn-secondary">← Back</a>
        </div>
        <h1>Invoice ${id} - PDF</h1>
        <p>PDF Viewer</p>
      </div>
      
      <div class="page-content">
        <div class="card" style="text-align: center; padding: 3rem;">
          <p style="color: var(--text-secondary); margin-bottom: 1rem;">PDF rendering will be implemented here</p>
          <button class="btn btn-primary">Download PDF</button>
        </div>
      </div>
    </div>
  `;
}
