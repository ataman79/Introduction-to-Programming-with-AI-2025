function movePoints(pointJSON, ...movesJSON) {
 let point = JSON.parse(pointJSON);
console.log(`Initial point: (${point.x}, ${point.y})`);
point.move = function(dx, dy) { this.x += dx; this.y += dy; };
point.toString = function() { return `(${this.x}, ${this.y})`; };
for (const moveJSON of movesJSON) {
 let move = JSON.parse(moveJSON);
point.move(move.dx, move.dy);
console.log("Moved point: " + point);
}
} 


movePoints(
 '{"x":50, "y":100}',
 '{"dx":20, "dy":30}',
 '{"dx":-10, "dy":20.5}'
)
