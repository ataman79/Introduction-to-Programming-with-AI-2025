function areaOfFigure(figure, dimension1, dimension2) {
  switch(figure) {
    case 'square':
      if (dimension1 === undefined || dimension1 <= 0) {
        return 'Invalid figure!';
      }
      const squareArea = dimension1 * dimension1;
      return 'square area = ' + squareArea.toFixed(2);

    case 'rectangle':
      if (dimension1 === undefined || dimension2 === undefined || dimension1 <= 0 || dimension2 <= 0) {
        return 'Invalid figure!';
      }
      const rectArea = dimension1 * dimension2;
      return 'rectangle area = ' + rectArea.toFixed(2);

    case 'circle':
      if (dimension1 === undefined || dimension1 <= 0) {
        return 'Invalid figure!';
      }
      const circleArea = Math.PI * dimension1 * dimension1;
      return 'circle area = ' + circleArea.toFixed(2);

    default:
      return 'Invalid figure!';
  }
}

// Example usage:
console.log(areaOfFigure('square', 5));        // "25.00"
console.log(areaOfFigure('square', 7.5));      // "56.25"
console.log(areaOfFigure('rectangle', 5, 4));  // "20.00"
console.log(areaOfFigure('rectangle', 3.5, 2.5)); // "8.75"
console.log(areaOfFigure('circle', 2));        // "12.57"
console.log(areaOfFigure('circle', 5));        // "78.54"
console.log(areaOfFigure('triangle', 5));      // "invalid input"
console.log(areaOfFigure('square', -5));       // "invalid input"
console.log(areaOfFigure('rectangle', 5));     // "invalid input"
