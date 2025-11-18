console.log("Starting a timer…");
function timeoutCallback() {
console.log("Time's up!");
}
setTimeout(timeoutCallback, 2000);
console.log("Waiting for 2 seconds …");