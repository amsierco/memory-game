import React, { useState } from 'react';
import Header from './Header';
import Deck from './Deck';
import GameOver from './GameOver';

const GameBoard = () => {
    const [score, setScore] = useState(0);
    const [highScore, setHighScore] = useState(0);
    const [gameOver, endGame] = useState(false);

    function takeTurn(repeat) {
        console.log('pressed! ' + score + repeat);
        // Game over check

        // Update score
        setScore(score+1);
        if(score > highScore){
            setHighScore(score);
        }
    }

    return (
        <div className='game-board'>
            <Header score={score} highScore={highScore} />
            {!gameOver ? <Deck takeTurn={takeTurn}/> : <GameOver score={score} highScore={highScore} />}
        </div>
    );

}

export default GameBoard;