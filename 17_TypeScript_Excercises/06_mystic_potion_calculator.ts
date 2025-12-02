type PotionType = 'healing' | 'enhancement';

type HealingPotion = {
    type: 'healing';
    name: string;
    healingAmount: number;
}

type EnhancementPotion = {
    type: 'enhancement';
    name: string;
    enhancementAmount: number;
}

type Potion = HealingPotion | EnhancementPotion;

function calculatePotionEffect(potion: Potion): string {
    if (potion.type === 'healing') {
        return `${potion.name} restores ${potion.healingAmount} health points.`;
    }
    if (potion.type === 'enhancement') {
        return `${potion.name} enhances abilities by ${potion.enhancementAmount} points.`;
    }
    return "Unknown potion type.";
}

function runTests(): void {
    function calculatePotionEffect(potion: Potion): string {
        if (potion.type === 'healing') {
            return `${potion.name} restores ${potion.healingAmount} health points.`;
        }
        if (potion.type === 'enhancement') {
            return `${potion.name} enhances abilities by ${potion.enhancementAmount} points.`;
        }
        return "Unknown potion type.";
    }

    let healingPotion: HealingPotion = {
        type: "healing",
        name: "Elixir of Life",
        healingAmount: 50
    };

    let enhancementPotion: EnhancementPotion = {
        type: "enhancement",
        name: "Strength Brew",
        enhancementAmount: 25
    };

    let vitalityDraught: HealingPotion = {
        type: "healing",
        name: "Vitality Draught",
        healingAmount: 75
    };

    console.log(calculatePotionEffect(healingPotion));
    console.log(calculatePotionEffect(enhancementPotion));
    console.log(calculatePotionEffect(vitalityDraught));
}

runTests();

