import React, { Component } from "react";
import { Wrapper, Button, Menu, MenuItem } from "react-aria-menubutton";
// import Nav from "./Nav";

const menuItemWords = ["foo", "bar", "baz"];
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

  handleSelection = (value, event) => {
    console.log(value, event);
  };

  render() {
    const menuItems = menuItemWords.map((word, i) => {
      return (
        <li key={i}>
          <MenuItem className="navMenuItem">{word}</MenuItem>
        </li>
      );
    });
    return (
      <header>
        {/* <Nav /> */}
        <div className="crossSection">
          <div className="verticalTop" />
          <div className="verticalBottom" />
          <div className="horizontalLeft" />
          <div className="horizontalRight" />
        </div>
        <Wrapper className="logo" onSelection={this.handleSelection}>
          <Button className="logoButton">A D</Button>
          <Menu className="navMenu">
            <ul>{menuItems}</ul>
          </Menu>
        </Wrapper>
      </header>
    );
  }
}
