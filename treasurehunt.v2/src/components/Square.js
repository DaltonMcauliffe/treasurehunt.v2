import React, { useState } from "react";
const Square = ({ value, index, handleSquareClick }) => {
  
  
  
  
    const handleCLick = () => {
  handleSquareClick(index)
  };

  return (
    <div className="square" onClick={handleCLick}>
      {value}
    </div>
  );
};

export default Square;
