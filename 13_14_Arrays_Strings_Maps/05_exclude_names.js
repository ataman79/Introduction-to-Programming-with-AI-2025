function excludeNames(names, excludeList) {
 return names.filter(name => !excludeList.includes(name));
}


let names = ["Alice", "Bob", "Charlie", "David", "Eve"];
let ex = ["Bob", "Eve"];
let filteredNames = excludeNames(names, ex);
console.log(filteredNames); // [ 'Alice', 'Charlie', 'David' ]