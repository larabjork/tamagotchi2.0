import React from 'react';
import PropTypes from 'prop-types';
import { v4 } from 'uuid';



function Start(props){
  let _name = null;

  function handleNewNameSubmission(event) {
    event.preventDefault();
    props.onNewNameCreation({name: _name.value, id: v4()});
    _name.value = '';
  }

  return (
    <div>
      <form onSubmit={handleNewNameSubmission} action="/">
      <label>
        <input
          type='text'
          id='name'
          placeholder='Tamagotchi name'
          ref={(input) => {_name = input;}}/>
          </label>
        <button type='submit'>Name me!</button>
      </form>
    </div>

  );
}

Start.propTypes = {
  onNewNameCreation: PropTypes.func
};

export default Start;
