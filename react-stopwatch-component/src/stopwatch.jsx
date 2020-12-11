import React from 'react';

export default class Stopwatch extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isRunning: false, time: 0 };

    this.handleClick = this.handleClick.bind(this);
    this.handleClick2 = this.handleClick2.bind(this);
  }

  handleClick() {
    this.setState({
      isRunning: !this.state.isRunning
    });
    if (!this.state.isRunning) {
      this.timerID = setInterval(
        () => this.tick(),
        1000
      );
    } else {
      clearInterval(this.timerID);
    }
  }

  tick() {
    this.setState({
      time: this.state.time + 1
    });
  }

  handleClick2() {
    if (!this.state.isRunning) {
      this.setState({
        time: 0
      });
    }
  }

  render() {
    let icon;
    if (this.state.isRunning) {
      icon = 'fas fa-pause';
    } else {
      icon = 'fas fa-play';
    }

    return (
      <div className='flex'>
        <div className='circle' name='reset' onClick={this.handleClick2}>
          <div className='time'>
            {this.state.time}
          </div>
        </div>
        <div className='margin'>
          <i onClick={this.handleClick} name='startStop' className={icon}></i>
        </div>
      </div>
    );
  }
}
