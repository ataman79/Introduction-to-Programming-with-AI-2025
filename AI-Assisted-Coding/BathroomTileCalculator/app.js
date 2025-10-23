// Basic bathroom tile calculator + visualization

const form = document.getElementById('calcForm');
const summary = document.getElementById('summary');
const canvas = document.getElementById('viz');
const ctx = canvas.getContext('2d');

function mm(n){return Math.round(n*1000)/1000}

function calculate(e){
  if(e) e.preventDefault();
  // read inputs
  const floorW = parseFloat(document.getElementById('floorWidth').value) || 0;
  const floorL = parseFloat(document.getElementById('floorLength').value) || 0;
  const fTileWcm = parseFloat(document.getElementById('floorTileW').value) || 0;
  const fTileLcm = parseFloat(document.getElementById('floorTileL').value) || 0;

  const wallH = parseFloat(document.getElementById('wallHeight').value) || 0;
  const wTileWcm = parseFloat(document.getElementById('wallTileW').value) || 0;
  const wTileHcm = parseFloat(document.getElementById('wallTileH').value) || 0;

  const doorW = parseFloat(document.getElementById('doorW').value) || 0;
  const doorH = parseFloat(document.getElementById('doorH').value) || 0;

  // validation
  if(floorW<=0 || floorL<=0 || fTileWcm<=0 || fTileLcm<=0 || wallH<=0 || wTileWcm<=0 || wTileHcm<=0){
    summary.innerHTML = '<strong>Please fill in valid positive numbers for dimensions and tile sizes.</strong>';
    return;
  }

  // floor tiles
  const floorArea = floorW*floorL; // m2
  const fTileArea = (fTileWcm/100)*(fTileLcm/100);
  const floorTiles = Math.ceil(floorArea / fTileArea);

  // walls: assume 4 walls: two with width floorW and two with length floorL
  const wallAreaTotal = 2*(floorW*wallH) + 2*(floorL*wallH);
  const doorArea = doorW*doorH;
  const netWallArea = Math.max(0, wallAreaTotal - doorArea);
  const wTileArea = (wTileWcm/100)*(wTileHcm/100);
  const wallTiles = Math.ceil(netWallArea / wTileArea);

  // give breakdown per wall for visualization
  const walls = [
    {name:'Wall A (width)', w:floorW, h:wallH},
    {name:'Wall B (length)', w:floorL, h:wallH},
    {name:'Wall C (width)', w:floorW, h:wallH},
    {name:'Wall D (length)', w:floorL, h:wallH}
  ];

  const out = [];
  out.push(`<div>Floor area: <strong>${mm(floorArea)} m²</strong> — Floor tiles: <strong>${floorTiles}</strong> (tile ${fTileWcm}×${fTileLcm} cm)</div>`);
  out.push(`<div>Total wall area: <strong>${mm(wallAreaTotal)} m²</strong></div>`);
  out.push(`<div>Door area: <strong>${mm(doorArea)} m²</strong></div>`);
  out.push(`<div>Net wall area: <strong>${mm(netWallArea)} m²</strong> — Wall tiles: <strong>${wallTiles}</strong> (tile ${wTileWcm}×${wTileHcm} cm)</div>`);

  summary.innerHTML = out.join('');

  drawVisualization({floorW, floorL, fTileWcm, fTileLcm, walls, wTileWcm, wTileHcm, door: {w:doorW, h:doorH}});
}

