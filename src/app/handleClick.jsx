export const handleClick = (clickedCardIndex,setStoreOpenCard,cards,setCards,isClickable)=>{
    // prevent open card to be clicked again
    if (!isClickable || !cards[clickedCardIndex].state) return;

    // Open (flip face up) card by updating state
    setCards((prevCardsState) => {
        const updatedCards = { ...prevCardsState };
        updatedCards[clickedCardIndex].state = false;
        return updatedCards;
    });

    setStoreOpenCard((prevStoreOpenCard) => [...prevStoreOpenCard, clickedCardIndex]);
}