/**
 * Clients Page
 */

import { getAllRecipients, getRecipientById } from '../data';

export function renderClientsPage(): string {
  try {
    const recipients = getAllRecipients();
    const recipientArray = Array.from(recipients);

    const recipientRows = recipientArray
      .map(
        ([id, recipient]: any) => {
          const type = recipient.taxId ? 'Company' : 'Individual';
          return `
            <tr>
              <td><strong>${recipient.name}</strong></td>
              <td>${type}</td>
              <td>${recipient.address || 'N/A'}</td>
              <td>
                <div class="action-buttons">
                  <a href="/clients/${id}/view" data-navigo class="btn-small btn-primary">View</a>
                  <a href="/clients/${id}/edit" data-navigo class="btn-small btn-secondary">Edit</a>
                </div>
              </td>
            </tr>
          `;
        }
      )
      .join('');

    const emptyMessage =
      recipientArray.length === 0
        ? `<tr><td colspan="4" style="text-align: center; padding: 2rem; color: var(--text-secondary);">No clients found</td></tr>`
        : '';

    return `
      <div class="page">
        <div class="page-header">
          <h1>Clients</h1>
          <p>Manage and view all clients/recipients</p>
        </div>
        
        <div class="page-content">
          <div class="page-actions">
            <a href="/clients/new" data-navigo class="btn btn-primary">Add Client</a>
          </div>
          
          <table class="data-table">
            <thead>
              <tr>
                <th>Client Name</th>
                <th>Type</th>
                <th>Address</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              ${recipientArray.length > 0 ? recipientRows : emptyMessage}
            </tbody>
          </table>
          
          <p style="margin-top: 1rem; color: var(--text-secondary);">Total: ${recipientArray.length} client(s)</p>
        </div>
      </div>
    `;
  } catch (error) {
    console.error('Error rendering clients page:', error);
    return `
      <div class="page">
        <div class="page-header">
          <h1>Clients</h1>
          <p>Error loading clients</p>
        </div>
        <div class="page-content">
          <p style="color: var(--text-secondary);">Failed to load clients. Please refresh the page.</p>
        </div>
      </div>
    `;
  }
}

/**
 * Client View Page
 */
export function renderClientViewPage(id: string): string {
  try {
    const client = getRecipientById(id);

    if (!client) {
      return `
        <div class="page">
          <div class="page-header">
            <div class="page-header-actions">
              <a href="/clients" data-navigo class="btn btn-secondary">← Back</a>
            </div>
            <h1>Client Not Found</h1>
          </div>
          <div class="page-content">
            <p style="color: var(--text-secondary);">Client ID: ${id} not found.</p>
            <a href="/clients" data-navigo class="btn btn-primary" style="margin-top: 1rem;">Back to Clients</a>
          </div>
        </div>
      `;
    }

    const isCompany = !!client.taxId;

    return `
      <div class="page">
        <div class="page-header">
          <div class="page-header-actions">
            <a href="/clients" data-navigo class="btn btn-secondary">← Back</a>
          </div>
          <h1>${client.name}</h1>
          <p>${isCompany ? 'Company' : 'Individual'} Client</p>
        </div>
        
        <div class="page-content">
          <div class="page-actions">
            <a href="/clients/${id}/edit" data-navigo class="btn btn-primary">Edit</a>
          </div>
          
          <div class="client-details">
            <div class="detail-section">
              <h3>Basic Information</h3>
              <div class="detail-grid">
                <div><strong>Name:</strong> ${client.name}</div>
                <div><strong>ID:</strong> ${client.id}</div>
                ${isCompany ? `<div><strong>Tax ID:</strong> ${client.taxId}</div>` : ''}
              </div>
            </div>

            <div class="detail-section">
              <h3>Contact Information</h3>
              <div class="detail-grid">
                ${client.address ? `<div><strong>Address:</strong> ${client.address}</div>` : ''}
                ${client.manager ? `<div><strong>Manager:</strong> ${client.manager}</div>` : ''}
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
  } catch (error) {
    console.error('Error rendering client view page:', error);
    return `
      <div class="page">
        <div class="page-header">
          <div class="page-header-actions">
            <a href="/clients" data-navigo class="btn btn-secondary">← Back</a>
          </div>
          <h1>Client ${id}</h1>
          <p>Error loading client</p>
        </div>
        <div class="page-content">
          <p style="color: var(--text-secondary);">Failed to load client details. Please refresh the page.</p>
        </div>
      </div>
    `;
  }
}

/**
 * Client Edit Page
 */
export function renderClientEditPage(id: string): string {
  return `
    <div class="page">
      <div class="page-header">
        <div class="page-header-actions">
          <a href="/clients/${id}/view" data-navigo class="btn btn-secondary">← Back</a>
        </div>
        <h1>Edit Client ${id}</h1>
        <p>Edit client information</p>
      </div>
      
      <div class="page-content">
        <form class="form">
          <div class="form-group">
            <label>Client ID</label>
            <input type="text" value="${id}" disabled>
          </div>
          
          <div class="form-actions">
            <button type="submit" class="btn btn-primary">Save Changes</button>
            <a href="/clients/${id}/view" data-navigo class="btn btn-secondary">Cancel</a>
          </div>
        </form>
      </div>
    </div>
  `;
}
