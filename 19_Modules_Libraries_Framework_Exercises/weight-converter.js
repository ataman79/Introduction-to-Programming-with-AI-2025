// Weight Converter
// Converts between mg, g, kg, t, lb, oz

const SUPPORTED_UNITS = ['mg', 'g', 'kg', 't', 'lb', 'oz'];

// Conversion factors to grams
const CONVERSION_TO_GRAMS = {
  mg: 0.001,
  g: 1,
  kg: 1000,
  t: 1000000,
  lb: 453.592,
  oz: 28.3495
};

/**
 * Returns a copy of supported units array
 * @returns {string[]} Array of supported units
 */
function unitsSupported() {
  return [...SUPPORTED_UNITS];
}

/**
 * Converts a weight value from one unit to another
 * @param {number} value - The weight value to convert
 * @param {string} fromUnit - The source unit
 * @param {string} toUnit - The target unit
 * @returns {number} The converted weight value
 * @throws {Error} If either unit is not supported
 */
function convertUnits(value, fromUnit, toUnit) {
  if (!SUPPORTED_UNITS.includes(fromUnit)) {
    throw new Error(`Unit '${fromUnit}' is not supported. Supported units: ${SUPPORTED_UNITS.join(', ')}`);
  }
  if (!SUPPORTED_UNITS.includes(toUnit)) {
    throw new Error(`Unit '${toUnit}' is not supported. Supported units: ${SUPPORTED_UNITS.join(', ')}`);
  }

  // Convert to grams, then to target unit
  const valueInGrams = value * CONVERSION_TO_GRAMS[fromUnit];
  const result = valueInGrams / CONVERSION_TO_GRAMS[toUnit];
  
  return result;
}

export { unitsSupported, convertUnits as default };