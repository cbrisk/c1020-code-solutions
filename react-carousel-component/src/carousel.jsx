import React from 'react';

export default class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = { indexOfDisplayed: 0 };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    clearInterval(this.ID);
    let newIndex;
    if (event.target.getAttribute('data-info') === 'left') {
      newIndex = this.state.indexOfDisplayed > 0 ? this.state.indexOfDisplayed - 1 : this.props.imageList.length - 1;
    } else if (event.target.getAttribute('data-info') === 'right') {
      newIndex = this.state.indexOfDisplayed < this.props.imageList.length - 1 ? this.state.indexOfDisplayed + 1 : 0;
    } else {
      newIndex = parseInt(event.target.getAttribute('id'));
    }
    this.setState({
      indexOfDisplayed: newIndex
    }, () => {
      this.ID = setInterval(
        () => this.move(),
        3000
      );
    });
  }

  componentDidMount() {
    this.ID = setInterval(
      () => this.move(),
      3000
    );
  }

  move() {
    const newIndex = this.state.indexOfDisplayed < this.props.imageList.length - 1 ? this.state.indexOfDisplayed + 1 : 0;
    this.setState({
      indexOfDisplayed: newIndex
    });
  }

  render() {
    let className;
    return (
      <div className="container">
        <div className="row one">
          <i data-info="left" className="size1 fas fa-chevron-left" onClick={this.handleClick}></i>
          <img src={`../src/${this.props.imageList[this.state.indexOfDisplayed]}`}></img>
          <i data-info="right" className="size1 fas fa-chevron-right" onClick={this.handleClick}></i>
        </div>
        <div className="row two">
          {
            this.props.imageList.map((item, index) => {
              className = (index === this.state.indexOfDisplayed) ? 'size2 fas fa-circle' : 'size2 far fa-circle';
              return <i key={index} id={index} className={className} onClick={this.handleClick}></i>;
            })
          }
        </div>
      </div>
    );
  }
}
