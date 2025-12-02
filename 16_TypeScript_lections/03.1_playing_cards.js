// Compare two cards by face first, then by suit
function compareCards(card1, card2) {
    const faceValues = {
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
    const suitValues = {
        'hearts': 1,
        'diamonds': 2,
        'clubs': 3,
        'spades': 4
    };
    const faceComp = faceValues[card1.face] - faceValues[card2.face];
    if (faceComp > 0) {
        return 'greater';
    }
    else if (faceComp < 0) {
        return 'less';
    }
    const suitComp = suitValues[card1.suit] - suitValues[card2.suit];
    if (suitComp > 0) {
        return 'greater';
    }
    else if (suitComp < 0) {
        return 'less';
    }
    return 'equal';
}
// Example usage
const cardA = { face: 'K', suit: 'diamonds' };
const cardB = { face: 'Q', suit: 'spades' };
console.log(compareCards(cardA, cardB)); // Output: 'greater'
