import convert from './unit-converter.js';

// Tab switching functionality
const tabButtons = document.querySelectorAll('.tab-btn');
const converterTabs = document.querySelectorAll('.converter-tab');

tabButtons.forEach(button => {
  button.addEventListener('click', () => {
    const tabName = button.getAttribute('data-tab');

    // Remove active class from all buttons and tabs
    tabButtons.forEach(btn => btn.classList.remove('active'));
    converterTabs.forEach(tab => tab.classList.remove('active'));

    // Add active class to clicked button and corresponding tab
    button.classList.add('active');
    document.getElementById(tabName).classList.add('active');
  });
});

// Metric Converter
document.getElementById('metric-btn').addEventListener('click', () => {
  const value = parseFloat(document.getElementById('metric-input').value);
  const fromUnit = document.getElementById('metric-from').value;
  const toUnit = document.getElementById('metric-to').value;
  performConversion(value, fromUnit, toUnit, 'metric-result');
});

// Weight Converter
document.getElementById('weight-btn').addEventListener('click', () => {
  const value = parseFloat(document.getElementById('weight-input').value);
  const fromUnit = document.getElementById('weight-from').value;
  const toUnit = document.getElementById('weight-to').value;
  performConversion(value, fromUnit, toUnit, 'weight-result');
});

// Temperature Converter
document.getElementById('temperature-btn').addEventListener('click', () => {
  const value = parseFloat(document.getElementById('temperature-input').value);
  const fromUnit = document.getElementById('temperature-from').value;
  const toUnit = document.getElementById('temperature-to').value;
  performConversion(value, fromUnit, toUnit, 'temperature-result');
});

// Perform conversion and display result
function performConversion(value, fromUnit, toUnit, resultElementId) {
  const resultElement = document.getElementById(resultElementId);

  try {
    // Validate input
    if (isNaN(value)) {
      throw new Error('Please enter a valid number');
    }

    // Perform conversion
    const result = convert(value, fromUnit, toUnit);

    // Display result with appropriate formatting
    let displayValue = result.toFixed(6).replace(/\.?0+$/, '');
    resultElement.textContent = `${value} ${fromUnit} = ${displayValue} ${toUnit}`;
    resultElement.classList.remove('error');
    resultElement.classList.add('success');
  } catch (error) {
    resultElement.textContent = `Error: ${error.message}`;
    resultElement.classList.remove('success');
    resultElement.classList.add('error');
  }
}

// Allow Enter key to trigger conversion
['metric-input', 'weight-input', 'temperature-input'].forEach(inputId => {
  document.getElementById(inputId).addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      const converter = inputId.split('-')[0];
      document.getElementById(`${converter}-btn`).click();
    }
  });
});

// Real-time conversion on selection change
['metric-from', 'metric-to', 'weight-from', 'weight-to', 'temperature-from', 'temperature-to'].forEach(selectId => {
  document.getElementById(selectId).addEventListener('change', () => {
    const converter = selectId.split('-')[0];
    const inputValue = document.getElementById(`${converter}-input`).value;
    if (inputValue) {
      document.getElementById(`${converter}-btn`).click();
    }
  });
});
