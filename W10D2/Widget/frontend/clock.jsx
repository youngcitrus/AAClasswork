import React from 'react';


class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date()
    };
  }

  render () {
    return (
      <div className='DogClock'>
          <h1> Ding Dog Clock  </h1>
          <div className='clocko'>
            <div className="timeCont" >
              <h2 > Time: </h2>
              <h2 >{this.state.date.getHours()}: {this.state.date.getMinutes()}: {this.state.date.getSeconds()} PDT</h2>
            </div>
            <div className="timeCont" >
              <h2> Date:  </h2>
              <h2 >{this.state.date.toDateString()}</h2>
            </div>
        </div>
      </div>
    );
  }

  tick () {
    this.setState({
      date: new Date()
    });
  }

  componentDidMount() {
    this.interval = setInterval(this.tick.bind(this), 1000);
    // console.log(this.interval);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }
}

export default Clock;