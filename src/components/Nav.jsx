import React, { useState, useEffect } from "react";

export const Nav = ({ isOpen }) => {
  const [name, setName] = useState("closeNav");
  useEffect(() => {
    if (name === "openNav") {
      setName("closeNav");
    } else {
      setName("openNav");
    }
    console.log(name);
  }, [isOpen]);

  return (
    <div className={name}>
      <div className="navText">Home</div>
      <div className="navText">About</div>
      <div className="navText">Work</div>
    </div>
  );
};
