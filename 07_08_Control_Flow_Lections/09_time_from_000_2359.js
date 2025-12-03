function printClockTime() {
    for (let h = 0; h <= 23; h++) {        // hours
        for (let m = 0; m <= 59; m++) {    // minutes
            console.log(`${h}:${m < 10 ? '0' : ''}${m}`);
        }
    }
}
printClockTime();
    