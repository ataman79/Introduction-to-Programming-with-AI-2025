function scanRange(start, end,
onStart, onNumber, onEnd) {
 onStart(); // Invoke a callback
 for (let i = start; i <= end; i++) {
onNumber(i); // Invoke a callback
 }
onEnd(); // Invoke a callback
}

scanRange(1, 3,
 () => console.log("Starting scan..."),
 (num) => console.log("Found number: " + num),
 () => console.log("Scan complete.")
);
// Output:
// Starting scan...
// Found number: 1
// Found number: 2
// Found number: 3
// Scan complete.   