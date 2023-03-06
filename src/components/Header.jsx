import React, { useState } from "react";
import "../styles/App.css";

export const Header = ({ setIsOpen, isOpen }) => {
  const [button, setButton] = useState("≡");

  // useEffect(() => {
  //   console.log(button);
  // }, [button]);
  const handleIsOpen = () => {
    setIsOpen(!isOpen);
    if (button === "≡") {
      setButton("x");
    } else {
      setButton("≡");
    }
  };

  return (
    <div className="header">
      <p className="headerText">header</p>
      <button onClick={handleIsOpen}>{button}</button>
    </div>
  );
};
