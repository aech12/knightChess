import React from 'react';
import './All.css';

const Square = ({black, children}) => {
  const backgroundColor = black? 'black':'white';
  const knightColor = black? 'white':'black';
  return (
    <div
      style={{background: backgroundColor, color: knightColor, 
      width:'100%', height:'100%'}}
    >
      {children}
    </div>
  )
}


export default Square