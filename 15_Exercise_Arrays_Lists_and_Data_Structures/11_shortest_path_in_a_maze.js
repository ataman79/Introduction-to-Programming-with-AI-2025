// State variables
let width = 10;
let height = 10;
let editMode = 'wall';
let maze = [];
let startPoint = null;
let endPoint = null;
let settingMode = null;
let pathCells = [];

// Arrow directions
const ARROWS = {
    up: '↑',
    down: '↓',
    left: '←',
    right: '→'
};

// Initialize
document.getElementById('widthSlider').addEventListener('input', (e) => {
    width = parseInt(e.target.value);
    document.getElementById('widthValue').textContent = width;
    document.getElementById('widthDisplay').textContent = width;
    generateMaze();
});

document.getElementById('heightSlider').addEventListener('input', (e) => {
    height = parseInt(e.target.value);
    document.getElementById('heightValue').textContent = height;
    document.getElementById('heightDisplay').textContent = height;
    generateMaze();
});

function setMode(mode) {
    editMode = mode;
    document.querySelectorAll('.mode-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    document.querySelector(`[data-mode="${mode}"]`).classList.add('active');
}

function generateMaze() {
    maze = Array(height).fill(null).map(() => Array(width).fill(0));
    startPoint = null;
    endPoint = null;
    pathCells = [];
    renderMaze();
    showMessage('Maze created. Set start and end points.', 'info');
    updateStats();
}

function clearMaze() {
    maze = Array(height).fill(null).map(() => Array(width).fill(0));
    startPoint = null;
    endPoint = null;
    pathCells = [];
    renderMaze();
    showMessage('Maze cleared.', 'info');
    updateStats();
}

function renderMaze() {
    const grid = document.getElementById('mazeGrid');
    grid.innerHTML = '';

    for (let y = 0; y < height; y++) {
        const row = document.createElement('div');
        row.className = 'grid-row';

        for (let x = 0; x < width; x++) {
            const cell = document.createElement('div');
            cell.className = 'grid-cell';
            cell.dataset.x = x;
            cell.dataset.y = y;

            const isStart = startPoint && startPoint.x === x && startPoint.y === y;
            const isEnd = endPoint && endPoint.x === x && endPoint.y === y;
            const isPath = pathCells.some(p => p.x === x && p.y === y);

            if (isStart) {
                cell.classList.add('start');
                cell.textContent = 'S';
            } else if (isEnd) {
                cell.classList.add('end');
                cell.textContent = 'E';
            } else if (isPath) {
                cell.classList.add('path');
                const pathCell = pathCells.find(p => p.x === x && p.y === y);
                cell.setAttribute('data-arrow', ARROWS[pathCell.direction] || '•');
            } else if (maze[y][x] === 1) {
                cell.classList.add('wall');
            } else {
                cell.classList.add('free');
            }

            cell.addEventListener('click', () => handleCellClick(x, y));
            row.appendChild(cell);
        }

        grid.appendChild(row);
    }
}

function handleCellClick(x, y) {
    if (settingMode === 'start') {
        startPoint = { x, y };
        settingMode = null;
        showMessage('Start point set!', 'success');
        renderMaze();
        return;
    }

    if (settingMode === 'end') {
        endPoint = { x, y };
        settingMode = null;
        showMessage('End point set!', 'success');
        renderMaze();
        return;
    }

    // Toggle wall/free
    if (editMode === 'wall') {
        maze[y][x] = 1;
    } else {
        maze[y][x] = 0;
    }

    renderMaze();
}

function setStartMode() {
    settingMode = 'start';
    showMessage('Click on a cell to set the start point', 'info');
}

function setEndMode() {
    settingMode = 'end';
    showMessage('Click on a cell to set the end point', 'info');
}

function findPath() {
    if (!startPoint) {
        showMessage('Please set a start point first!', 'error');
        return;
    }

    if (!endPoint) {
        showMessage('Please set an end point first!', 'error');
        return;
    }

    const path = bfs(startPoint, endPoint);

    if (path.length === 0) {
        showMessage('No path found! The end point is unreachable.', 'error');
        pathCells = [];
        updateStats();
        renderMaze();
        return;
    }

    pathCells = [];
    for (let i = 0; i < path.length - 1; i++) {
        const current = path[i];
        const next = path[i + 1];

        let direction = 'none';
        if (next.x > current.x) direction = 'right';
        else if (next.x < current.x) direction = 'left';
        else if (next.y > current.y) direction = 'down';
        else if (next.y < current.y) direction = 'up';

        pathCells.push({ x: current.x, y: current.y, direction });
    }

    showMessage(`Path found! Length: ${path.length - 1} steps`, 'success');
    updateStats();
    renderMaze();
}

function bfs(start, end) {
    const queue = [[start]];
    const visited = new Set();
    visited.add(`${start.x},${start.y}`);

    while (queue.length > 0) {
        const path = queue.shift();
        const current = path[path.length - 1];

        if (current.x === end.x && current.y === end.y) {
            return path;
        }

        const neighbors = [
            { x: current.x + 1, y: current.y },
            { x: current.x - 1, y: current.y },
            { x: current.x, y: current.y + 1 },
            { x: current.x, y: current.y - 1 }
        ];

        for (const neighbor of neighbors) {
            const key = `${neighbor.x},${neighbor.y}`;

            if (neighbor.x >= 0 && neighbor.x < width &&
                neighbor.y >= 0 && neighbor.y < height &&
                maze[neighbor.y][neighbor.x] === 0 &&
                !visited.has(key)) {
                
                visited.add(key);
                queue.push([...path, neighbor]);
            }
        }
    }

    return [];
}

function resetPath() {
    pathCells = [];
    renderMaze();
    showMessage('Path reset.', 'info');
    updateStats();
}

function showMessage(text, type) {
    const messageEl = document.getElementById('message');
    messageEl.textContent = text;
    messageEl.className = `message ${type}`;

    if (type !== 'error') {
        setTimeout(() => {
            messageEl.className = 'message';
        }, 3000);
    }
}

function updateStats() {
    document.getElementById('gridSizeStat').textContent = `${width}×${height}`;
    document.getElementById('pathLengthStat').textContent = pathCells.length > 0 ? pathCells.length : '-';
    document.getElementById('statusStat').textContent = pathCells.length > 0 ? 'Solved' : 'Ready';
}

// Initialize on load
window.addEventListener('load', () => {
    generateMaze();
});
