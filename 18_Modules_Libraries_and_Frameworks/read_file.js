import fs from "fs/promises";

// This starts async file read as a background operation
// The returned promise represents its eventual result or error
let fileReadPromise = fs.readFile("data.txt", "utf8");
fileReadPromise
    .then(data => 
        console.log(data))
    .catch(err => console.error(err));
    