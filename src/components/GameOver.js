import React from "react";

const GameOver = ({score, highScore}) => {
    return(
        <div className="game-over">
            <div>You Lost</div>
            <div>Score: {score}</div>
            <div>High Score: {highScore}</div>
            <button>Try Again</button>
        </div>
    );
}

export default GameOver;