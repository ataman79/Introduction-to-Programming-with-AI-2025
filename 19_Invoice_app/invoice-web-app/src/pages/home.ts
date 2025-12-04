/**
 * Home Page
 */

import { getInvoiceCount, getRecipientCount, calculateTotalAmount, getSettings } from '../data';

export function renderHomePage(): string {
  try {
    const invoiceCount = getInvoiceCount();
    const recipientCount = getRecipientCount();
    const totalAmount = calculateTotalAmount();
    const settings = getSettings();

    return `
      <div class="page">
        <div class="page-header">
          <h1>Dashboard</h1>
          <p>Welcome to Invoice Management System</p>
        </div>

        <div class="page-content">
          <div class="stats-grid">
            <div class="stat-card">
              <h3>Total Invoices</h3>
              <p class="stat-value">${invoiceCount}</p>
            </div>
            <div class="stat-card">
              <h3>Total Recipients</h3>
              <p class="stat-value">${recipientCount}</p>
            </div>
            <div class="stat-card">
              <h3>Total Amount</h3>
              <p class="stat-value">BGN ${totalAmount.toFixed(2)}</p>
            </div>
            <div class="stat-card">
              <h3>VAT Rate</h3>
              <p class="stat-value">${(settings.defaultVatRate * 100).toFixed(0)}%</p>
            </div>
          </div>

          <div class="dashboard-grid">
            <a href="/invoices" data-navigo class="dashboard-card">
              <div class="card-icon">📄</div>
              <h2>Invoices</h2>
              <p>View and manage all invoices</p>
              <span class="card-count">${invoiceCount} invoices</span>
            </a>

            <a href="/clients" data-navigo class="dashboard-card">
              <div class="card-icon">👥</div>
              <h2>Clients</h2>
              <p>Manage recipients and clients</p>
              <span class="card-count">${recipientCount} clients</span>
            </a>

            <a href="/config" data-navigo class="dashboard-card">
              <div class="card-icon">⚙️</div>
              <h2>Configuration</h2>
              <p>Manage application settings</p>
              <span class="card-count">Settings</span>
            </a>
          </div>

          <div class="card" style="margin-top: 2rem;">
            <h2>Issuer Information</h2>
            <div class="info-grid">
              <div>
                <p><strong>Company:</strong> ${settings.issuer.name}</p>
                <p><strong>ID:</strong> ${settings.issuer.id}</p>
                <p><strong>Tax ID:</strong> ${settings.issuer.taxId}</p>
              </div>
              <div>
                <p><strong>Address:</strong> ${settings.issuer.address}</p>
                <p><strong>Manager:</strong> ${settings.issuer.manager}</p>
                <p><strong>IBAN:</strong> ${settings.issuer.iban}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
  } catch (error) {
    console.error('Error rendering home page:', error);
    return `
      <div class="page">
        <div class="page-header">
          <h1>Dashboard</h1>
          <p>Error loading dashboard</p>
        </div>
        <div class="page-content">
          <div class="error-message">
            <p>Failed to load data. Please refresh the page.</p>
          </div>
        </div>
      </div>
    `;
  }
}
