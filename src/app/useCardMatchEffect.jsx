import { useEffect } from "react";

export const useCardMatchEffect = 
(storeOpenCard,setStoreOpenCard,cards,setCards,setIsClickable)=>{
    useEffect(()=>{
        if (storeOpenCard.length === 2) {
            setIsClickable(false); // Disable further clicks

            const [firstCardIndex, secondCardIndex] = storeOpenCard;
            // if they are the same card we don't need to look for them anymore
            if (cards[firstCardIndex].id === cards[secondCardIndex].id) {
                setStoreOpenCard([]);
                setIsClickable(true); // Re-enable clicks
            } else {
                // if they are differnt we flipped them back
                setTimeout(() => {
                    setCards((prevCards) => {
                        const updatedCards = { ...prevCards };
                        updatedCards[firstCardIndex].state = true;
                        updatedCards[secondCardIndex].state = true;
                        return updatedCards;
                    });
                    setStoreOpenCard([]);
                    setIsClickable(true); // Re-enable clicks
                }, 1000);
            }
        }
    },[storeOpenCard,cards]);
}