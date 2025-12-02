var Queue = /** @class */ (function () {
    function Queue() {
        this.items = [];
    }
    Queue.prototype.enqueue = function (item) {
        this.items.push(item);
    };
    Queue.prototype.dequeue = function () {
        return this.items.shift();
    };
    return Queue;
}());
var q = new Queue();
q.enqueue("apple");
q.enqueue("banana");
console.log(q.dequeue());
// apple
console.log(q.dequeue());
// banana
q.enqueue(100);
console.log(q.dequeue());
// 100
