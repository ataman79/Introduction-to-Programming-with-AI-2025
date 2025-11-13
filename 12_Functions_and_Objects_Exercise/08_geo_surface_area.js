


function calculateGeoArea(...locations) {
    const R = 6371000; // Earth radius in meters
    
    // Convert degrees to radians
    function toRadians(degrees) {
        return degrees * (Math.PI / 180);
    }
    
    // Calculate area using the spherical excess formula
    let S = 0; // Spherical excess
    
    for (let i = 0; i < locations.length; i++) {
        const p1 = locations[i];
        const p2 = locations[(i + 1) % locations.length];
        
        const lat1 = toRadians(p1.latitude);
        const lon1 = toRadians(p1.longitude);
        const lat2 = toRadians(p2.latitude);
        const lon2 = toRadians(p2.longitude);
        
        // Calculate the spherical excess contribution
        S += (lon2 - lon1) * (2 + Math.sin(lat1) + Math.sin(lat2));
    }
    
    S = Math.abs(S) / 2;
    
    // Area of spherical polygon = E * R²
    const area = Math.abs(S * R * R);
    return area;
}


let area = calculateGeoArea(
  { latitude: 42.635912, longitude: 23.369442 },
  { latitude: 42.635917, longitude: 23.369905 },
  { latitude: 42.636574, longitude: 23.369877 }
);
console.log(`Area: ${area.toFixed(2)} m²`);
