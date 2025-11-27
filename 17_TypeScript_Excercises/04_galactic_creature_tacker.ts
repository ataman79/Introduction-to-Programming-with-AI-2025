type GalacticCreature = {
    name: string;
    energyLevels: number[];
    avgEnergy?: number;
}

function calculateCreatureEnergy(creature: GalacticCreature) : GalacticCreature {
  let totalEnergy = 0;
  for (let energy of creature.energyLevels) {
    totalEnergy += energy;
  }
  
  creature.avgEnergy = totalEnergy / creature.energyLevels.length;
  console.log(`Creature: ${creature.name}`);
  console.log(`Energy Levels: [${creature.energyLevels.join(", ")}]`);
  console.log(`Average Energy Level: ${creature.avgEnergy.toFixed(2)}`);
  return creature;
}

const zorblax: GalacticCreature =
  { name: "Zorblax", energyLevels: [35, 42, 50, 29] };
calculateCreatureEnergy(zorblax);
