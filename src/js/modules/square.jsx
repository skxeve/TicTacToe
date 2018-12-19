import React from 'react';

export default function Square(props) {
  const style = props.isInWinnerLine ? { "color": "blue", "fontWeight": "bold", } : {};
  return (
    <button className="square" style={style} onClick={props.onClick}>
      {props.value}
    </button>
  );
}
