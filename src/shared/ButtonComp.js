import React from 'react';

function ButtonComp(props) {
  return <button id = 'butt' onClick = {props.onClick}>{props.text}</button>;
}

export default ButtonComp