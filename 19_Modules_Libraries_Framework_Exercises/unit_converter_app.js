import convertUnits from "./unit-converter.js";
import { unitsSupported } from "./unit-converter.js";

console.log("Supported Units:", unitsSupported());

console.log("10 km to miles:", convertUnits(10, 'km', 'mile').toFixed(2));
console.log("100 Fahrenheit to Celsius:", convertUnits(100, 'fah', 'cel').toFixed(2));