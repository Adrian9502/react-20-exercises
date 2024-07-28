import React, { useEffect, useState } from "react";

function Square({ value, onClick }) {
  return (
    <button
      onClick={onClick}
      style={{ width: "100px", height: "100px" }}
      className="btn border border-dark btn-light fs-1 text-center text-dark p-0"
    >
      {value}
    </button>
  );
}

export default function TicTacToe() {
  const [squares, setSquares] = useState(Array(9).fill(""));
  const [isXTurn, setIsXTurn] = useState(true);
  const [status, setStatus] = useState("");
  function handleClick(getCurrentSquare) {
    let cpySquares = [...squares];
    if (handleResult(cpySquares) || cpySquares[getCurrentSquare]) return;
    if (cpySquares[getCurrentSquare]) return;

    cpySquares[getCurrentSquare] = isXTurn ? "X" : "O";
    setIsXTurn(!isXTurn);
    setSquares(cpySquares);
  }

  function handleResult(squares) {
    const winningPattern = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
      [0, 3, 6],
    ];

    for (let i = 0; i < winningPattern.length; i++) {
      const [x, y, z] = winningPattern[i];

      if (
        squares[x] &&
        squares[x] === squares[y] &&
        squares[x] === squares[z]
      ) {
        return squares[x];
      }
    }

    return null;
  }

  useEffect(() => {
    if (!handleResult(squares) && squares.every((item) => item !== "")) {
      setStatus("Draw! Restart the game.");
    } else if (handleResult(squares)) {
      setStatus(`"${handleResult(squares)}" WON! Restart the game`);
    } else setStatus(`${isXTurn ? "X" : "O"} Turn`);
  }, [squares, isXTurn]);

  function handleRestart() {
    setIsXTurn(true);
    setSquares(Array(9).fill(""));
  }
  return (
    <div className="container bg-dark text-light p-3 mb-5">
      <h1 className="text-primary mb-3 fw-bold">Tic Tac Toe</h1>
      <div className="row-con">
        <Square value={squares[0]} onClick={() => handleClick(0)} />
        <Square value={squares[1]} onClick={() => handleClick(1)} />
        <Square value={squares[2]} onClick={() => handleClick(2)} />
      </div>
      <div className="row-con">
        <Square value={squares[3]} onClick={() => handleClick(3)} />
        <Square value={squares[4]} onClick={() => handleClick(4)} />
        <Square value={squares[5]} onClick={() => handleClick(5)} />
      </div>
      <div className="row-con">
        <Square value={squares[6]} onClick={() => handleClick(6)} />
        <Square value={squares[7]} onClick={() => handleClick(7)} />
        <Square value={squares[8]} onClick={() => handleClick(8)} />
      </div>

      <button
        className="btn btn-light border border-dark  mt-3"
        onClick={handleRestart}
      >
        Restart
      </button>

      <h2 className="text-light m-3">{status}</h2>
    </div>
  );
}
