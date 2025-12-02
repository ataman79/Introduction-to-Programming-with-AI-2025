type CardFace = 'A' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10' | 'J' | 'Q' | 'K';
type CardSuit = 'hearts' | 'diamonds' | 'clubs' | 'spades';

interface Card {
  face: CardFace;
  suit: CardSuit;
}

// Compare two cards by face first, then by suit
function compareCards(card1: Card, card2: Card): string {
  const faceValues: Record<CardFace, number> = {
    'A': 1,
    '2': 2,
    '3': 3,
    '4': 4,
    '5': 5,
    '6': 6,
    '7': 7,
    '8': 8,
    '9': 9,
    '10': 10,
    'J': 11,
    'Q': 12,
    'K': 13
  };

  const suitValues: Record<CardSuit, number> = {
    'hearts': 1,
    'diamonds': 2,
    'clubs': 3,
    'spades': 4
  };

  const faceComp = faceValues[card1.face] - faceValues[card2.face];
  
  if (faceComp > 0) {
    return 'greater';
  } else if (faceComp < 0) {
    return 'less';
  }
  
  const suitComp = suitValues[card1.suit] - suitValues[card2.suit];
  if (suitComp > 0) {
    return 'greater';
  } else if (suitComp < 0) {
    return 'less';
  }
  
  return 'equal';
}

// Example usage
const cardA: Card = { face: 'K', suit: 'diamonds' };
const cardB: Card = { face: 'Q', suit: 'spades' };  
console.log(compareCards(cardA, cardB)); // Output: 'greater'

