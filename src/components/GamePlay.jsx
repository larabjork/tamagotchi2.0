import React, {Component} from 'react';
import Playpen from './Playpen';
import CaregiveButton from './CaregiveButton';
import PropTypes from 'prop-types';

const Caregiver = props => <div>{props.action}</div>;

class GamePlay extends React.Component {


  render (){
  return (
    <div>
    <h2>{this.props.name} is ready to play!</h2>
    <p>GamePlay</p>
    <p>Hunger: {this.props.hunger}</p>
      <Caregiver action='Feed me!'/>
    <br/>
    <p>Sleep: {this.props.sleep}</p>
      <Caregiver action= 'Bedtime!'/>
    <br/>
    <p>Play: {this.props.play}</p>
      <Caregiver action= "Let's play!"/>


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
