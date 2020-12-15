import React from 'react';

export default class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = { indexOfDisplayed: null };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    this.setState({
      indexOfDisplayed: newIndex
    });
  }
  // "size2 fas fa-circle"
  // "size2 far fa-circle"
  render() {
    return (
      <div className="container">
        <div className="row one">
          <i className="size1 fas fa-chevron-left" onClick={this.handleClick}></i>
          <img src={currentImg}>
          <i class="size1 fas fa-chevron-right" onClick={this.handleClick}></i>
        </div>
        <div class="row two">
          <i id={0} className={className} onClick={this.handleClick}></i>
          <i id={1} className={className} onClick={this.handleClick}></i>
          <i id={2} className={className} onClick={this.handleClick}></i>
          <i id={3} className={className} onClick={this.handleClick}></i>
          <i id={4} className={className} onClick={this.handleClick}></i>
        </div>
      </div>
    );
  }
}
