class Queue<T> {
 private items: T[] = [];
 enqueue(item: T) {
 this.items.push(item);
 }
 dequeue(): T | undefined {
 return this.items.shift();
 }
}


const q = new Queue<string>();
q.enqueue("apple");
q.enqueue("banana");
console.log(q.dequeue());
// apple
console.log(q.dequeue());
// banana

q.enqueue("100");
console.log(q.dequeue());
// 100

const q2 = new Queue<number>();
q2.enqueue(42);
q2.enqueue(7);
console.log(q2.dequeue());
// 42
console.log(q2.dequeue());
// 7

const q3 = new Queue<any>();
q3.enqueue(123);
q3.enqueue("hello");
console.log(q3.dequeue());  
// 123
console.log(q3.dequeue());  
// hello