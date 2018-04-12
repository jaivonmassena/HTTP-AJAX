import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import DisplayAll from './DisplayAll';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      friends: [],

    };
  }
  componentDidMount(){
    axios
    .get(`http://localhost:5000/friends`)
    .then(friend => {
      this.setState( {friends: friend.data })
    })
  }


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>

        < DisplayAll friends= {this.state.friends}/>
        
      </div>
    );
  }
}

export default App;
