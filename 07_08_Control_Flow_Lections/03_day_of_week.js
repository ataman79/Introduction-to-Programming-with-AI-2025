function getDayOfWeek(dayNumber) {
    switch (dayNumber) {
        case 1: return "Monday";
        case 2: return "Tuesday";
        case 3: return "Wednesday";
        case 4: return "Thursday";
        case 5: return "Friday";
        case 6: return "Saturday";
        case 7: return "Sunday";
        default: return "Error!";
    }
}

console.log(
 getDayOfWeek(3));
// Wednesday
console.log(
 getDayOfWeek(-1));
// Error!
console.log(
 getDayOfWeek(7));
// Sunday

