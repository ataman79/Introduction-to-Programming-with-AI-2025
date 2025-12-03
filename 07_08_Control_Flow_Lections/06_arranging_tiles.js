function arrangeTiles(floorW, floorH, tileW, tileH) {

    // ---- Horizontal (no rotation)
    const hCols = Math.ceil(floorW / tileW);
    const hRows = Math.ceil(floorH / tileH);
    const hTiles = hRows * hCols;

    // ---- Vertical (rotated)
    const vCols = Math.ceil(floorW / tileH);
    const vRows = Math.ceil(floorH / tileW);
    const vTiles = vRows * vCols;

    // ---- 1) Print optimal arrangement
    if (hTiles <= vTiles) {
        console.log(`Optimal arrangement is horizontal: ${hTiles} tiles`);
    } else {
        console.log(`Optimal arrangement is vertical: ${vTiles} tiles`);
    }

    // ---- 2) Print detailed horizontal output
    console.log(`Horizontal: ${hTiles} tiles (${hRows} rows x ${hCols} cols)`);

    // ---- 3) Print detailed vertical output
    console.log(`Vertical: ${vTiles} tiles (${vRows} rows x ${vCols} cols)`);
}

// Example usage:
arrangeTiles(500, 300, 70, 50);
// Example usage:
arrangeTiles(400, 600, 80, 120);