import React from 'react';

export default class AppDrawer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isMenuDisplayed: false };

    this.handleClickHideMenu = this.handleClickHideMenu.bind(this);
    this.handleClickShowMenu = this.handleClickShowMenu.bind(this);
  }

  handleClickHideMenu() {
    this.setState({
      isMenuDisplayed: false
    });
  }

  handleClickShowMenu() {
    this.setState({
      isMenuDisplayed: true
    });
  }

  render() {
    if (this.state.isMenuDisplayed) {
      return (
        <div className="flex">
          <div className="menu">
            <a className="large" onClick={this.handleClickHideMenu}>Menu</a>
            <a onClick={this.handleClickHideMenu}>About</a>
            <a onClick={this.handleClickHideMenu}>Get Started</a>
            <a onClick={this.handleClickHideMenu}>Sign In</a>
          </div>
          <div className="background" onClick={this.handleClickHideMenu}>
          </div>
        </div>
      );
    }
    return (
      <i className="fas fa-bars" onClick={this.handleClickShowMenu}></i>
    );
  }
}
