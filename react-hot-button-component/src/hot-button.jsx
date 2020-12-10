import React from 'react';

export default class HotButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { clicks: 0 };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({
      clicks: this.state.clicks + 1
    });
  }

  render() {
    let className;
    if (this.state.clicks >= 15) {
      className = 'hot-button nuclear';
    } else if (this.state.clicks >= 12) {
      className = 'hot-button hot';
    } else if (this.state.clicks >= 9) {
      className = 'hot-button warm';
    } else if (this.state.clicks >= 6) {
      className = 'hot-button tepid';
    } else if (this.state.clicks >= 3) {
      className = 'hot-button cool';
    } else {
      className = 'hot-button cold';
    }
    return (
      <button onClick={this.handleClick} className={className}>
        Hot Button
      </button>
    );
  }
}
