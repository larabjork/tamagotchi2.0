import React from 'react';
import './App.css';
import Header from './components/Header';
import Start from './components/Start';
import GamePlay from './components/GamePlay';
import End from './components/End';
import { Switch, Route } from 'react-router-dom';
// import Moment from 'moment';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      hunger: 10,
      sleep: 10,
      play: 10,
      name: "",
      id: null
      // endgame: false
      // currentEmotion: null
    };
    // this.handleHunger = this.handleHunger.bind(this);
    // this.handleSleep = this.handleSleep.bind(this);
    // this.handlePLay = this.handlePLay.bind(this);
    // this.handleCurrentEmotion = this.handleCurrentEmotion.bind(this);
    this.handleNewName = this.handleNewName.bind(this);
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

  handleNewName(object){
    this.setState({name: object.name, id: object.id});
  }

  render(){
    return (
      <div>
        <Header/>
        <Switch>
          <Route exact path='/' render={()=><Start onNewNameCreation={this.handleNewName}/>} />
          <Route path='/gameplay' render={()=><GamePlay name={this.state.name} />} />
          <Route path='/end' component={End} />
        </Switch>


      </div>
    );
  }
}

export default App;
