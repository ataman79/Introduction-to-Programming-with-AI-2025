function printLargestRectangle(...rectangles) {
    let largestArea = 0;
    let largestRect = null;
    for (let rect of rectangles) {
        let area = rect.width * rect.height;
        if (area > largestArea) {
            largestArea = area;
            largestRect = rect;
        }
    }

     console.log(`Largest rectangle: ${largestRect.width} x ${largestRect.height} -> area: ${largestArea}`);
    
}



printLargestRectangle(
    {"width":30, "height":20},
    {"width":5, "height":120},
    {"width":15, "height":40},
    {"width":25, "height":25},
    {"width":35, "height":15}
);


