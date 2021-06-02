import React, { useState } from "react";
import GlobalStyle from "./globalStyles";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import { slideData } from "./data/silderData";
import { InfoData } from "./data/InfoData";
import Dropdown from "./components/Dropdown/Dropdown";
import InfoSection from "./components/InfoSection/InfoSection";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <GlobalStyle />
      <Navbar toggle={toggle} />
      <Dropdown isOpen={isOpen} toggle={toggle} />
      <Hero slides={slideData} />
      <InfoSection {...InfoData} />
    </>
  );
}

export default App;
