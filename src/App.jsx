import "./styles/App.css";
import { Nav } from "./components/Nav";
import { useState } from "react";
import { Header } from "./components/Header";

const App = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [buttonContext, setButtonContext] = useState("≡");

  return (
    <div className="App">
      {/* <div className="header">
        <p className="headerText">header</p>
        <button onClick={handleIsOpen}>{buttonContext}</button>
      </div> */}
      <Header setIsOpen={setIsOpen} isOpen={isOpen} />
      <Nav isOpen={isOpen} />
    </div>
  );
};

export default App;
