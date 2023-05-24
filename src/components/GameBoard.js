import React, { useState } from 'react';
import Header from './Header';
import GameOver from './GameOver';
import Card from './Card';
import { data } from './data';
import '../style.css';

const GameBoard = (() => {
    const [score, setScore] = useState(0);
    const [highScore, setHighScore] = useState(0);
    const [gameOver, endGame] = useState(false);
    const [deck, updateDeck] = useState(data);

    function shuffle(array){
        for (let i = array.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          const temp = array[i];
          array[i] = array[j];
          array[j] = temp;
        }
        return array;
    }

    function takeTurn(valid){
        if(!valid){
            endGame(true);
            return;
        }
        let updatedScore = score + 1;
        setScore(score => score + 1);
        if(updatedScore > highScore){
            setHighScore(updatedScore);
        }
        updateDeck(shuffle(data));
    }

    function reset(){
        endGame(false);
        setScore(0);
        updateDeck(shuffle(data));
    }

    return (
        <div className='game-board'>
            <Header score={score} highScore={highScore} />
            {
            !gameOver ?
                <div className='deck'>
                    {deck.map(el => {
                    return <Card image={el.image} text={el.text} takeTurn={takeTurn} key={el.id}/>
                    })}
                </div>
            : 
                <GameOver score={score} highScore={highScore} reset={reset}
            />}
        </div>
    );

});

export default GameBoard;