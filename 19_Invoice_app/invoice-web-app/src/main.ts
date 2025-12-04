/**
 * Invoice Web App - Main Entry Point
 */

import './style.css';
import { createLayout } from './layout';
import { initRouter } from './router';
import { initializeDataRepo, deleteInvoice } from './data';

/**
 * Global handler for deleting an invoice
 */
(window as any).handleDeleteInvoice = function(invoiceId: string): void {
  if (confirm(`Are you sure you want to delete invoice ${invoiceId}? This action cannot be undone.`)) {
    try {
      deleteInvoice(invoiceId);
      console.log(`✅ Invoice ${invoiceId} deleted successfully`);
      
      // Refresh the current page
      const router = (window as any).__router;
      if (router) {
        router.navigate('/invoices');
      }
      
      alert(`Invoice ${invoiceId} has been deleted.`);
    } catch (error) {
      console.error(`❌ Failed to delete invoice ${invoiceId}:`, error);
      alert(`Failed to delete invoice ${invoiceId}. Please try again.`);
    }
  }
};

/**
 * Initialize the application
 */
async function initializeApp(): Promise<void> {
  const app = document.querySelector<HTMLDivElement>('#app');
  
  if (!app) {
    console.error('App container not found');
    return;
  }

  try {
    console.log('🚀 Starting application initialization...');
    
    // Initialize the global data repository with sample data
    console.log('📦 Initializing data repository...');
    await initializeDataRepo();
    console.log('✅ Data repository initialized');

    // Create the layout (header, nav, footer)
    console.log('🎨 Creating layout...');
    createLayout();
    console.log('✅ Layout created');

    // Initialize the router
    console.log('🛣️  Initializing router...');
    initRouter();
    console.log('✅ Router initialized');

    // Navigate to home page to render initial content
    console.log('📍 Navigating to home page...');
    setTimeout(() => {
      const router = (window as any).__router;
      if (router) {
        router.navigate('/');
      }
    }, 100);

    console.log('✅ Application initialized successfully');
  } catch (error) {
    console.error('❌ Failed to initialize application:', error);
    // Show error message on screen
    const app = document.querySelector<HTMLDivElement>('#app');
    if (app) {
      app.innerHTML = `<div style="padding: 2rem; color: red;"><h1>Error Loading App</h1><p>${error}</p></div>`;
    }
  }
}

// Initialize app when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    initializeApp().catch(err => console.error('Failed to initialize app:', err));
  });
} else {
  initializeApp().catch(err => console.error('Failed to initialize app:', err));
}
