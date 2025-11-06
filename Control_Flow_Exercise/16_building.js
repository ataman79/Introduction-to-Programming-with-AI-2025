function printBuilding(floors, roomsPerFloor) { 
    for (let i = floors; i >= 1; i--) {
        let floor = '';
        for (let j = 0; j < roomsPerFloor; j++) {
            if (i === floors) {
                floor += `L${i}${j}`;
            } else if (i % 2 === 0) {
                floor += `O${i}${j}`;
            } else {
                floor += `A${i}${j}`;
            }
            if (j < roomsPerFloor - 1) {
                floor += ', ';
            }       
        }
        console.log(floor);
    }
}   

printBuilding(3, 7);

//•	Odd floors hold apartments (type A) – e.g., A51, A53, etc.
//•	Even floors hold offices (type O) – e.g., O42, O44, etc.
//•	The last floor holds a restaurant (type L) – e.g., L61, L63, etc.