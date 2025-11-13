class Color {
    constructor(red, green, blue) {
        this.red = red;
        this.green = green;
        this.blue = blue;
    }
    
    toString() {
        // Convert RGB values to hex format (00-FF)
        const toHex = (value) => {
            const hex = value.toString(16).toUpperCase();
            return hex.length === 1 ? '0' + hex : hex;
        };
        
        return `#${toHex(this.red)}${toHex(this.green)}${toHex(this.blue)}`;
    }
}

let color = new Color(255, 0, 0);
console.log(color.toString()); // #FF0000

class Figure {
    constructor(x, y) {
        if (new.target === Figure) {
            throw new TypeError("Cannot instantiate abstract class Figure");
        }
        this.x = x;
        this.y = y;
    }
    
    move(dX, dY) {
        this.x += dX;
        this.y += dY;
    }
    
    resetPosition() {
        this.x = 0;
        this.y = 0;
    }
    
    area() {
        throw new Error("area() method must be implemented in subclass");
    }
    
    perimeter() {
        throw new Error("perimeter() method must be implemented in subclass");
    }
}



class ColorfulFigure extends Figure {
    constructor(x, y, color) {
        super(x, y);
        if (new.target === ColorfulFigure) {
            throw new TypeError("Cannot instantiate abstract class ColorfulFigure");
        }
        this.color = color;
    }
}

class Square extends Figure {
    constructor(x, y, width) {
        super(x, y);
        this.width = width;
    }
    
    area() {
        return this.width * this.width;
    }
    
    perimeter() {
        return 4 * this.width;
    }
    
    toString() {
        return `Square({${this.x}, ${this.y}}, width = ${this.width})`;
    }
}

// Example usage:
const square = new Square(10, 35, 10);
console.log(square.toString()); // Square({10, 35}, width = 10)
console.log(`Area: ${square.area()}`); // Area: 100
console.log(`Perimeter: ${square.perimeter()}`); // Perimeter: 40

class Rectangle extends Figure {
    constructor(x, y, width, height) {
        super(x, y);
        this.width = width;
        this.height = height;
    }
    
    area() {
        return this.width * this.height;
    }
    
    perimeter() {
        return 2 * (this.width + this.height);
    }
    
    toString() {
        return `Rectangle({${this.x}, ${this.y}}, size = ${this.width} x ${this.height})`;
    }
}

// Example usage:
const rectangle = new Rectangle(-10, 20, 20, 15);
console.log(rectangle.toString()); // Rectangle({-10, 20}, size = 20 x 15)
console.log(`Area: ${rectangle.area()}`); // Area: 300
console.log(`Perimeter: ${rectangle.perimeter()}`); // Perimeter: 70

class Circle extends Figure {
    constructor(x, y, radius) {
        super(x, y);
        this.radius = radius;
    }
    
    area() {
        return Math.PI * this.radius * this.radius;
    }
    
    perimeter() {
        return 2 * Math.PI * this.radius;
    }
    
    toString() {
        return `Circle({${this.x}, ${this.y}}, radius = ${this.radius})`;
    }
}

// Example usage:
const circle = new Circle(20, -10, 15);
console.log(circle.toString()); // Circle({20, -10}, radius = 15)
console.log(`Area: ${circle.area().toFixed(2)}`); // Area: 706.86
console.log(`Perimeter: ${circle.perimeter().toFixed(2)}`); // Perimeter: 94.25

class Annulus extends Figure {
    constructor(x, y, outterRadius, innerRadius) {
        super(x, y);
        this.outterRadius = outterRadius;
        this.innerRadius = innerRadius;
    }
    
    area() {
        return Math.PI * (this.outterRadius * this.outterRadius - this.innerRadius * this.innerRadius);
    }
    
    perimeter() {
        return 2 * Math.PI * (this.outterRadius + this.innerRadius);
    }
    
    toString() {
        return `Annulus({${this.x}, ${this.y}}, ext. radius = ${this.outterRadius}, int. radius = ${this.innerRadius})`;
    }
}



// Example usage:
const annulus = new Annulus(20, -10, 15, 5);
console.log(annulus.toString()); // Annulus({20, -10}, ext. radius = 15, int. radius = 5)
console.log(`Area: ${annulus.area().toFixed(2)}`); // Area: 628.32
console.log(`Perimeter: ${annulus.perimeter().toFixed(2)}`); // Perimeter: 125.66

class ColorfulSquare extends ColorfulFigure {
    constructor(x, y, width, color) {
        super(x, y, color);
        this.width = width;
    }
    
    area() {
        return this.width * this.width;
    }
    
