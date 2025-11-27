import './style.css'

// Import tab modules
import { initMyCompany, showMyCompany, hideMyCompany } from './tabs/my-company/my-company'
import { initClients, showClients, hideClients } from './tabs/clients/clients'
import { initProducts, showProducts, hideProducts } from './tabs/products/products'
import { initInvoices, showInvoices, hideInvoices } from './tabs/invoices/invoices'
import { initTracker, showTracker, hideTracker } from './tabs/tracker/tracker'

// Import tab styles
import './tabs/my-company/my-company.css'
import './tabs/clients/clients.css'
import './tabs/products/products.css'
import './tabs/invoices/invoices.css'
import './tabs/tracker/tracker.css'

// Import tab HTML and insert into DOM
import myCompanyHtml from './tabs/my-company/my-company.html?raw'
import clientsHtml from './tabs/clients/clients.html?raw'
import productsHtml from './tabs/products/products.html?raw'
import invoicesHtml from './tabs/invoices/invoices.html?raw'
import trackerHtml from './tabs/tracker/tracker.html?raw'

interface TabConfig {
  name: string
  id: string
  init: () => void
  show: () => void
  hide: () => void
  html: string
}

const tabs: TabConfig[] = [
  { name: 'My Company', id: 'my-company', init: initMyCompany, show: showMyCompany, hide: hideMyCompany, html: myCompanyHtml },
  { name: 'Clients', id: 'clients', init: initClients, show: showClients, hide: hideClients, html: clientsHtml },
  { name: 'Products', id: 'products', init: initProducts, show: showProducts, hide: hideProducts, html: productsHtml },
  { name: 'Invoices', id: 'invoices', init: initInvoices, show: showInvoices, hide: hideInvoices, html: invoicesHtml },
  { name: 'Tracker', id: 'tracker', init: initTracker, show: showTracker, hide: hideTracker, html: trackerHtml },
]

let currentTab: string = 'my-company'

function switchTab(tabId: string): void {
  const newTab = tabs.find(tab => tab.id === tabId)
  if (!newTab) return

  // Hide current tab
  const currentTabConfig = tabs.find(tab => tab.id === currentTab)
  if (currentTabConfig) {
    currentTabConfig.hide()
  }

  // Show new tab
  newTab.show()
  currentTab = tabId

  // Update active button
  document.querySelectorAll('.tab-button').forEach(button => {
    button.classList.toggle('active', button.getAttribute('data-tab') === tabId)
  })
}

function initializeTabs(): void {
  const tabsContent = document.querySelector('.tabs-content')
  if (!tabsContent) return

  // Insert HTML for all tabs
  tabs.forEach(tab => {
    tabsContent.innerHTML += tab.html
    tab.init()
  })

  // Setup tab button event listeners
  document.querySelectorAll('.tab-button').forEach(button => {
    button.addEventListener('click', () => {
      const tabId = button.getAttribute('data-tab')
      if (tabId) {
        switchTab(tabId)
      }
    })
  })

  // Show the first tab by default
  switchTab('my-company')
}

document.addEventListener('DOMContentLoaded', initializeTabs)

