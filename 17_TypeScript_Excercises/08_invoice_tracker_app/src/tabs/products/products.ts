export function initProducts(): void {
  // Initialize Products tab
  console.log('Products tab initialized');
}

export function showProducts(): void {
  // Show Products tab content
  const content = document.getElementById('products-content');
  if (content) {
    content.style.display = 'block';
  }
}

export function hideProducts(): void {
  // Hide Products tab content
  const content = document.getElementById('products-content');
  if (content) {
    content.style.display = 'none';
  }
}
