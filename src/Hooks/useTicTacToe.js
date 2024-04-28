import { useState } from "react";

const initialBoard = () => Array(9).fill(null);

const useTicTacToe = () => {
  const [board, setBoard] = useState(initialBoard());
  const [isXTurn, setIsXTurn] = useState(true);
  const [winner, setWinner] = useState(null);

    const WINNING_PATTERNS = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

  const currentPlayer = isXTurn ? "X" : "O";

  const calculateWinner = (currentBoard) => {
    for (let i = 0; i < WINNING_PATTERNS.length; i++) {
      const [a, b, c] = WINNING_PATTERNS[i];
      if (
        currentBoard[a] &&
        currentBoard[a] === currentBoard[b] &&
        currentBoard[a] === currentBoard[c]
      ) {
        return currentBoard[a];
      }
    }

    return null;
  };

  const handleClick = (index) => {
    // Retrun if winner already exists
    if (winner) return;

    const updatedBoard = [...board];
    updatedBoard[index] = currentPlayer;
    setBoard(updatedBoard);

    const winnerName = calculateWinner(updatedBoard);

    // If winner found set winner and return skip change the trun
    if (winnerName) {
      setWinner(winnerName);
      return;
    }
    // Change turn if no winner found but empty spaces are left
    board.includes(null) && setIsXTurn(!isXTurn);
  };

  const getStatusMessage = () => {
    if (winner) return `Player ${winner} wins!`;

    // if No more empty space are left then it's draw
    if (!board.includes(null)) return `It's a draw`;

    // If when nigther wins nore draw the tur changed
    return `Player ${currentPlayer} Turn`;
  };

  const resetGame = () => {
    setBoard(initialBoard);
    setIsXTurn(true);
    setWinner(null);
  };

  return { board, handleClick, getStatusMessage, resetGame };
};

export default useTicTacToe;
