let fruits = ['apple', 'banana', 'cherry'];
for (let i = 0; i < fruits.length; i++)
 console.log(fruits[i]);


let dates = [new Date("2025-11-30"),
new Date("2026-03-17"), new Date("2026-09-15")];
for (let date of dates)
 console.log(date);


fruits.forEach(f => console.log("Fruit:", f));


let arr = ["one", "two", "three"];
arr.splice(1, 0, "2.5"); // Insert at position 1
console.log(arr); // [ 'one', '2.5', 'two', 'three' ]

//let nums = [100, 200, 300, 400, 500];
//nums.splice(1, 3);
//console.log(nums); // [ 100, 400, 500 ]

//let nums = [100, 200, 300, 400, 500];
//nums.splice(3, 1);
//console.log(nums); // [ 100, 200, 300, 500 ]


//let nums = [100, 200, 300, 400, 500];
//nums.splice(1, 2, 333, 444, 555);
//console.log(nums); // [ 100, 333, 444, 555, 400, 500 ]

let left = [20, 30, 40], right = [60, 70];
let combined = [10, ...left, 50, ...right, 80, 90];
console.log(combined.join('-'));
// 10-20-30-40-50-60-70-80-90


console.log([1, 2, 4, 5, 6, 7, 8, 9]
 .filter(x => x % 2 == 0));
// [ 2, 4, 6, 8 ]

let coords = [{x:5,y:17}, {x:-3,y:18}, {x:7,y:-15},
{x:-2,y:-4}, {x:0,y:6}, {x:12,y:4}, {x:3,y:8}];
let positiveCoords =
 coords.filter(p => p.x >= 0 && p.y >= 0);
console.log(positiveCoords);
// [ { x: 5, y: 17 }, { x: 0, y: 6 }, { x: 12, y: 4 }, { x: 3, y: 8 } ]

const products = [
 { name: 'Laptop', price: 1200 },
 { name: 'Phone', price: 800 },
 { name: 'Printer', price: 150 }
];
let vatRate = 0.20; // 20% VAT tax
let addVAT = p => ({ name: p.name, netPrice: p.price,
 grossPrice: p.price * (1+vatRate) });
let newProducts = products.map(addVAT);
console.log(newProducts);



let users = [
 { id: 1, name: 'Alice' },
 { id: 2, name: 'Bob' },
 { id: 3, name: 'Charlie' }
];
let user2 = users.find(u => u.id == 2);
console.log(user2); // { id: 2, name: 'Bob' }
let user99 = users.find(u => u.id == 99); // undefined
console.log(user99 || "Not found"); // Not found




let students = [
 { name: 'Alice', age: 22 },
 { name: 'Bob', age: 17 },
 { name: 'Charlie', age: 25 }
];
students.sort((a, b) => a.age - b.age);
console.log("Students by age (ascending):");
students.forEach(s => console.log(
 `Student: ${s.name}, age: ${s.age}`));