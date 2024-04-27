import { useState } from "react";

const initialBoard = new Array(9).fill(null);


const useTicTacToe = () => {
    const [board, setBoard] = useState(initialBoard);
    const [isXTurn, setIsXTurn] = useState(true);

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
    const currentPlayer = isXTurn ? 'X' : 'O';

    const calculateWinner =(currentBoard)=>{
        WINNING_PATTERNS.forEach((winning_pattern)=>{
            const [a,b,c]=winning_pattern;
            if(currentBoard[a] && currentBoard[a]=== currentBoard[b] && currentBoard[a]===currentBoard[c])
                return currentBoard[a]
        })

        return null;
    }

    const handleClick = ( index )=>{
        const updatedBoard = [...board]
        updatedBoard[index] = currentPlayer;

        const winner = calculateWinner(updatedBoard);
        if(winner) return;
        setIsXTurn(!isXTurn);
        setBoard(updatedBoard)
    }

    const getStatusMessage = ()=>{
        const winner = calculateWinner(board);
        if (winner) return`Player ${winner} wins!`;
        if (!board.includes(null)) return `It's a draw`;
        return `Player ${currentPlayer} Turn`
    }

    const resetGame = ()=>{
        setBoard(initialBoard);
        setIsXTurn(true);
    }


  return {board,handleClick,getStatusMessage,resetGame}
}

export default useTicTacToe