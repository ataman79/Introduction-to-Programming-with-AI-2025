{
    var alice = {
        name: "Alice", age: 28, id: 123
    };
    alice.id = 999; // Error – readonly
    console.log(alice);
}
