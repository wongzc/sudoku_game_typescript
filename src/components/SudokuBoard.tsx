import React from "react";
import SudokuCell from "./SudokuCell";


const SudokuBoard: React.FC = () => {
  const [board, setBoard] = React.useState<number[][]>(
    Array(9).fill(Array(9).fill(0))
  );

  const [selectedCell, setSelectedCell] = React.useState<number[]>([9,9])
  const selectedRow=selectedCell[0]
  const selectedCol=selectedCell[1]

  const isValidMove = (board: number[][], row: number, col: number,num: number): boolean => {
    for (let x = 0; x < 9; x++) {
      if (board[row][x] === num || board[x][col] === num) {
        return false;
      }
      const startRow = 3 * Math.floor(row / 3);
      const startCol = 3 * Math.floor(col / 3);
      for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
          if (board[startRow + i][startCol + j] === num) {
            return false;
          }
        }
      }
    }
    return true;
  };

  const handleCellChange = (row: number, col: number, value: number) => {
    if (isNaN(value)) {
      const newBoard = board.map((r, i) =>
        r.map((cell, j) => (i === row && j === col ? 0  : cell))
      );
      setBoard(newBoard);
    }
    else if (isValidMove(board, row, col, value)) {
      const newBoard = board.map((r, i) =>
        r.map((cell, j) => (i === row && j === col ? value : cell))
      );
      setBoard(newBoard);
    }
  };

  return (
  <div className="sudoku-board">
    {board.map((row, i) => (
      <div key={i} className="row">
        {row.map((cell, j) => (
          <SudokuCell
            key={`${i}-${j}`}
            row={i}
            col={j}
            value={cell}
            onChange={handleCellChange}
            isThirdColumn={(j + 1) % 3 === 0}
            isThirdRow={(i + 1) % 3 === 0}
            setSelectedCell={setSelectedCell}
            selectedRow={selectedRow}
            selectedCol={selectedCol}

          />
        ))}
      </div>
    ))}
  </div>)
};

export default SudokuBoard;
