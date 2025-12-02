// Example usage
var invoice = {
    id: "INV-001",
    date: new Date("2025-12-02"),
    issuer: {
        name: "Acme Corp",
        id: "COMP-001",
        taxId: "BG123456789",
        address: "123 Business St, Sofia",
        manager: "John Smith",
        iban: "BG80BNBG96611020345678",
    },
    recipient: {
        name: "Tech Solutions Ltd",
        id: "COMP-002",
        taxId: "BG987654321",
        address: "456 Tech Avenue, Plovdiv",
        manager: "Jane Doe",
    },
    items: [
        {
            product: "Software Development",
            quantity: 40,
            unit: "hours",
            price: 100,
            vatRate: 0.2,
            value: 4000,
        },
        {
            product: "Consulting",
            quantity: 10,
            unit: "hours",
            price: 150,
            vatRate: 0.2,
            value: 1500,
        },
    ],
    subtotal: 5500,
    vat: 1100,
    total: 6600,
};
var sampleInvoice = invoice;
console.log(sampleInvoice);
var validatedInvoice = {
    id: "INV-002",
    date: new Date("2025-12-03"),
    issuer: {
        name: "Global Enterprises",
        id: "COMP-003",
        taxId: "BG112233445",
        address: "789 Corporate Blvd, Varna",
        manager: "Alice Johnson",
        iban: "BG80BNBG96611020345679",
    },
    recipient: {
        name: "Innovatech LLC",
        id: "COMP-004",
        taxId: "BG998877665",
        address: "321 Innovation Dr, Burgas",
        manager: "Bob Brown",
    },
    items: [
        {
            product: "IT Support",
            quantity: 20,
            unit: "hours",
            price: 80,
            vatRate: 0.2,
            value: 1600,
        },
        {
            product: "Network Setup",
            quantity: 5,
            unit: "hours",
            price: 200,
            vatRate: 0.2,
            value: 1000,
        },
    ],
    subtotal: 2600,
    vat: 520,
    total: 3120,
};
var validationResult = validateInvoice(validatedInvoice);
function validateInvoice(invoice) {
    var errors = [];
    console.log("Is invoice valid?", validationResult.isValid);
    if (!validationResult.isValid) {
        console.log("Errors:");
        validationResult.errors.forEach(function (err) { return console.log(" -", err); });
    }
}
