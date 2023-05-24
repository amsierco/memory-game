import React from "react";

const GameOver = ({score, highScore, reset}) => {
    return(
        <div className="game-over">
            <div className="game-over-inner">
                <h1>Game Over</h1>
                <br />
                <h3>Score: {score}</h3>
                <h3>High Score: {highScore}</h3>
                <br />
                <button onClick={reset}><h4>Play Again</h4></button>
            </div>
        </div>
    );
}

export default GameOver;