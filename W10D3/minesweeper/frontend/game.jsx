import React from 'react';
import * as Minesweeper from '../minesweeper';
import Board from './board';

export default class Game extends React.Component {
  // Are we doing this correctly?? We don't have any props at the moment
  constructor(props) {
    super(props);
    this.state = {
      board: new Minesweeper.Board(10, 20),

    };
    this.updateGame = this.updateGame.bind(this);
    this.componentDidUpdate = this.componentDidUpdate.bind(this);
    this.newGame = this.newGame.bind(this);
    //wow can we do this
  }

  newGame() {
    this.setState(
      {board: new Minesweeper.Board(10, 20)}
    )
  }
  
  

  componentDidUpdate() {
      // setTimeout(() => this.newGame(), 1000);
  }

  updateGame(tile, flagging){
    if (flagging) tile.toggleFlag();
    else tile.explore();
    
    this.setState(
      { board: this.state.board}
      )
    }

    
    
    render() {
      let gameOver = '';
      let msg;
      if (this.state.board.won()){
        gameOver='modal';
        msg = 'you won gg'
      } else if (this.state.board.lost()){
        gameOver = 'modal';
        msg = 'you lost gg'
      }
      return(
        <div className={`${gameOver}`}>
          <p>{msg}</p>
          <button onClick = {() => this.newGame()}>New Game</button>
          <Board 
            board = {this.state.board}
            updateGame = {this.updateGame}
            />
        
      </div>
    );
  }
}