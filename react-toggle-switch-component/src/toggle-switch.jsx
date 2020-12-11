import React from 'react';

export default class ToggleSwitch extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isToggled: true };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({
      isToggled: !this.state.isToggled
    });
  }

  render() {
    let className1;
    let className2;
    let text;
    if (this.state.isToggled) {
      className1 = 'switch on';
      className2 = 'round right';
      text = 'ON';
    } else {
      className1 = 'switch off';
      className2 = 'round left';
      text = 'OFF';
    }

    return (
      <div className='flex'>
        <div onClick={this.handleClick} className={className1}>
          <div className={className2}>
          </div>
        </div>
        <span className='margin'>
          {text}
        </span>
      </div>
    );
  }
}
