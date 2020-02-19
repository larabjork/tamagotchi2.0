import React from 'react';
import { Link } from 'react-router-dom';


function Header(){
  return (
    <div>
    <h1>Tamagotchi <span> X</span><span>TREME</span> </h1>
      <Link to="/">Start</Link> | <Link to="/gameplay">Gameplay</Link> | <Link to="/end">End</Link>
    </div>

  );
}

export default Header;
