// Combined function to parse figures and print largest by area and perimeter
function printLargestFigures(...figures) {
    // Define classes inside the function
    class Figure {
        constructor(x, y) {
            this.x = x;
            this.y = y;
        }
        calcArea() {
            throw new Error('calcArea() must be implemented by subclass');
        }
        calcPerimeter() {
            throw new Error('calcPerimeter() must be implemented by subclass');
        }
    }
    
    class Rectangle extends Figure {
        constructor(x, y, width, height) {
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
            return `Rectangle (${this.x}, ${this.y}, size = ${this.width} x ${this.height})`;
        }
    }
    
    class Square extends Figure {
        constructor(x, y, side) {
            super(x, y);
            this.side = side;
        }
        calcArea() {
            return this.side * this.side;
        }
        calcPerimeter() {
            return 4 * this.side;
        }
        toString() {
            return `Square(${this.x}, ${this.y}, side = ${this.side})`;
        }
    }
    
    class Circle extends Figure {
        constructor(x, y, radius) {
            super(x, y);
            this.radius = radius;
        }
        calcArea() {
            return Math.PI * this.radius * this.radius;
        }
        calcPerimeter() {
            return 2 * Math.PI * this.radius;
        }
        toString() {
            return `Circle (${this.x}, ${this.y}, radius = ${this.radius})`;
        }
    }
    
    // Handle both direct class instances and string-based input
    let processedFigures = figures.map(f => {
        // If it already has calcArea method, return as is
        if (f && typeof f.calcArea === 'function') {
            return f;
        }
        
        if (typeof f === 'string') {
            const parts = f.trim().split(/\s+/);
            const type = parts[0].toLowerCase();
            
            if (type === 'rectangle') {
                return new Rectangle(parseInt(parts[1]), parseInt(parts[2]), parseInt(parts[3]), parseInt(parts[4]));
            } else if (type === 'square') {
                return new Square(parseInt(parts[1]), parseInt(parts[2]), parseInt(parts[3]));
            } else if (type === 'circle') {
                return new Circle(parseInt(parts[1]), parseInt(parts[2]), parseInt(parts[3]));
            }
        }
        // Check if it's a plain object and convert to proper class instance
        if (typeof f === 'object' && f !== null) {
            if (f.width !== undefined && f.height !== undefined) {
                return new Rectangle(f.x || 0, f.y || 0, f.width, f.height);
            } else if (f.side !== undefined) {
                return new Square(f.x || 0, f.y || 0, f.side);
            } else if (f.radius !== undefined) {
                return new Circle(f.x || 0, f.y || 0, f.radius);
            }
        }
        return f;
    }).filter(f => f !== undefined && f !== null && typeof f.calcArea === 'function');
    
    if (processedFigures.length === 0) return;
    
    let largestArea = processedFigures[0];
    let largestPerimeter = processedFigures[0];
    
    for (let f of processedFigures) {
        if (f.calcArea() > largestArea.calcArea())
            largestArea = f;
        if (f.calcPerimeter() > largestPerimeter.calcPerimeter())
            largestPerimeter = f;
    }
    console.log(`Largest area: ${largestArea.calcArea().toFixed(2)} -> ${largestArea.toString()}`);
    console.log(`Largest perimeter: ${largestPerimeter.calcPerimeter().toFixed(2)} -> ${largestPerimeter.toString()}`);
}

// Test with the provided examples
printLargestFigures(
    new Rectangle(10, 15, 300, 120),
    new Square(-20, -50, 200),
    new Circle(-50, 20, 130)
);
