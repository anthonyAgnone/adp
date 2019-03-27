import React from "react";
import Nav from "./Nav";

const Header = () => {
  return (
    <header>
      {/* <Nav /> */}
      <div className="crossSection">
        <div className="verticalTop" />
        <div className="verticalBottom" />
        <div className="horizontalLeft" />
        <div className="horizontalRight" />
      </div>
      <div className="logo">
        <h1>AD</h1>
      </div>
    </header>
  );
};

export default Header;
