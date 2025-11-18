const rectangle = {
 x: 150, y: 40,
 width: 20, height: 15,
 move: function(dx, dy) {
 this.x += dx;
 this.y += dy;
 },
 calcArea() { return this.width * this.height; },
 toString() { return `Rect(${this.x}, ${this.y})`; }
}


console.log("" + rectangle); // Invokes toString()
// Rect(150, 40)
rectangle.move(50, -10);
console.log(rectangle.toString()); // Rect(200, 30)
console.log("Area:", rectangle.calcArea()); // Area: 300
for (let i=10; i<=100; i+=10) {
 rectangle.move(i, 0);
 console.log("Rectangle moved to: " + rectangle);
}
