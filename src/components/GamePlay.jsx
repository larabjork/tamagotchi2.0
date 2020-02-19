import React from 'react';
import Playpen from './Playpen';
import CaregiveButton from './CaregiveButton';
import PropTypes from 'prop-types';



function GamePlay(props){
  return (
    <div>
    <h2>{props.name} is ready to play!</h2>
    <p>GamePlay</p>
    <Playpen />
    <CaregiveButton />
    </div>

  );
}

GamePlay.propTypes = {
  name: PropTypes.string
};

export default GamePlay;
