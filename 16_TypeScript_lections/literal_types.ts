type Direction = "up" | "right" | "down" | "left";
function move(dir: Direction) {
    console.log(dir);
}
move("down"); // OK
//move("west"); // Error



type StatusCode = 200 | 404 | 500;
let code: StatusCode = 200;
code = 404; // OK
//code = 403; // Error