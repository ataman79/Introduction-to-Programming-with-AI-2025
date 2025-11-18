const user = {
 name: "George",
 address: { town: "Plovdiv", country: "BG" },
};
console.log("Type if user",  typeof (user));

const userJSON = JSON.stringify(user);
console.log(userJSON); 

console.log("Type if userJSON",  typeof userJSON);
const colorJSON = '{"red":75, "green":89, "blue":43}';
let c = JSON.parse(colorJSON);
console.log(`RGB(${c.red}, ${c.green}, ${c.blue})`);