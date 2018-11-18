import React, {Component} from 'react';
import './All.css'
import Square from './Square';
import Knight from './Knight';

class Board extends Component {
  renderSquare = (i, [knightX, knightY]) => {
    const x = i%8;
    const y = Math.floor(i/8);
    const isKnightHere = (x===knightX && y===knightY);
    const black = (x+y)%2 === 1;
    const knight = isKnightHere? <Knight/>:null  

    return (
      <div key={i} style={{width:'12.5%', height:'12.5%'}}>
        <Square black={black}>
          {knight}
        </Square>
      </div>
    )
  }
  render() {
    const squares = [];
    for (let i=0; i<64; i++) {
      squares.push(this.renderSquare(i, this.props.knightPosition))
    }
    return (
      <div 
        style={{width:'400px', height:'400px', border:'2px green solid',
        display:'flex', flexWrap:'wrap'}}>
        {squares}
      </div>
    );
  }
}

export default Board;