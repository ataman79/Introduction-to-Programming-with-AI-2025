interface SVGObject {
    x: number;
    y: number;
    drawAsSVG(): string;
}

class Circle implements SVGObject {
    public x: number;
    public y: number;
    public radius: number;
    public color: string;
    
    constructor(x: number, y: number, radius: number, color: string) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.color = color;
    }
    
    drawAsSVG(): string {
        return `<circle cx="${this.x}" cy="${this.y}" r="${this.radius}" fill="${this.color}" />`;
    }
}

class Rectangle implements SVGObject {
    public x: number;
    public y: number;
    public width: number;
    public height: number;
    public color: string;
    
    constructor(x: number, y: number, width: number, height: number, color: string) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.color = color;
    }
    
    drawAsSVG(): string {
        return `<rect x="${this.x}" y="${this.y}" width="${this.width}" height="${this.height}" fill="${this.color}" />`;
    }
}

class Line implements SVGObject {
    public x: number;
    public y: number;
    public x2: number;
    public y2: number;
    public color: string;
    
    constructor(x: number, y: number, x2: number, y2: number, color: string) {
        this.x = x;
        this.y = y;
        this.x2 = x2;
        this.y2 = y2;
        this.color = color;
    }
    
    drawAsSVG(): string {
        return `<line x1="${this.x}" y1="${this.y}" x2="${this.x2}" y2="${this.y2}" stroke="${this.color}" stroke-width="2" />`;
    }
}

class SVGDrawing {
    private objects: SVGObject[] = [];
    
    addObject(obj: SVGObject): void {
        this.objects.push(obj);
    }
    
    renderAsSVG(): string {
        const svgContent = this.objects.map(obj => obj.drawAsSVG()).join('\n');
        return `<svg xmlns="http://www.w3.org/2000/svg" width="400" height="400">\n${svgContent}\n</svg>`;
    }
}



let tableSVG: SVGDrawing = new SVGDrawing();
tableSVG.addObject(new Circle(50, 50, 40, 'red'));
tableSVG.addObject(new Rectangle(120, 20, 80, 60, 'blue'));
tableSVG.addObject(new Line(220, 20, 300, 80, 'green'));
console.log(tableSVG.renderAsSVG());


let carSVG: SVGDrawing = new SVGDrawing();

// Main car body
carSVG.addObject(new Rectangle(10, 120, 200, 80, 'red'));

// Top cabin - left part
carSVG.addObject(new Rectangle(30, 80, 60, 40, 'lightblue'));

// Top cabin - right part
carSVG.addObject(new Rectangle(160, 80, 60, 40, 'lightblue'));

// Front wheels
carSVG.addObject(new Circle(60, 200, 15, 'black'));

// Back wheel
carSVG.addObject(new Circle(210, 200, 15, 'black'));

console.log(carSVG.renderAsSVG());
