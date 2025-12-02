interface Rectangle {
  x1: number;
  y1: number;
  x2: number;
  y2: number;
  area?: number;
}

function sortRectanglesByArea(rectangles: Rectangle[]): Rectangle[] {
  const withArea = rectangles.map((rect, index) => ({
    ...rect,
    area: Math.abs((rect.x2 - rect.x1) * (rect.y2 - rect.y1)),
    _index: index,
  }));

  withArea.sort((a, b) => {
    if (a.area! !== b.area!) {
      return a.area! - b.area!;
    }
    return a._index - b._index;
  });

  return withArea.map((item) => ({
    x1: item.x1,
    y1: item.y1,
    x2: item.x2,
    y2: item.y2,
  }));
}

const rectangles: Rectangle[] = [
  { x1: 0, y1: 0, x2: 5, y2: 4 }, // area: 20
  { x1: 0, y1: 0, x2: 3, y2: 3 }, // area: 9
  { x1: 5, y1: 0, x2: 10, y2: 2 }, // area: 10
  { x1: 0, y1: 0, x2: 2, y2: 6 } // area: 12
];

console.log(sortRectanglesByArea(rectangles));
