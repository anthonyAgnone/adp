import React, { useState } from "react";
import Logo from "./Logo";
import Nav from "./Nav";

const Header = () => {
  const [expanded, setExpanded] = useState(false);
  const handleClick = () => {
    setExpanded(!expanded);
  };
  return (
    <header
      className={`flex f-d-c flex-center ${
        expanded ? "expanded" : "collapsed"
      }`}>
      <Nav handleClick={() => handleClick} />
      <Logo handleClick={handleClick} expanded={expanded} />
    </header>
  );
};

export default Header;
