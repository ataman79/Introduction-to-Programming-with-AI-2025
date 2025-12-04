// Unit Converter
// Combines metric, temperature, and weight converters

import metricConverter from './metric_converter.js';
import { unitsSupported as metricUnits } from './metric_converter.js';
import temperatureConverter from './temperature-converter.js';
import { unitsSupported as temperatureUnits } from './temperature-converter.js';
import weightConverter from './weight-converter.js';
import { unitsSupported as weightUnits } from './weight-converter.js';

// Map units to their respective converter
const UNIT_TO_CONVERTER = {
  // Metric units
  mm: metricConverter,
  cm: metricConverter,
  m: metricConverter,
  km: metricConverter,
  inch: metricConverter,
  foot: metricConverter,
  yard: metricConverter,
  mile: metricConverter,
  // Temperature units
  cel: temperatureConverter,
  fah: temperatureConverter,
  kel: temperatureConverter,
  // Weight units
  mg: weightConverter,
  g: weightConverter,
  kg: weightConverter,
  t: weightConverter,
  lb: weightConverter,
  oz: weightConverter
};

/**
 * Returns a copy of all supported units from all converters combined
 * @returns {string[]} Array of all supported units
 */
function unitsSupported() {
  return [
    ...metricUnits(),
    ...temperatureUnits(),
    ...weightUnits()
  ];
}

/**
 * Converts a value from one unit to another using the appropriate converter
 * @param {number} value - The value to convert
 * @param {string} fromUnit - The source unit
 * @param {string} toUnit - The target unit
 * @returns {number} The converted value
 * @throws {Error} If either unit is not supported or if units are from different converter types
 */
function convertUnits(value, fromUnit, toUnit) {
  if (!UNIT_TO_CONVERTER[fromUnit]) {
    throw new Error(`Unit '${fromUnit}' is not supported. Supported units: ${unitsSupported().join(', ')}`);
  }
  if (!UNIT_TO_CONVERTER[toUnit]) {
    throw new Error(`Unit '${toUnit}' is not supported. Supported units: ${unitsSupported().join(', ')}`);
  }

  // Check if both units use the same converter
  const fromConverter = UNIT_TO_CONVERTER[fromUnit];
  const toConverter = UNIT_TO_CONVERTER[toUnit];

  if (fromConverter !== toConverter) {
    throw new Error(`Cannot convert between '${fromUnit}' and '${toUnit}' - they are different unit types`);
  }

  // Use the appropriate converter
  return fromConverter(value, fromUnit, toUnit);
}

export { unitsSupported, convertUnits as default };
