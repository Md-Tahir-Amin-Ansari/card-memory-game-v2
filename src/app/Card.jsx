import { useState } from "react";
import ReactCardFlip from "react-card-flip";

const Card = ({SIno,id,imagePath,isFlipped,onClick}) => {
    
    return ( 
        <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
            <div className="card" onClick={onClick}>
                <img src={imagePath}  alt={`card ${id}`} ></img>
            </div>
            <div className="card" onClick={onClick}>
                <img src='src/assets/back/back.webp' alt="card back" ></img>
            </div>
        </ReactCardFlip>
     );
}
 
export default Card;