import React, { useState } from "react";
import "./App.css";
import Square from "./components/Square";

const App = () => {
  const [board, setBoard] = useState([
    "?",
    "?",
    "?",
    "?",
    "?",
    "?",
    "?",
    "?",
    "?",
  ]);

  const [shipLocation, setShipLocation] = useState(
    Math.floor(Math.random() * board.length)
  );

  const[robotLocation, setRobotLocation] = useState(
    Math.floor(Math.random() * board.length)
  );

  const handleSquareClick = (clickedSquareIndex) => {
    let updatedBoard = [...board];
    if (clickedSquareIndex === shipLocation) {
      updatedBoard[clickedSquareIndex] = "🚀";
      setBoard(updatedBoard);
    } else if (clickedSquareIndex === robotLocation) {
      updatedBoard[clickedSquareIndex] = "🤖";
      setBoard(updatedBoard);
    } else {
      updatedBoard[clickedSquareIndex] = "👽";
      setBoard(updatedBoard);
    }
  };

  return (
    <>
      <h1>Save Your Crew!</h1>
      <div className="board">
        {board.map((value, index) => {
          console.log(value, index);
          return (
            <Square
              value={value}
              index={index}
              handleSquareClick={handleSquareClick}
            />
          );
        })}
      </div>
    </>
  );
};

export default App;
