function countOccurrences(arr) {
    const counts = {};
    for (const item of arr) {
        counts[item] = (counts[item] || 0) + 1;
    }
    return counts;

}

const animals = ['dog', 'cat', 'cat', 'dog', 'cat', 'fox'];
console.log(countOccurrences(animals));
// { dog: 2, cat: 3, fox: 1 }
