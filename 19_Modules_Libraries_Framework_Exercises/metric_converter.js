// Metric Distance Converter
// Converts between mm, cm, m, km, inch, foot, yard, mile

const SUPPORTED_UNITS = ['mm', 'cm', 'm', 'km', 'inch', 'foot', 'yard', 'mile'];

// Conversion factors to meters
const CONVERSION_TO_METERS = {
  mm: 0.001,
  cm: 0.01,
  m: 1,
  km: 1000,
  inch: 0.0254,
  foot: 0.3048,
  yard: 0.9144,
  mile: 1609.34
};

/**
 * Returns a copy of supported units array
 * @returns {string[]} Array of supported units
 */
function unitsSupported() {
  return [...SUPPORTED_UNITS];
}

/**
 * Converts a value from one unit to another
 * @param {number} value - The value to convert
 * @param {string} fromUnit - The source unit
 * @param {string} toUnit - The target unit
 * @returns {number} The converted value
 * @throws {Error} If either unit is not supported
 */
function convertUnits(value, fromUnit, toUnit) {
  if (!SUPPORTED_UNITS.includes(fromUnit)) {
    throw new Error(`Unit '${fromUnit}' is not supported. Supported units: ${SUPPORTED_UNITS.join(', ')}`);
  }
  if (!SUPPORTED_UNITS.includes(toUnit)) {
    throw new Error(`Unit '${toUnit}' is not supported. Supported units: ${SUPPORTED_UNITS.join(', ')}`);
  }

  // Convert to meters, then to target unit
  const valueInMeters = value * CONVERSION_TO_METERS[fromUnit];
  const result = valueInMeters / CONVERSION_TO_METERS[toUnit];
  
  return result;
}

export { unitsSupported, convertUnits as default };