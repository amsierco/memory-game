import React from "react";

const Header = ({score, highScore}) => {
    return (
      <div className="header">
        <h1 className="directions">Don't Click The Same Card Twice!</h1>
        <div className="details">
          <h3 className="score">Score: {score}</h3>
          <h3 className="high-score">High Score: {highScore}</h3>
        </div>
      </div>  
    );
}

export default Header;