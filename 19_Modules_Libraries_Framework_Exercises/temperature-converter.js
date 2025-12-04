// Temperature Converter
// Converts between Celsius, Fahrenheit, and Kelvin

const SUPPORTED_UNITS = ['cel', 'fah', 'kel'];

/**
 * Returns a copy of supported units array
 * @returns {string[]} Array of supported units
 */
function unitsSupported() {
  return [...SUPPORTED_UNITS];
}

/**
 * Converts a temperature value from one unit to another
 * @param {number} value - The temperature value to convert
 * @param {string} fromUnit - The source unit (cel, fah, kel)
 * @param {string} toUnit - The target unit (cel, fah, kel)
 * @returns {number} The converted temperature value
 * @throws {Error} If either unit is not supported
 */
function convertUnits(value, fromUnit, toUnit) {
  if (!SUPPORTED_UNITS.includes(fromUnit)) {
    throw new Error(`Unit '${fromUnit}' is not supported. Supported units: ${SUPPORTED_UNITS.join(', ')}`);
  }
  if (!SUPPORTED_UNITS.includes(toUnit)) {
    throw new Error(`Unit '${toUnit}' is not supported. Supported units: ${SUPPORTED_UNITS.join(', ')}`);
  }

  // Convert from source unit to Celsius first
  let celsius;
  if (fromUnit === 'cel') {
    celsius = value;
  } else if (fromUnit === 'fah') {
    celsius = (value - 32) * 5 / 9;
  } else if (fromUnit === 'kel') {
    celsius = value - 273.15;
  }

  // Convert from Celsius to target unit
  let result;
  if (toUnit === 'cel') {
    result = celsius;
  } else if (toUnit === 'fah') {
    result = celsius * 9 / 5 + 32;
  } else if (toUnit === 'kel') {
    result = celsius + 273.15;
  }

  return result;
}

export { unitsSupported, convertUnits as default };