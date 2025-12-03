type HealingPotion = {
  name: string;
  healingAmount: number;
};

type EnhancementPotion = {
  name: string;
  enhancementAmount: number;
};

type Potion = HealingPotion | EnhancementPotion;

function calculatePotionEffect(potion: Potion): string {
  let result: string;

  if ("healingAmount" in potion) {
    // HealingPotion
    result = `${potion.name} restores ${potion.healingAmount} health points.`;
  } else {
    // EnhancementPotion
    result = `${potion.name} enhances abilities by ${potion.enhancementAmount} points.`;
  }

  console.log(result); // so the platform sees output
  return result;       // so the function also returns it
}
// Example usage:
const healingPotion: HealingPotion = {
  name: "Elixir of Vitality",
  healingAmount: 50,
};
const enhancementPotion: EnhancementPotion = {
  name: "Potion of Strength",
  enhancementAmount: 20,
};
calculatePotionEffect(healingPotion); // "Elixir of Vitality restores 50 health points."
calculatePotionEffect(enhancementPotion); // "Potion of Strength enhances abilities by 20 points."
// Example usage:
export {};
calculatePotionEffect(healingPotion); // "Elixir of Vitality restores 50 health points."
calculatePotionEffect(enhancementPotion); // "Potion of Strength enhances abilities by 20 points."
// Example usage:
export {};
calculatePotionEffect(healingPotion); // "Elixir of Vitality restores 50 health points."
calculatePotionEffect(enhancementPotion); // "Potion of Strength enhances abilities by 20 points."
