function nearestPoint({locX, locY}, ...points) {
    let nearestDistance = Infinity;
    let nearestPoint = null;
    for (const point of points) {
        const distance = Math.sqrt((point.x - locX)**2 + (point.y - locY)**2);
        if (distance < nearestDistance) {
            nearestDistance = distance;
            nearestPoint = point;
        }
    }
    return nearestPoint;
}


console.log(nearestPoint({locX:10, locY:20}, {x:25, y:30}, {x:-5, y:20}, {x:70, y:-10}, {x:0, y:50}));
