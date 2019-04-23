import React, { Component } from "react";
import { Link } from "react-router-dom";
export default class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      expanded: false
    };
  }

  handleClick = () => {
    this.setState(prevState => ({
      expanded: !prevState.expanded
    }));
  };

  render() {
    return (
      <header
        className={`flex f-d-c flex-center ${
          this.state.expanded ? "expanded" : "collapsed"
        }`}>
        <Link to="/">Home</Link>
        <Link to="/">Commissions</Link>
        <div className="logo w100">
          <button className="logoButton w-h100" onClick={this.handleClick}>
            A D
          </button>
        </div>
        <Link to="/">Patreon</Link>
        <Link to="/">Contact</Link>
      </header>
    );
  }
}
