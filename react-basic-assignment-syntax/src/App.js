import React, { Component } from 'react';
import './App.css';
import UserOutput from './UserOutput/UserOutput';
import UserInput from './UserInput/UserInput';

class App extends Component {

  state = {
    username: 'jasmeet1'
  } 

  onChangeHandler = event => {
    this.setState({
      username: event.target.value
    })
  }

  render() {
    const style = {
      backgroundColor: 'red',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    }
    return (
      <div className="App">
        <UserInput
        changed={this.onChangeHandler} 
        name={this.state.username} />
        <UserOutput style={style}
        username={this.state.username} />
      </div>
    );
  }
}

export default App;
