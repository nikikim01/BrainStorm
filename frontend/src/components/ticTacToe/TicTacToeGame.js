import React, { useState } from "react";
import "./TicTacToeGame.css";

/**
 * TicTacToeSquare component - Represents a single square in the Tic-Tac-Toe Board
 * @param {Object} props - Component props
 * @param {string|null} props.value - Square value ('X', 'O', null)
 * @param {function} props.onSquareClick - Fn to call when square clicked
 * @param {boolean} props.winningSqr - Boolean value indicative of a winning square
 * @returns {JSX.Element}
 */
function TicTacToeSquare({ value, onSquareClick, winningSqr }) {
  return (
    <button
      className={
        winningSqr ? "TicTacToeBoard-winningSquare" : "TicTacToeBoard-square"
      }
      onClick={onSquareClick}
    >
      {value}
    </button>
  );
}
/**
 * TicTacToeBoard component - Represents Tic-Tac-Toe Board
 * @param {Object} props - Component props
 * @param {boolean} props.xIsNext - Indicator if next player is 'X'
 * @param {Array.<string|null>} props.squares - State of squares on the board
 * @param {function} props.onPlay - Fn to call when move is made
 * @returns
 */
function TicTacToeBoard({ xIsNext, squares, onPlay }) {
  const winnerStatus = calculateWinner(squares);
  const winner = winnerStatus ? winnerStatus[0] : null;
  const winningSqrs = winnerStatus ? winnerStatus[1] : null;
  const status = winner ? (
    <>
      WINNNER! WINNER! <br /> CHICKEN DINNER! <br /> FOR: {winner}
    </>
  ) : !squares.includes(null) ? (
    <>
      Game Over!
      <br />
      It's a DRAW!
    </>
  ) : (
    "Next player: " + (xIsNext ? "X" : "O")
  );

  /**
   * Handles squares' click events
   * @param {int} i - Clicked square index
   * @returns
   */
  function handleSquareClick(i) {
    if (winnerStatus || squares[i]) {
      return;
    }
    const nextSquares = squares.slice();
    nextSquares[i] = xIsNext ? "X" : "O";
    onPlay(nextSquares, i);
  }

  function renderRow(idx) {
    return (
      <TicTacToeSquare
        winningSqr={winningSqrs ? winningSqrs.includes(idx) : null}
        value={squares[idx]}
        key={idx}
        onSquareClick={() => handleSquareClick(idx)}
      />
    );
  }

  return (
    <>
      <div className="TicTacToeBoard-status">{status}</div>
      {[0, 3, 6].map((squareIdx) => (
        <div key={squareIdx} className="TicTacToeBoard-row">
          {[squareIdx, squareIdx + 1, squareIdx + 2].map((i) => renderRow(i))}
        </div>
      ))}
    </>
  );
}
/**
 * TicTacToeGame component - Main Component for Tic-Tac-Toe
 * @returns {JSX.Element}
 */
export default function TicTacToeGame() {
  const [history, setHistory] = useState([
    { squares: Array(9).fill(null), location: null },
  ]); // {Array.<string|null>}
  const [currMoveItr, setCurrMoveItr] = useState(0); // iteration # of current move
  const xIsNext = currMoveItr % 2 === 0;
  const currentSquares = history[currMoveItr].squares;
  const [reverseMoveList, setReverseMoveList] = useState(false);
  /**
   * Updates game history and current move when move is "play"ed
   * @param {Array.<string|null>} nextSquares
   */
  function handlePlay(nextSquares, i) {
    const row = Math.floor(i / 3) + 1;
    const col = (i % 3) + 1;
    const nextHistory = history
      .slice(0, currMoveItr + 1)
      .concat([{ squares: nextSquares, location: { row, col } }]);
    setHistory(nextHistory);
    setCurrMoveItr(nextHistory.length - 1);
  }
  /**
   * Jumps to specific move in the game history
   * @param {int} nextMove - The move to jump to
   */
  function jumpTo(nextMove) {
    setCurrMoveItr(nextMove);
  }

  // accumulation of the {int}moves made thus far
  const moves = history.map((step, move) => {
    const description = move
      ? `Go to move #${move} (${step.location.row}, ${step.location.col})`
      : "Go to game start";
    return (
      <li key={move}>
        {move === currMoveItr ? (
          <div className="TicTacToeGame-currentMove">
            You are at move #{move} (
            {step.location
              ? `${step.location.row}, ${step.location.col}`
              : "start"}
            )
          </div>
        ) : (
          <button
            className="TicTacToeGame-moveButton"
            onClick={() => jumpTo(move)}
          >
            {description}
          </button>
        )}
      </li>
    );
  });

  return (
    <div className="TicTacToeGame">
      <div className="TicTacToeGame-board">
        <TicTacToeBoard
          xIsNext={xIsNext}
          squares={currentSquares}
          onPlay={handlePlay}
        />
      </div>
      <div className="TicTacToeGame-info">
        <button
          className="TicTacToeGame-moveListOrderButton"
          onClick={() => setReverseMoveList((val) => !val)}
        >
          <p className={reverseMoveList ? " reverse" : ""}>&#8593;</p>
        </button>

        {reverseMoveList ? (
          <ol>{moves}</ol>
        ) : (
          <ol reversed="reversed">{moves.reverse()}</ol>
        )}
      </div>
    </div>
  );
}
/**
 * Calculates Tic-Tac-Toe Game winner
 * @param {Array.<string|null>} squares - The state of the squares on the board
 * @returns {string|null} - Null (if game still in play) or 'X' or 'O' (if winner)
 */
function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return [squares[a], lines[i]];
    }
  }
  return null;
}
