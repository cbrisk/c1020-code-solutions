import React from 'react';

export default class Accordion extends React.Component {
  constructor(props) {
    super(props);
    this.state = { indexOfDisplayed: null };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    const current = parseInt(event.target.getAttribute('id'));
    const previous = this.state.indexOfDisplayed;
    let newIndex;
    if (current === previous) {
      newIndex = null;
    } else {
      newIndex = current;
    }
    this.setState({
      indexOfDisplayed: newIndex
    });
  }

  render() {
    let className;
    return (
      <ul>
        {
          this.props.list.map((item, index) => {
            className = (index === this.state.indexOfDisplayed) ? '' : 'hidden';
            return (
              <div key={item.topic}>
                <li className='topic' onClick={this.handleClick} id={index}>
                  {item.topic}
                </li>
                <li className={className}>
                  {item.details}
                </li>
              </div>
            );
          })
        }
      </ul>
    );
  }
}
