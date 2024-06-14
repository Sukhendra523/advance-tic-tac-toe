import React, { useState } from "react";
import "./App.css";
import AddTicTacToe from "./components/AddTicTacToe";
import TicTacToe from "./components/TicTacToe";
import { defaultBoxSize } from "./constant";

function App() {
  const [multiTicTacToe, setMultiTicTacToe] = useState(defaultBoxSize);
  
  return (
    <div>
      <AddTicTacToe setMultiTicTacToe={setMultiTicTacToe}/>
      {multiTicTacToe.map((size,i) => (
        <React.Fragment key={i}>
          <h1>
            {size} * {size}
          </h1>
          <TicTacToe boardSize={size} />
        </React.Fragment>
      ))}
    </div>
  );
}

export default App;
