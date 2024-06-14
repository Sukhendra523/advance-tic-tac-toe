import { useEffect } from "react";
import useTicTacToe from "../../Hooks/useTicTacToe";
import "./styles.scss";

function TicTacToe({boardSize = 3}) {
  const { board, handleClick, resetGame, getStatusMessage } =
    useTicTacToe(boardSize);

  useEffect(() => {
    resetGame();
  }, [boardSize])
  

  return (
    <div className="game" style={{"--board-size": boardSize}}>
      <div className="status">
        {getStatusMessage()}
        <button className="reset-button" onClick={resetGame}>
          Reset Game
        </button>
      </div>

      <div className="board">
        {board.map((b, index) => {
          return (
            <button
              className="cell"
              key={index}
              onClick={() => handleClick(index)}
              disabled={b !== null}
            >
              {b}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default TicTacToe;
