import XLSX from 'xlsx';
import puppeteer from 'puppeteer';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Read the HTML template
function readTemplate() {
    const templatePath = path.join(__dirname, 'invitation.html');
    return fs.readFileSync(templatePath, 'utf-8');
}

// Personalize the template with guest data
function personalizeTemplate(template, personName, company, email) {
    let html = template.replace('{{PERSON_NAME}}', personName);
    return html;
}

// Read guests from Excel file
function readGuestsFromExcel(filePath) {
    const workbook = XLSX.readFile(filePath);
    const worksheet = workbook.Sheets[workbook.SheetNames[0]];
    const guests = XLSX.utils.sheet_to_json(worksheet);
    return guests;
}

// Generate PDF from HTML
async function generatePDF(htmlContent, outputPath) {
    const browser = await puppeteer.launch({
        headless: 'new',
        args: ['--no-sandbox', '--disable-setuid-sandbox']
    });

    try {
        const page = await browser.newPage();
        await page.setContent(htmlContent, { waitUntil: 'networkidle0' });

        // Set paper size to A4 for better printing
        await page.pdf({
            path: outputPath,
            format: 'A4',
            margin: {
                top: '0.5cm',
                bottom: '0.5cm',
                left: '0.5cm',
                right: '0.5cm'
            },
            scale: 1
        });

        console.log(`✓ PDF generated: ${outputPath}`);
    } finally {
        await browser.close();
    }
}

// Main function
async function generateInvitations() {
    console.log('Starting invitation generation...\n');

    // Create output directory if it doesn't exist
    const outputDir = path.join(__dirname, 'invitations');
    if (!fs.existsSync(outputDir)) {
        fs.mkdirSync(outputDir, { recursive: true });
    }

    try {
        // Read Excel file
        const excelPath = path.join(__dirname, 'guests.xlsx');
        console.log(`📖 Reading guests from: ${excelPath}`);
        const guests = readGuestsFromExcel(excelPath);

        if (guests.length === 0) {
            console.error('❌ No guests found in Excel file!');
            return;
        }

        console.log(`📋 Found ${guests.length} guests\n`);

        // Read template
        const template = readTemplate();

        // Generate PDF for each guest
        for (let i = 0; i < guests.length; i++) {
            const guest = guests[i];
            const { Person, Company, Email } = guest;

            console.log(`[${i + 1}/${guests.length}] Generating invitation for ${Person}...`);

            // Personalize template
            const personalizedHTML = personalizeTemplate(template, Person, Company, Email);

            // Generate PDF
            const fileName = `invitation_${Person.replace(/\s+/g, '_')}.pdf`;
            const outputPath = path.join(outputDir, fileName);

            await generatePDF(personalizedHTML, outputPath);
        }

        console.log(`\n✨ All invitations generated successfully in "${outputDir}" folder!`);
    } catch (error) {
        console.error('❌ Error generating invitations:', error.message);
        process.exit(1);
    }
}

// Run the app
generateInvitations();
