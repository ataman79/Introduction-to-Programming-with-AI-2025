# Invoices-App Monorepo

A monorepo project for managing invoices with the following components:

## Project Structure

```
Invoices-App/
├── invoice-repo/              # Library with invoice data types and logic
├── invoice-console-app/       # Console application for managing invoices
├── invoice-web-app/           # Web application for managing invoices
└── package.json               # Root workspace configuration
```

## Workspaces

### invoice-repo
A library package containing invoice data types and business logic for managing invoices.

### invoice-console-app
A simple console application that demonstrates how to create and edit invoices using the invoice-repo library.

### invoice-web-app
A web application for managing invoices with a user interface.

## Getting Started

1. Install dependencies for all workspaces:
   ```bash
   npm install
   ```

2. Build all packages:
   ```bash
   npm run build
   ```

## Development

Each sub-project can be developed independently while sharing common dependencies and code through the monorepo structure.
