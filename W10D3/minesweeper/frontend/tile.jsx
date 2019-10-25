import React from 'react';

export default class Tile extends React.Component{
  constructor(props){
    
    super(props);
    // this.props.updateGame = this.props.updateGame.bind(this);
  }

  handleClick(e){
    let flagged = false;
    if (e.getModifierState("Alt")) flagged = true;
    
    this.props.updateGame(this.props.tile, flagged);
  }
  render(){
    let status;
    let icon='';
    if (this.props.tile.bombed && this.props.tile.explored){
      status = "bombed";
      icon = "\uD83D\uDCA3";
    }
    else if (this.props.tile.explored) {
      status = "explored";
      icon = this.props.tile.adjacentBombCount();
    }
    else if (this.props.tile.flagged) {
      status = "flagged";
      icon = "\u2691";
    }
    else status = "unexplored";

    
    return (
      <div className={`tile ${status}`} 
        onClick = {(e)=> this.handleClick(e)}
      >
        {icon}
      </div>
    );
  }
}