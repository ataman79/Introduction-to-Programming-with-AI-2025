class Figure {
    constructor(x = 0, y = 0) {
        this.x = x;
        this.y = y;
    }

    move(dx, dy) {
        this.x += dx;
        this.y += dy;
    }

    calcArea() {
        throw new Error("Can't call abstract method");
    }
    calcPerimeter() {
        throw new Error("Can't call abstract method");
    }
}

class Rectangle extends Figure {
    constructor(x = 0, y = 0, width = 0, height = 0) {
        super(x, y);
        this.width = width;
        this.height = height;
    }
    calcArea() {
        return this.width * this.height;
    }

    calcPerimeter() {
        return 2 * (this.width + this.height);
    }

    toString() {
        return `Rectangle(${this.x}, ${this.y}, size
= ${this.width} x ${this.height})`;
    }
}

class Square extends Figure {
    constructor(x = 0, y = 0, width = 0) {
        super(x, y);
        this.width = width;
    }
    calcArea() {
        return this.width * this.width;
    }

    calcPerimeter() {
        return 4 * this.width;
    }

    toString() {
        return `Square(${this.x}, ${this.y},
width = ${this.width})`;
    }
}

class Circle extends Figure {
    constructor(x = 0, y = 0, radius = 0) {
        super(x, y);
        this.radius = radius;
    }
    calcArea() {
        return Math.PI * this.radius ** 2;
    }

    calcPerimeter() {
        return 2 * Math.PI * this.radius;
    }

    toString() {
        return `Circle (${this.x}, ${this.y},
radius = ${this.radius})`;
    }
}

class Triangle extends Figure {
    constructor(x = 0, y = 0, a = 0, b = 0, c = 0) {
        super(x, y);
        this.a = a;
        this.b = b;
        this.c = c;
    }
    calcArea() {
        const s = (this.a + this.b + this.c) / 2;
        return Math.sqrt(s * (s - this.a) * (s - this.b) * (s - this.c));
    }
    calcPerimeter() {
        return this.a + this.b + this.c;
    }

}

let r = new Rectangle(10, -5, 10, 5);
r.move(10, -10);
r.width = 20;
r.height = 10;
console.log(r);
console.log(r.toString(), "area=" + r.calcArea().toFixed(2),
    "perimeter=" + r.calcPerimeter().toFixed(2));
let s = new Square(150, 30, 10);
s.move(-20, 30);
console.log(s.toString(), "area=" + s.calcArea().toFixed(2), "perimeter=" + s.calcPerimeter().toFixed(2));
let c = new Circle(120, 80, 3);
c.move(0, -5);
console.log(c.toString(), "area=" + c.calcArea().toFixed(2), "perimeter=" + c.calcPerimeter().toFixed(2));

let t = new Triangle(0, 0, 3, 4, 5);
t.move(10, 10);
console.log(t.toString(), "area=" + t.calcArea().toFixed(2), "perimeter=" + t.calcPerimeter().toFixed(2));