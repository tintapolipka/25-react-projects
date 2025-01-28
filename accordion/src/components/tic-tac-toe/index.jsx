import { useState } from "react";
import "./index.css";
import Tile from "./tile.jsx";

export default function TicTacToe() {
  const [isEnded, setIsEnded] = useState(false);
  const [player, setPlayer] = useState("x");
  const [board, setBoard] = useState(new Array(9).fill(""));
  const [endMessage, setEndMessage] = useState("");

  function handleRestart() {
    setIsEnded((prev)=>false);
    setPlayer((prev)=>'x');
    setBoard((prev)=>new Array(9).fill(""));
    setEndMessage((prev)=>"");

  }

  function handleOnClick(e) {
    const newBoard = [...board];
    if(!newBoard[+e.target.id] && !isEnded)
    {newBoard[+e.target.id] = player;}
    setBoard((prev) => newBoard);
    checkWin(newBoard);
    setPlayer((prev) => (player === "x" ? "o" : "x"));
  }

  function checkWin(board) {
    const winningCombos = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    let usedTiles = board.reduce((accu, actu) => {
      return actu ? ++accu : accu;
    }, 0);
    console.log("usedTiles:", usedTiles)
    if (usedTiles > 8) {
      setIsEnded((prev) => true);
      setEndMessage((prev) => `It's a draw!`);
    }
    winningCombos.forEach((combo) => {
      if (
        board[combo[0]] &&
        board[combo[0]] === board[combo[1]] &&
        board[combo[1]] === board[combo[2]]
      ) {
        setIsEnded((prev) => true);
        setEndMessage((prev) => `${board[combo[0]]} is the winner!`);
      }
    });
  }

  return (
    <div>
      Tic Tac Toe
      <div className="tic-tac-toe-container">
        {
          //currentPlayer,handleOnClick,id
          board.map((item, index) => {
            return (
              <Tile
                id={index}
                key={index}
                handleOnClick={handleOnClick}
                getContent={item}
              />
            );
          })
        }
      </div>
      {isEnded && (
        <div>
          <h2>The game has ended. {endMessage}</h2>
          <button onClick={handleRestart}>Please restart</button>
        </div>
      )}
    </div>
  );
}
