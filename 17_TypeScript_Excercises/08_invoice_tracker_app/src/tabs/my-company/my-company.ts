export function initMyCompany(): void {
  // Initialize My Company tab
  console.log('My Company tab initialized');
}

export function showMyCompany(): void {
  // Show My Company tab content
  const content = document.getElementById('my-company-content');
  if (content) {
    content.style.display = 'block';
  }
}

export function hideMyCompany(): void {
  // Hide My Company tab content
  const content = document.getElementById('my-company-content');
  if (content) {
    content.style.display = 'none';
  }
}
