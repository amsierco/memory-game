import React from "react";

const Header = ({score, highScore}) => {
    return (
      <div className="header">
        <div className="directions">Don't Click The Same Card Twice!</div>
        <div className="score">Score: {score}</div>
        <div className="high-score">High Score: {highScore}</div>
      </div>  
    );
}

export default Header;