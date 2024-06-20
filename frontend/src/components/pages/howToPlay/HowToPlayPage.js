import React from "react";
import "./HowToPlayPage.css";

const HowToPlay = () => {
  return (
    <>
      <h1>Tic-Tac-Toe</h1>
      <br />
      <p>Tic-Tac-Toe is a classic 2-player game of strategy and foresight.</p>
      <br />
      <h2>Objective</h2>
      <p>
        Be the 1st player to align 3 of your xymbols (X or 0) in a horizontal,
        vertical, or diagonal row on a 3x3 grid.
      </p>
      <br />
      <h2>How to Play</h2>
      <ol>
        <li>
          Players take turns placing their symbols (X or O) in an empty cell on
          the grid.
        </li>
        <li>
          The 1st player to get 3 of their symbols in a row (horizontally,
          vertically, or diagonally) wins the game.
        </li>
        <li>
          If all 9 cells are filled without either player achieving a row of 3,
          the game ends in a draw.
        </li>
      </ol>
    </>
  );
};

export default HowToPlay;
