import React, { useState } from "react";

const Card = ({image, text='placeholder-text', takeTurn}) => {
    const [selectedStatus, updateSelected] = useState(false);

    const handleClick = () => {
        if(selectedStatus === true){
            takeTurn(true);
        } else {
            updateSelected(true);
            takeTurn(false);
        }
    }

    return (
        <button className="Card" onClick={handleClick}>
            <img src={image} alt='card content'></img>
            <div>{text}</div>
        </button>
    );
}

export default Card;