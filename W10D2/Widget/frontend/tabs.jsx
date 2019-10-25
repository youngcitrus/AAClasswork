import React from 'react';

class Tabs extends React.Component {
  constructor(props){
    super(props);
    //this.props.tabArr[0].title,
    this.obs = this.props.tabs;
    // debugger
    this.state = {
      index: 0,
      title: '',
      content: this.obs[0].content
    };
  }

  getContent() {
    this.setState( { 
      // title: this.obs[this.state.index].title,
      content: this.obs[this.state.index].content 
    } );
  }

  setIndex (idx){
    this.setState({ index: idx }, this.getContent);
  }

  render () {
    return (
      <div className="tabo"> 
        <ul className = "tabCont">
          <h1 onClick={() => this.setIndex(0) } >One</h1>
          <h1 onClick={() => this.setIndex(1) }>Two</h1>
          <h1 onClick={() => this.setIndex(2) }>Three</h1>
        </ul>
          <h2> { this.state.content } </h2>

      </div >
    )
  }
}

export default Tabs;