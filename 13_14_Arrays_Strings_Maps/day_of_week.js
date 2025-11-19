function DayOfWeek(day) {
    if  (day < 1 || day > 7) 
        throw new Error("Invalid day!" + day);
    
    let days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
    return days[day - 1];
}

try {
 console.log(DayOfWeek(3)); // Wednesday
 console.log(DayOfWeek(7)); // Sunday
 console.log(DayOfWeek(0)); // Error: Invalid day: 0
 console.log("This message will not be printed!");
}
catch (err) {
 console.log(err.message);
}