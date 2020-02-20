import React, {Component} from 'react';
import Playpen from './Playpen';
import CaregiveButton from './CaregiveButton';
import PropTypes from 'prop-types';

function handleAction(action) {
  console.log(action);
}

const Caregiver = props => <button onClick={() => handleAction(props.action)}>{props.display}</button>;

class GamePlay extends React.Component {


  render (){
  return (
    <div>
    <h2>{this.props.name} is ready to play!</h2>
    <p>GamePlay</p>
    <p>Hunger: {this.props.hunger}</p>
      <Caregiver display='Feed me!' action='hunger'/>
    <br/>
    <p>Sleep: {this.props.sleep}</p>
      <Caregiver display= 'Bedtime!' action='sleep'/>
    <br/>
    <p>Play: {this.props.play}</p>
      <Caregiver display= "Let's play!" action='play'/>


    <Playpen />
    </div>

  );
}
}

GamePlay.propTypes = {
  name: PropTypes.string,
  hunger: PropTypes.number,
  sleep: PropTypes.number,
  play: PropTypes.number

};

export default GamePlay;
