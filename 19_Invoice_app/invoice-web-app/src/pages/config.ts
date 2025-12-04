/**
 * Configuration Page
 */

export function renderConfigPage(): string {
  return `
    <div class="page">
      <div class="page-header">
        <h1>Configuration</h1>
        <p>Manage application settings</p>
      </div>
      
      <div class="page-content">
        <div class="settings-container">
          <div class="card">
            <h2>General Settings</h2>
            <form class="form">
              <div class="form-group">
                <label for="app-name">Application Name</label>
                <input type="text" id="app-name" value="Invoices App">
              </div>
              
              <div class="form-group">
                <label for="currency">Currency</label>
                <select id="currency">
                  <option>USD</option>
                  <option>EUR</option>
                  <option>GBP</option>
                </select>
              </div>
              
              <div class="form-actions">
                <button type="submit" class="btn btn-primary">Save Settings</button>
              </div>
            </form>
          </div>
          
          <div class="card">
            <h2>Application Info</h2>
            <p><strong>Version:</strong> 1.0.0</p>
            <p><strong>Built with:</strong> TypeScript, Vite, Navigo</p>
            <p style="color: var(--text-secondary); margin-top: 1rem;">
              A modern invoicing application built with TypeScript and Vite
            </p>
          </div>
        </div>
      </div>
    </div>
  `;
}
