import React, { useState } from "react";

const Card = ({image, text, takeTurn}) => {
    const [valid, updateStatus] = useState(true);

    const clickHandler = () => {
        takeTurn(valid);
        updateStatus(false);
    }

    return (
        <button className="card" onClick={clickHandler}>
            <img src={image} alt="" />
            <div>{text}</div>
        </button>
    );
}

export default Card;