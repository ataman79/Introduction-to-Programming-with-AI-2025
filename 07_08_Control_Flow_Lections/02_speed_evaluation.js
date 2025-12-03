function checkSpeed(speed) {
    if (speed >= 100) {
        console.log("fast");
    } else if (speed >= 40) {
        console.log("average");
    } else if (speed > 0) {
        console.log("slow");
    } else {
        console.log("invalid");
    }
}


console.log(checkSpeed(120)); // fast
console.log(checkSpeed(99)); // average
console.log(checkSpeed(5)); // slow
console.log(checkSpeed(-1)); // invalid