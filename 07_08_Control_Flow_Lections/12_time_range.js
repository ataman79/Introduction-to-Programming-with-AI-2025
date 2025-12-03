function timeRange(startHour, startMins, endHour, endMins) {
    if (startHour > endHour) endHour += 24;
    for (let h = startHour; h <= endHour; h++) {
        let currentStartMins = startMins;
        if (h > startHour) currentStartMins = 0;
        let currentEndMins = endMins;
        if (h < endHour) currentEndMins = 59;
        for (let m = currentStartMins; m <= currentEndMins; m++) {
            console.log(`${h % 24}:${m < 10 ? '0' : ''}${m}`);
        }
    }
}

// Example usage:
timeRange(22, 30, 1, 15);