type CardFace = "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "J" | "Q" | "K" | "A";
type CardSuit = "♥" | "♦" | "♣" | "♠";

interface Card {
  face: CardFace;
  suit: CardSuit;
}

let deck: Card[] = [
    { face: "8", suit: "♥" },
    { face: "3", suit: "♥" },
    { face: "A", suit: "♠" },
    { face: "K", suit: "♦" },
];


function cardToString(card: Card): string {
    return `${card.face}${card.suit}`;
}

for (let card of deck) {
    console.log(`Card: ${card.face} of ${card.suit}`);
}