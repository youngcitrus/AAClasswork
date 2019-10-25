import React from 'react';
import Tile from './tile';

export default class Board extends React.Component{
  constructor(props){
    
    super(props);

  }

  render(){
    const boardGrid = this.props.board.grid
    
    return(
      <div>
        {boardGrid.map((row, idx) => (
          <div key={idx} className="row">
            {row.map((tile, jdx) => (
              <Tile 
                key = {[idx, jdx]}
                tile = {tile}
                updateGame={this.props.updateGame}
              />
            ))}
          </div>
        ))}
      </div>
    );
  }

}