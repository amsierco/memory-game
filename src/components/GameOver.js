import React from "react";

const GameOver = ({score, highScore, reset}) => {
    return(
        <div className="game-over">
            <div>You Lost</div>
            <div>Score: {score}</div>
            <div>High Score: {highScore}</div>
            <button onClick={reset}>Try Again</button>
        </div>
    );
}

export default GameOver;