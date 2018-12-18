import React from 'react';
import ReactDOM from 'react-dom';
import '../css/index.css';
import Game from './modules/game.jsx';

console.log('launch app.js');

class App extends React.Component {
  render() {
    return (
      <div className="main">
        <h1>Hello TicTacToe!</h1>
        <h2>Bye!</h2>
        <Game />
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
