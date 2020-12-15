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
  }


  render() {
    return (
      <ul>
        {
          let className;
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
          });
        }
      </ul>
    );
  }
}
