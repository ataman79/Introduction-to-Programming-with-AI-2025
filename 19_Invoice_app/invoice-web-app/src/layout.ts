/**
 * App Layout
 * Main layout with header, navigation, content area, and footer
 */

export function createLayout(): void {
  const app = document.querySelector<HTMLDivElement>('#app');
  
  if (!app) {
    console.error('App container not found');
    return;
  }

  app.innerHTML = `
    <div class="app-layout">
      <header class="app-header">
        <div class="header-container">
          <div class="logo">
            <h1>📋 Invoice Manager</h1>
          </div>
          <nav class="main-nav">
            <ul>
              <li><a href="/" data-navigo>Home</a></li>
              <li><a href="/invoices" data-navigo>Invoices</a></li>
              <li><a href="/clients" data-navigo>Clients</a></li>
              <li><a href="/config" data-navigo>Config</a></li>
            </ul>
          </nav>
        </div>
      </header>

      <main class="app-main">
        <div class="page-container" id="page-content">
          <!-- Page content will be rendered here -->
        </div>
      </main>

      <footer class="app-footer">
        <p>&copy; 2025 Invoice Management System. All rights reserved.</p>
      </footer>
    </div>
  `;
}

/**
 * Get the page content container
 */
export function getPageContainer(): HTMLElement {
  const container = document.getElementById('page-content');
  if (!container) {
    throw new Error('Page container not found');
  }
  return container;
}

/**
 * Render a page to the content container
 */
export function renderPage(content: string): void {
  const container = getPageContainer();
  container.innerHTML = content;
}
