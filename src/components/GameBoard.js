import React, { useEffect, useState } from 'react';
import Header from './Header';
import GameOver from './GameOver';
import Card from './Card';
import { data } from './data';
import '../style.css';

const GameBoard = (() => {
    const [score, setScore] = useState(0);
    const [highScore, setHighScore] = useState(0);
    const [gameOver, endGame] = useState(false);

    let initDeck = data.map(el => {
        return <Card image={el.image} text={el.text} takeTurn={takeTurn} key={el.id}/>
    })
    const [deck, updateDeck] = useState(initDeck);

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
        setScore(score => score + 1);
        let temp = shuffle(data).map(el => {
            return <Card image={el.image} text={el.text} takeTurn={takeTurn} key={el.id}/>
        })
        updateDeck(temp);
    }

    function reset(){
        endGame(false);
        setScore(0);
        let temp = shuffle(data).map(el => {
            return <Card image={el.image} text={el.text} takeTurn={takeTurn} key={el.id}/>
        })
        updateDeck(temp);
    }

    useEffect(() => {
        if(score > highScore){setHighScore(score);}
    }, [score]);

    return (
        <div className='game-board'>
            <Header score={score} highScore={highScore} />
            {
            !gameOver ?
                <div className='deck'>{deck}</div> 
            : 
                <GameOver score={score} highScore={highScore} reset={reset}
            />}
        </div>
    );

});

export default GameBoard;