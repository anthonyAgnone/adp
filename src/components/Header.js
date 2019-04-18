import React, { Component } from "react";
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
      <header className={this.state.expanded ? "expanded" : "collapsed"}>
        <div className="logo center-both w100">
          <button className="logoButton w-h100" onClick={this.handleClick}>
            A D
          </button>
        </div>
      </header>
    );
  }
}
