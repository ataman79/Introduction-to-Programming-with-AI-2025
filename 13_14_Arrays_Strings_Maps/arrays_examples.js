let fruits = ['apple', 'banana', 'cherry'];
for (let i = 0; i < fruits.length; i++)
 console.log(fruits[i]);


let dates = [new Date("2025-11-30"),
new Date("2026-03-17"), new Date("2026-09-15")];
for (let date of dates)
 console.log(date);


fruits.forEach(f => console.log("Fruit:", f));