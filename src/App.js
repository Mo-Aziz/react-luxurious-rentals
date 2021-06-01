 
 import React from 'react';
 import GlobalStyle from './globalStyles';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import {slideData  } from "./data/silderData";




function App() {
  return (
   <>
   <GlobalStyle/>
   <Navbar/>
   <Hero slides={slideData}/>
   </>
  );
}

export default App;
