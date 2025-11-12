function processExpenses(...commands) {
    let balance = 0;
    for (let command of commands) {
        const [type, amount] = command.split(": ");
        const value = parseFloat(amount);
        if (type === "Income") {
            balance += value;
        } else if (type === "Expense") {
            balance -= value;
        }
    }
    return balance;
}

console.log(processExpenses(
"Income: 100", "Expense: 50", "Income: 200",
"Expense: 30", "Expense: 20"));
// 200

console.log(processExpenses(
"Income: 50", "Income: 70", "Expense: 30",
"Income: 100", "Expense: 40", "Income: 50"));
// 200