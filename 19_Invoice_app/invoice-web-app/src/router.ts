/**
 * Router Configuration and Initialization
 */

import Navigo from 'navigo';
import { renderPage } from './layout';
import { renderHomePage } from './pages/home';
import {
  renderInvoicesPage,
  renderInvoiceViewPage,
  renderInvoiceEditPage,
  renderInvoicePdfPage
} from './pages/invoices';
import {
  renderClientsPage,
  renderClientViewPage,
  renderClientEditPage
} from './pages/clients';
import { renderConfigPage } from './pages/config';

let router: Navigo;

/**
 * Initialize the router with all routes
 */
export function initRouter(): Navigo {
  router = new Navigo('/', { hash: false });

  // Home route
  router.on('/', () => {
    renderPage(renderHomePage());
  });

  // Invoices routes
  router.on('/invoices', () => {
    renderPage(renderInvoicesPage());
  });

  router.on('/invoices/new', () => {
    renderPage(renderInvoiceEditPage('new'));
  });

  router.on('/invoices/:id/view', (match) => {
    if (match && match.data && match.data.id) {
      renderPage(renderInvoiceViewPage(match.data.id));
    }
  });

  router.on('/invoices/:id/edit', (match) => {
    if (match && match.data && match.data.id) {
      renderPage(renderInvoiceEditPage(match.data.id));
    }
  });

  router.on('/invoices/:id/pdf', (match) => {
    if (match && match.data && match.data.id) {
      renderPage(renderInvoicePdfPage(match.data.id));
    }
  });

  // Clients routes
  router.on('/clients', () => {
    renderPage(renderClientsPage());
  });

  router.on('/clients/new', () => {
    renderPage(renderClientEditPage('new'));
  });

  router.on('/clients/:id/view', (match) => {
    if (match && match.data && match.data.id) {
      renderPage(renderClientViewPage(match.data.id));
    }
  });

  router.on('/clients/:id/edit', (match) => {
    if (match && match.data && match.data.id) {
      renderPage(renderClientEditPage(match.data.id));
    }
  });

  // Config route
  router.on('/config', () => {
    renderPage(renderConfigPage());
  });

  // 404 - redirect to home
  router.notFound(() => {
    router.navigate('/');
  });

  // Start the router
  router.resolve();

  // Store router in window for access from main.ts
  (window as any).__router = router;

  return router;
}

/**
 * Get the current router instance
 */
export function getRouter(): Navigo {
  if (!router) {
    throw new Error('Router not initialized. Call initRouter() first.');
  }
  return router;
}
