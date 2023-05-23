import React, { useState } from "react";
import Card from "./Card";

const Deck = ({takeTurn}) => {
    const [deck, shuffle] = useState([]);

    return(<>
        <Card text={'test text for deck'} takeTurn={takeTurn}/>
        <Card text={'test pt 2'} takeTurn={takeTurn}/>
    </>);
}

export default Deck;