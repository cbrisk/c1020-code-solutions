import React from 'react';

export default class Accordion extends React.Component {
  constructor(props) {
    super(props);
    this.state = { indexOfDisplayed: null };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    this.setState({
      indexOfDisplayed: event.target.getAttribute('id')
    });
    let className = 'hidden';
    if (id === this.state.indexOfDisplayed) {
      className = '';
    }
  }


  render() {
    const list = this.props.list.map((item, index) =>
      <div key={item.topic}>
        <li className='topic' onClick={this.handleClick} id={index}>
          {item.topic}
        </li>
        <li className={className}>
          {item.details}
        </li>
      </div>
    );

    return (
      <ul>
        {list}
      </ul>
    );
  }
}
