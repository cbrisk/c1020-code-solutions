import React from 'react';

export default class ValidatedInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = { password: '' };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ password: event.target.value });
  }

  render() {
    let icon;
    let message;
    if (this.state.password === '') {
      icon = 'fas fa-times red';
      message = 'A password is required';
    } else if (!/\w{8,}/.test(this.state.password)) {
      icon = 'fas fa-times red';
      message = 'Your password is too short';
    } else {
      icon = 'fas fa-check green';
      message = '';
    }
    return (
      <form>
        <div>
          <label htmlFor="password">
            Password:
          </label>
        </div>
        <input type="password" id="password" value={this.state.value} onChange={this.handleChange} />
        <i className={icon}></i>
        <p className='red'>{message}</p>
      </form>
    );
  }
}
