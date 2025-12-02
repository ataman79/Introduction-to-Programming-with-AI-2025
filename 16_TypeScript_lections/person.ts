{
    type Person = {
        name: string;
        age: number;
        isDeveloper?: boolean; // Optional property
        readonly id: number; // Cannot be reassigned
    };
    const alice: Person = {
        name: "Alice", age: 28, id: 123
    };
    alice.id = 999; // Error – readonly

    console.log(alice)
}