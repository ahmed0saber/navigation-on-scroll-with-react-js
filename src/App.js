import React from 'react';
import { BrowserRouter } from "react-router-dom";
import Scrollable from "./components/scrollable"

const App = () => {
  return (
    <BrowserRouter>
      <Scrollable/>
    </BrowserRouter>
  )
}

export default App
