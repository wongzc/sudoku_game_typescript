import React from "react";
import { IoMdGrid } from "react-icons/io";
import "./Logo.css";

const Logo: React.FC = () => {
  return (
    <div className="logo">
      <IoMdGrid className="logo-icon" />
      <h1 className="logo-text">Sudoku Game</h1>
    </div>
  );
};

export default Logo;
