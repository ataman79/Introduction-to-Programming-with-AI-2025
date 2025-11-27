let alice: { name: string; age: number } = {
 name: "Alice",
 age: 30
};
function printUser(
 user: { name: string; age: number }): void {
 console.log(`Name: ${user.name}, age: ${user.age}`);
}
printUser(alice);


