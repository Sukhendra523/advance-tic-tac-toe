import "./App.css";
import TicTacToe from "./components/TicTacToe";

function App() {
  const multiTicTacToe = [3, 4, 5];
  return (
    <div>
      {multiTicTacToe.map((size) => (
        <>
          <h1>
            {size} * {size}
          </h1>
          <TicTacToe boardSize={size} />
        </>
      ))}
    </div>
  );
}

export default App;
