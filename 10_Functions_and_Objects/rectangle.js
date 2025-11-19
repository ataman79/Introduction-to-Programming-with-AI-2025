class Rectangle {
  constructor(width = 0, height = 0) {
    this.width = width;
    this.height = height;
  }

  calculateArea() {
    return this.width * this.height;
  }

  calculatePerimeter() {
    return 2 * (this.width + this.height);
  }
}

let r1 = new Rectangle(5, 10);
console.log(r1);
console.log("Area:", r1.calculateArea());
console.log("Perimeter:", r1.calculatePerimeter()); 

let r2 = new Rectangle(100, 120);
console.log(r2);

let emptyReactangle = new Rectangle(undefined, 300);
console.log(emptyReactangle);




let d = new Date();
console.log(d);