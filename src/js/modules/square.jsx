import React from 'react';
import PropTypes from 'prop-types';

export default function Square(props) {
  const style = props.isInWinnerLine ? { "color": "blue", "fontWeight": "bold", } : {};
  return (
    <button className="square" style={style} onClick={props.onClick}>
      {props.value}
    </button>
  );
}

Square.propTypes = {
  "isInWinnerLine": PropTypes.bool,
  "onClick": PropTypes.func,
  "value": PropTypes.string,
};
