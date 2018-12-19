import React from 'react';
import Square from './square.jsx';

export default class Board extends React.Component {
  renderSquare(i) {
    return (
      <Square
        value={this.props.squares[i]}
        onClick={() => this.props.onClick(i)}
        key={i}
        isInWinnerLine={this.props.winLine.indexOf(i) !== -1}
      />
    );
  }

  render() {
    let rows = [];
    for (const i in [...Array(3).keys()]) {
      let cols = [];
      for (const j in [...Array(3).keys()]) {
        const k = parseInt(i) * 3 + parseInt(j);
        cols.push(this.renderSquare(k));
      }
      rows.push(
        <div className="board-row" key={i}>
          {cols}
        </div>
      );
    }
    return (
      <div>
        {rows}
      </div>
    );
  }
}
