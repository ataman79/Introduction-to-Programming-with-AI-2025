function printCrossingPlots({location, lat, long}, ...plots) {
 console.log("Crossing plots of " + location + ":");
 for (let plot of plots) {
 if (lat >= plot.S && lat <= plot.N &&
 long >= plot.W && long <= plot.E) {
 console.log(` - ${plot.name}`);
 }
 }
}


printCrossingPlots(
 {location:"Park Coffee Club", lat: 42.686851, long: 23.336146},
 {name:"Borisova Gradina Park", S: 42.677265, W: 23.331184, N: 42.690606, E: 23.347621},
 {name:"Vasil Levski Stadium", S: 42.686344, W: 23.332922, N: 42.689106, E: 23.337278},
 {name:"Bulgarian Army Stadium", S: 42.683029, W: 23.338244, N: 42.685191, E: 23.341355},
 {name:"Tennis Club Levski", S: 42.686102, W: 23.336007, N: 42.687132, E: 23.337734}
);
