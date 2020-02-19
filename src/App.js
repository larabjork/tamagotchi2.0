import React from 'react';
import './App.css';
import Header from './components/Header';
import Start from './components/Start';
import GamePlay from './components/GamePlay';
import End from './components/End';
// import { Switch, Route } from 'react-router-dom';
// import Moment from 'moment';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      hunger: 10,
      sleep: 10,
      play: 10,
      // endgame: false
      // currentEmotion: null
    };
    // this.handleHunger = this.handleHunger.bind(this);
    // this.handleSleep = this.handleSleep.bind(this);
    // this.handlePLay = this.handlePLay.bind(this);
    // this.handleCurrentEmotion = this.handleCurrentEmotion.bind(this);
  }

  handleHunger(num){
    let updatedHunger = this.state.hunger + num;
    this.setState({hunger: updatedHunger});
  }
  handleSleep(num){
    let updatedSleep = this.state.sleep + num;
    this.setState({sleep: updatedSleep});
  }
  handlePlay(num){
    let updatedPlay = this.state.play + num;
    this.setState({hunger: updatedPlay});
  }

  render(){
    return (
      <div>
        <Header/>
        <Start/>
        <GamePlay/>
        <End/>
        


      </div>
    );
  }
}

export default App;
