type GalacticCreature = {
    name: string;
    energyLevels: number[];
    avgEnergy?: number;
};

function calculateCreatureEnergy(creature: GalacticCreature): GalacticCreature {
    const { name, energyLevels } = creature;

    // Calculate average
    const total = energyLevels.reduce((sum, level) => sum + level, 0);
    const average = energyLevels.length > 0 ? total / energyLevels.length : 0;

    // Update creature
    creature.avgEnergy = average;

    // Print EXACT required output
    console.log(`Creature: ${name}`);
    console.log(`Energy Levels: [${energyLevels.join(", ")}]`);
    console.log(`Average Energy Level: ${average.toFixed(2)}`);

    return creature;
}

// Example usage
const zorblax: GalacticCreature = { 
    name: "Zorblax", 
    energyLevels: [35, 42, 50, 29] 
};

calculateCreatureEnergy(zorblax);
