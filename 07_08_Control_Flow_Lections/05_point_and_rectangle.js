function pointOnRect(top, left, bottom, right, x, y) {

    // Inside (strict)
    if ((x > left) && (x < right) && (y > top) && (y < bottom)) {
        return "inside";
    }

    // Outside
    if ((x < left) || (x > right) || (y < top) || (y > bottom)) {
        return "outside";
    }

    // Everything else is border
    return "border";
}


// Example usage:
console.log(pointOnRect(1, 1, 4, 4, 2, 2));
console.log(pointOnRect(1, 1, 4, 4, 0, 0));
console.log(pointOnRect(1, 1, 4, 4, 1, 2));
console.log(pointOnRect(1, 1, 4, 4, 4, 4));
console.log(pointOnRect(1, 1, 4, 4, 2, 4));
console.log(pointOnRect(1, 1, 4, 4, 4, 2));
console.log(pointOnRect(1, 1, 4, 4, 1, 1));