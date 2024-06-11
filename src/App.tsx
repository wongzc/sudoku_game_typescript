import React, { useState } from "react";
import SudokuBoard from "./components/SudokuBoard";
import "./App.css";
import Logo from "./components/Logo";

const App: React.FC = () => {


  return (
    <div className="App">
      <header className="App-header">
        <Logo />
      </header>
      <SudokuBoard/>
    </div>
  );
};

export default App;
