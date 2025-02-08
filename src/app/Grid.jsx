import Card from "./Card";
import { getCardPairs } from "./utils"; 
import { useState, useEffect } from "react";
import { handleClick } from "./handleClick"; 
import { useCardMatchEffect } from "./useCardMatchEffect"; 

const Grid = () => {
    const [cards, setCards] = useState(getCardPairs()); // gets an object of cards object of paired card
    const [storeOpenCard, setStoreOpenCard] = useState([]); //this is to store current pair of cards which were opened
    const [isClickable, setIsClickable] = useState(true); // a lock to ensure no further clicks during checking process

    
    const onClickCard = (clickedCardIndex) => {
        handleClick(clickedCardIndex,setStoreOpenCard, cards, setCards,  isClickable);
    };

    // Use the imported useCardMatchEffect hook
    useCardMatchEffect(storeOpenCard, setStoreOpenCard, cards, setCards, setIsClickable);

    return (
        <div className="grid">
            {Object.entries(cards).map(([si, card]) => (
                <Card
                    key={si}
                    SIno={si}
                    id={card.id}
                    imagePath={`src/assets/cards/${card.id}.webp`}
                    isFlipped={card.state}
                    onClick={() => onClickCard(si)}
                />
            ))}
        </div>
    );
};

export default Grid;