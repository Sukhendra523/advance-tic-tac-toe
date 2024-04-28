import { useState } from "react";

const initialBoard = (size) => Array(size * size).fill(null);

const useTicTacToe = (boardSize) => {
  const [board, setBoard] = useState(initialBoard(boardSize));
  const [isXTurn, setIsXTurn] = useState(true);
  const [winner, setWinner] = useState(null);

  //(total number of steps need to reach next desired element ) + ( value of iterator )
  const WINNING_PATTERNS = generateWinningPatterns();

  function generateWinningPatterns() {
    const patterns = [];

    for (let i = 0; i < boardSize; i++) {
      const horizontalPattern = [];
      const verticalPattern = [];
      for (let j = 0; j < boardSize; j++) {
        //(total number of steps need to reach next desired element ) + ( value of iterator )
        horizontalPattern.push(i * boardSize + j);
        verticalPattern.push(j * boardSize + i);
      }
      patterns.push(horizontalPattern, verticalPattern);
    }

    const diagonal1 = [];
    const diagonal2 = [];
    for (let i = 0; i < boardSize; i++) {
      // (total number of more steps need to reach next desired element ) = ( iterator )* (number of more steps need to reach next desired element )
      diagonal1.push(i * (boardSize + 1));
      diagonal2.push((i + 1) * (boardSize - 1));
    }
    patterns.push(diagonal1, diagonal2);

    return patterns;
  }

  const currentPlayer = isXTurn ? "X" : "O";

  const calculateWinner = (currentBoard) => {
    for (let i = 0; i < WINNING_PATTERNS.length; i++) {
      const pattern = WINNING_PATTERNS[i];
      let countX = 0;
      let countO = 0;
      for (let j = 0; j < pattern.length; j++) {
        const cellValue = currentBoard[pattern[j]];
        if (cellValue === "X") countX++;
        if (cellValue === "O") countO++;
      }

      if (countX === boardSize) return "X";
      if (countO === boardSize) return "O";
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
    setBoard(initialBoard(boardSize));
    setIsXTurn(true);
    setWinner(null);
  };

  return { board, handleClick, getStatusMessage, resetGame };
};

export default useTicTacToe;
