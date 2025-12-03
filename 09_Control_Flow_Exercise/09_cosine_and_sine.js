function printDegreesCosineSine(startDegree, endDegree) {
    for (let degree = startDegree; degree <= endDegree; degree += 1) {
        let radians = degree * (Math.PI / 180);
        let cosine = Math.cos(radians).toFixed(4);
        let sine = Math.sin(radians).toFixed(4);
        console.log(`${degree} degrees: cos = ${cosine}, sin = ${sine}`);
    }
}

// Example usage:
printDegreesCosineSine(45, 55);