    perimeter() {
        return 4 * this.width;
    }
    
    toString() {
        return `Square({${this.x}, ${this.y}}, width = ${this.width}, color = ${this.color.toString()})`;
    }
}

class ColorfulRectangle extends ColorfulFigure {
    constructor(x, y, width, height, color) {
        super(x, y, color);
        this.width = width;
        this.height = height;
    }
    
    area() {
        return this.width * this.height;
    }
    
    perimeter() {
        return 2 * (this.width + this.height);
    }
    
    toString() {
        return `Rectangle({${this.x}, ${this.y}}, size = ${this.width} x ${this.height}, color = ${this.color.toString()})`;
    }
}

class ColorfulCircle extends ColorfulFigure {
    constructor(x, y, radius, color) {
        super(x, y, color);
        this.radius = radius;
    }
    
    area() {
        return Math.PI * this.radius * this.radius;
    }
    
    perimeter() {
        return 2 * Math.PI * this.radius;
    }
    
    toString() {
        return `Circle({${this.x}, ${this.y}}, radius = ${this.radius}, color = ${this.color.toString()})`;
    }
}

class ColorfulAnnulus extends ColorfulFigure {
    constructor(x, y, outterRadius, innerRadius, color) {
        super(x, y, color);
        this.outterRadius = outterRadius;
        this.innerRadius = innerRadius;
    }
    
    area() {
        return Math.PI * (this.outterRadius * this.outterRadius - this.innerRadius * this.innerRadius);
    }
    
    perimeter() {
        return 2 * Math.PI * (this.outterRadius + this.innerRadius);
    }
    
    toString() {
        return `Annulus({${this.x}, ${this.y}}, ext. radius = ${this.outterRadius}, int. radius = ${this.innerRadius}, color = ${this.color.toString()})`;
    }
}

// Example usage with colors:
const colorfulSquare = new ColorfulSquare(10, 35, 10, new Color(255, 122, 30));
console.log(colorfulSquare.toString()); // Square({10, 35}, width = 10, color = #FF7A1E)

const colorfulRectangle = new ColorfulRectangle(-10, 20, 20, 15, new Color(127, 170, 232));
console.log(colorfulRectangle.toString()); // Rectangle({-10, 20}, size = 20 x 15, color = #7FAAE8)

const colorfulCircle = new ColorfulCircle(20, -10, 15, new Color(0, 238, 0));
console.log(colorfulCircle.toString()); // Circle({20, -10}, radius = 15, color = #00EE00)

const colorfulAnnulus = new ColorfulAnnulus(20, -10, 15, 5, new Color(238, 51, 51));
console.log(colorfulAnnulus.toString()); // Annulus({20, -10}, ext. radius = 15, int. radius = 5, color = #EE3333)

// ===== Creating and Using Figures =====
console.log("\n===== Creating and Using Various Figures =====\n");

// Create an array of different figures
const figures = [
    new Square(0, 0, 5),
    new Rectangle(5, 5, 8, 4),
    new Circle(10, 10, 7),
    new Annulus(15, 15, 10, 4),
    new ColorfulSquare(20, 0, 6, new Color(255, 0, 0)),
    new ColorfulRectangle(0, 20, 10, 5, new Color(0, 255, 0)),
    new ColorfulCircle(25, 25, 8, new Color(0, 0, 255)),
    new ColorfulAnnulus(30, 30, 12, 6, new Color(255, 255, 0))
];

// Print and calculate for each figure
figures.forEach((figure, index) => {
    console.log(`Figure ${index + 1}: ${figure.toString()}`);
    console.log(`  Area: ${figure.area().toFixed(2)} m²`);
    console.log(`  Perimeter: ${figure.perimeter().toFixed(2)} m`);
    console.log();
});

// Calculate total area and perimeter
let totalArea = 0;
let totalPerimeter = 0;

figures.forEach(figure => {
    totalArea += figure.area();
    totalPerimeter += figure.perimeter();
});

console.log("===== Summary =====");
console.log(`Total number of figures: ${figures.length}`);
console.log(`Total area: ${totalArea.toFixed(2)} m²`);
console.log(`Total perimeter: ${totalPerimeter.toFixed(2)} m`);

// Test movement
console.log("\n===== Testing Movement =====");
const testSquare = new Square(0, 0, 5);
console.log(`Original position: ${testSquare.toString()}`);
testSquare.move(10, 15);
console.log(`After move(10, 15): ${testSquare.toString()}`);
testSquare.resetPosition();
console.log(`After resetPosition(): ${testSquare.toString()}`);
