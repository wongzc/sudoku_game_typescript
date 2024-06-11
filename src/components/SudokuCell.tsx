import React from "react";

interface SudokuCellProps {
  row: number;
  col: number;
  value: number;
  onChange: (row: number, col: number, value: number) => void;
  isThirdColumn: boolean;
  isThirdRow: boolean;
  setSelectedCell: ([]) => void;
  selectedRow: number;
  selectedCol: number;
}

const SudokuCell: React.FC<SudokuCellProps> = ({
  row,
  col,
  value,
  onChange,
  isThirdColumn,
  isThirdRow,
  setSelectedCell,
  selectedRow,
  selectedCol,
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = parseInt(e.target.value, 10);
    if (isNaN(val) || val >= 1 && val <= 9) {
      onChange(row, col, val);
    }
  };

  const haha = () => {
    setSelectedCell([row,col])
  }


  return (
    <input
     onClick = {haha}
      type="text"
      maxLength={1}
      className=
      {`sudoku-cell 
        ${isThirdColumn ? 'third-column' : ''} 
        ${isThirdRow ? 'third-row' : ''} 
        ${row==selectedRow? 'selected-cell':''} 
        ${col==selectedCol? 'selected-cell':''} 
      ` }
      value={value === 0 ? "" : value}
      onChange={handleChange}
      data-row={row}
      data-col={col}
    />
  );
};

export default SudokuCell;
