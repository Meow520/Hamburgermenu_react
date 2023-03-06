import React from "react";

export const Nav = ({isOpen }) => {

  return (
    <div className="nav" hidden={!isOpen}>
      <div className="navText">Home</div>
      <div className="navText">About</div>
      <div className="navText">Work</div>
    </div>
  );
};
