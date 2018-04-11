import React, { Component } from 'react';
import PlayersList from './PlayersList';

import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      players: [
        { id: 1, name: 'Alan', score: 0 },
        { id: 2, name: 'Bob', score: 0 },
        { id: 3, name: 'Clyde', score: 0 },
        { id: 4, name: 'Dan', score: 0 },
      ],
    };
  }

  findPlayer = playerId => player => player.id === playerId

  increaseScore = (playerId) => {
    const { players } = this.state;

    players.find(this.findPlayer(playerId)).score += 1;

    this.setState({ players });
  }

  decreaseScore = (playerId) => {
    const { players } = this.state;
    const selectedPlayer = players.find(this.findPlayer(playerId));

    if (selectedPlayer.score > 0) {
      selectedPlayer.score -= 1;

      this.setState({ players });
    }
  }

  render() {
    const { increaseScore, decreaseScore } = this;

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">{'Welcome to React'}</h1>
        </header>

        <div className="App-intro">
          <PlayersList
            players={this.state.players}
            handleScore={{ increaseScore, decreaseScore }}
          />
        </div>
      </div>
    );
  }
}

export default App;
