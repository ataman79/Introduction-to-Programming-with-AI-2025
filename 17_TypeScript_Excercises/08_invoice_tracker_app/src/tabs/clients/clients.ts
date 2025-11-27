export function initClients(): void {
  // Initialize Clients tab
  console.log('Clients tab initialized');
}

export function showClients(): void {
  // Show Clients tab content
  const content = document.getElementById('clients-content');
  if (content) {
    content.style.display = 'block';
  }
}

export function hideClients(): void {
  // Hide Clients tab content
  const content = document.getElementById('clients-content');
  if (content) {
    content.style.display = 'none';
  }
}
