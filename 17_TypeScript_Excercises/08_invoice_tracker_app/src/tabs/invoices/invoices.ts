export function initInvoices(): void {
  // Initialize Invoices tab
  console.log('Invoices tab initialized');
}

export function showInvoices(): void {
  // Show Invoices tab content
  const content = document.getElementById('invoices-content');
  if (content) {
    content.style.display = 'block';
  }
}

export function hideInvoices(): void {
  // Hide Invoices tab content
  const content = document.getElementById('invoices-content');
  if (content) {
    content.style.display = 'none';
  }
}
