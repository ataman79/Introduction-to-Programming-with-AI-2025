console.log("Start…");
function waitSync(durationMs) {
    const end = Date.now() + durationMs;
    do { } while (Date.now() < end); // Highly inefficient!
    console.log("Wait finished.");
}
waitSync(2000); // Blocks for 2 seconds
console.log("End.");