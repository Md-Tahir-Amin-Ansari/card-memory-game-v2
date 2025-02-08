// this function returns an array of 6 random no. corresponding to file name 
// and shuffle them to simulate the random order they are placed face down

export function getCardPairs() {
    const cards = new Set();
    
    // Keep generating numbers until we have exactly 6 unique ones
    while (cards.size < 6) {
        cards.add(Math.floor(Math.random() * 54) + 1);
    }

    // Duplicate each number to form pairs
    // ... spread operator is used to expand element 
    //of each iterable in to individual component
    const pairedcards = [...cards, ...cards];

    // Shuffle the array using Fisher-Yates algorithm
    for (let i = pairedcards.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [pairedcards[i], pairedcards[j]] = [pairedcards[j], pairedcards[i]];
    }

    const cardObj ={};
    let index =0;
    pairedcards.map((pairedcard) => {
        cardObj[index++] = {
            "id" : pairedcard,
            "state" : true,
        }
        //true = flipped false = face up
    })
    return cardObj;
}

