function printGroupOperations(groupA, groupB) {
    const setA = new Set(groupA);
    const setB = new Set(groupB);
    const intersection = [...setA].filter(st => setB.has(st));
    console.log("Intersection A & B:", intersection);
    const onlyInA = [...setA].filter(st => !setB.has(st));
    console.log("A minus B:", onlyInA);
    const onlyInB = [...setB].filter(st => !setA.has(st));
    console.log("B minus A:", onlyInB);
    const union = [...new Set([...groupA, ...groupB])];
    console.log("Union A | B:", union);
}


const groupA = ["Alice", "Bob", "Charlie", "David"];
const groupB = ["Bob", "David", "Eve", "Frank"];
printGroupOperations(groupA, groupB);
