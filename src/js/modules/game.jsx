import React from 'react';

export default class Game extends React.Component {
  render() {
    return (
      <div className="game">
        <div className="game-board">
          <div className="game-info">
            <div>Show gameinfo: Now player X</div>
          </div>
        </div>
      </div>
    );
  }
}
