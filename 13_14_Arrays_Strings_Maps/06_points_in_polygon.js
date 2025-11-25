let trees = [
 {lat:42.67079,lng:23.32921}, {lat:42.67075,lng:23.32964},
 {lat:42.67051,lng:23.33082}, {lat:42.67028,lng:23.32912},
 {lat:42.67026,lng:23.33059}, {lat:42.67052,lng:23.33062}];
let schoolyard = [
 {lat:42.67088,lng:23.32930}, {lat:42.67077,lng:23.33072},
 {lat:42.67045,lng:23.33067}, {lat:42.67045,lng:23.33059},
 {lat:42.67008,lng:23.33054}, {lat:42.67016,lng:23.32931},
 {lat:42.67021,lng:23.32931}, {lat:42.67022,lng:23.32908},
 {lat:42.67063,lng:23.32913}, {lat:42.67062,lng:23.32926}];
console.log("Trees inside the schoolyard:");
findPointsInPolygon(trees, schoolyard, p => console.log(p));

function findPointsInPolygon(trees, schoolyard, pointInsideCallback) {
 trees.forEach(tree => {
 let intersections = 0;
 
 for (let i = 0; i < schoolyard.length; i++) {
 const v1 = schoolyard[i];
 const v2 = schoolyard[(i + 1) % schoolyard.length];
 
 if ((v1.lat > tree.lat) !== (v2.lat > tree.lat) &&
 tree.lng < (v2.lng - v1.lng) * (tree.lat - v1.lat) / (v2.lat - v1.lat) + v1.lng) {
 intersections++;
 }
 }
 
 if (intersections % 2 === 1) {
 pointInsideCallback(tree);
 }
 });
}
