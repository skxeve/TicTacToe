import React from 'react';
import Board from './board.jsx';
import calculateWinner from './calculateWinner.js';

export default class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      "history": [{
        "squares": Array(9).fill(null),
        "recent": null,
      }],
      "stepNumber": 0,
      "xIsNext": true,
      "orderAsc": true,
    };
  }

  handleClick(i) {
    const history = this.state.history.slice(0, this.state.stepNumber + 1);
    const current = history[history.length - 1];
    const squares = current.squares.slice();
    if (calculateWinner(squares).winner || squares[i]) {
      return;
    }
    squares[i] = this.state.xIsNext ? 'X' : 'O';
    this.setState({
      "history": history.concat([{
        "squares": squares,
        "recent": i,
      }]),
      "stepNumber": history.length,
      "xIsNext": !this.state.xIsNext,
    });
  }

  jumpTo(step) {
    this.setState({
      "stepNumber": step,
      "xIsNext": (step % 2) === 0,
    });
  }

  toggleHistory() {
    this.setState({
      "orderAsc": !this.state.orderAsc,
    });
  }

  render() {
    const history = this.state.history;
    const current = history[this.state.stepNumber];
    const calcWinner = calculateWinner(current.squares);


    let moves = history.map((step, move) => {
      const desc = move ?
        'Go to move #' + move + '(' + (step.recent % 3) + ',' + Math.floor(step.recent / 3) + ')':
        'Go to game start';
      const style = this.state.stepNumber === move ?
        { "fontWeight": "bold", }:
        {};
      return (
        <li key={move}>
          <button style={style} onClick={() => this.jumpTo(move)}>{desc}</button>
        </li>
      );
    });
    if (!this.state.orderAsc) {
      moves = moves.reverse();
    }

    const status = calcWinner.winner ?
      'Winner: ' + calcWinner.winner :
      calcWinner.isDraw ?
        'Draw Game' :
        'Next player: ' + (this.state.xIsNext ? 'X' : 'O');

    return (
      <div className="game">
        <div className="game-board">
          <Board
            squares={current.squares}
            winLine={calcWinner.line}
            onClick={(i) => this.handleClick(i)}
          />
        </div>
        <div className="game-info">
          <div>{status}</div>
          <div>
            <button onClick={() => this.toggleHistory()}>toggle</button>
          </div>
          <ol>{moves}</ol>
        </div>
      </div>
    );
  }
}