function drawVisualization(data){
  // clear
  ctx.clearRect(0,0,canvas.width,canvas.height);
  // layout: left - floor plan, right - walls stack
  const padding = 20;
  const fAreaBox = {x:padding, y:padding, w:canvas.width*0.55 - padding*2, h:canvas.height - padding*2};
  const wallBox = {x:canvas.width*0.57, y:padding, w:canvas.width*0.41 - padding*2, h:canvas.height - padding*2};

  // draw floor plan
  ctx.strokeStyle='#0f172a';
  ctx.lineWidth=1;
  ctx.strokeRect(fAreaBox.x, fAreaBox.y, fAreaBox.w, fAreaBox.h);
  ctx.fillStyle='#111827';
  ctx.font='14px Segoe UI';
  ctx.fillText('Floor plan (top view)', fAreaBox.x+6, fAreaBox.y-2);

  // compute scale to fit floor dims into fAreaBox
  const scale = Math.min(fAreaBox.w / data.floorW, fAreaBox.h / data.floorL);
  // center floor drawing
  const floorDrawW = data.floorW * scale;
  const floorDrawH = data.floorL * scale;
  const fx = fAreaBox.x + (fAreaBox.w - floorDrawW)/2;
  const fy = fAreaBox.y + (fAreaBox.h - floorDrawH)/2;

  // draw floor rectangle
  ctx.fillStyle='#fff';
  ctx.fillRect(fx, fy, floorDrawW, floorDrawH);
  ctx.strokeStyle='#0f172a';
  ctx.strokeRect(fx, fy, floorDrawW, floorDrawH);

  // draw floor tiles grid
  const tileW = (data.fTileWcm/100) * scale; // in px
  const tileH = (data.fTileLcm/100) * scale;
  ctx.strokeStyle='#9ca3af';
  ctx.lineWidth=0.6;
  // vertical lines
  for(let x=fx; x<=fx+floorDrawW+0.001; x+=tileW){
    ctx.beginPath();ctx.moveTo(x,fy);ctx.lineTo(x,fy+floorDrawH);ctx.stroke();
  }
  // horizontal
  for(let y=fy; y<=fy+floorDrawH+0.001; y+=tileH){
    ctx.beginPath();ctx.moveTo(fx,y);ctx.lineTo(fx+floorDrawW,y);ctx.stroke();
  }

  // annotate dimensions
  ctx.fillStyle='#111827';ctx.font='12px Segoe UI';
  ctx.fillText(`${data.floorW} m × ${data.floorL} m`, fx+4, fy+floorDrawH+16);

  // draw walls area as four panels stacked
  const panelGap = 10;
  const panelH = (wallBox.h - (3*panelGap)) / 4;
  ctx.font='13px Segoe UI';
  for(let i=0;i<4;i++){
    const w = data.walls[i].w;
    const h = data.walls[i].h;
    const pw = wallBox.x + 6;
    const py = wallBox.y + i*(panelH+panelGap);
    const ph = panelH - 6;
    // compute horizontal scale to fit width
    const s = Math.min((wallBox.w - 12) / w, ph / h);
    const drawW = w * s;
    const drawH = h * s;
    // center inside panel area
    const offX = pw + ((wallBox.w - 12) - drawW)/2;
    const offY = py + ((ph) - drawH)/2 + 4;
    ctx.fillStyle='#fff';ctx.fillRect(pw, py, wallBox.w-12, ph);
    ctx.strokeStyle='#0f172a';ctx.strokeRect(pw, py, wallBox.w-12, ph);

    // draw tile grid for wall
    const tileWpx = (data.wTileWcm/100) * s;
    const tileHpx = (data.wTileHcm/100) * s;
    ctx.strokeStyle='#9ca3af';ctx.lineWidth=0.6;
    // vertical
    for(let x=offX; x<=offX+drawW+0.001; x+=tileWpx){ctx.beginPath();ctx.moveTo(x,offY);ctx.lineTo(x,offY+drawH);ctx.stroke();}
    // horizontal
    for(let y=offY; y<=offY+drawH+0.001; y+=tileHpx){ctx.beginPath();ctx.moveTo(offX,y);ctx.lineTo(offX+drawW,y);ctx.stroke();}

    // draw door on wall A (first wall) centered at bottom if present
    if(i===0 && data.door && data.door.w>0 && data.door.h>0){
      const doorWpx = data.door.w * s;
      const doorHpx = data.door.h * s;
      const doorX = offX + (drawW - doorWpx)/2;
      const doorY = offY + drawH - doorHpx;
      ctx.fillStyle='#fde68a';ctx.fillRect(doorX, doorY, doorWpx, doorHpx);
      ctx.strokeStyle='#92400e';ctx.strokeRect(doorX, doorY, doorWpx, doorHpx);
      ctx.fillStyle='#92400e';ctx.fillText('Door', doorX+4, doorY+doorHpx/2);
    }

    // label
    ctx.fillStyle='#0f172a';ctx.fillText(`${data.walls[i].name} — ${w} m × ${h} m`, pw+6, py+14);
  }
}

form.addEventListener('submit', calculate);

document.getElementById('resetBtn').addEventListener('click', ()=>{form.reset(); summary.innerHTML=''; ctx.clearRect(0,0,canvas.width,canvas.height);});

// initial draw
calculate();
