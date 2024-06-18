import React from "react";
import "./NavBar.css";
import "../../utilities.css";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg ../logo.jpg bg-light">
      <a href="/">
        <img
          className=""
          src="../favicon.ico"
          width="70"
          height="70"
          alt="logo"
        />
      </a>

      <a className="navbar-brand" href="/">
        BrainStorm
      </a>
      <button
        className="navbar-toggler "
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <a className="nav-link" href="/">
              Home <span className="sr-only">(current)</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/punnyPix">
              Photos
            </a>
          </li>
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Games
            </a>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
              <a className="dropdown-item" href="/tic-tac-toe">
                Tic-Tac-Toe
              </a>
              <a className="dropdown-item" href="/game3">
                another game
              </a>
              <div className="dropdown-divider"></div>
              <a className="dropdown-item" href="/gameTutorials">
                Game Tutorials
              </a>
            </div>
          </li>
          <li className="nav-item">
            <a className="nav-link disabled" href="/about">
              About
            </a>
          </li>
        </ul>
        <form className="form-inline my-2 my-lg-0">
          <input
            className="form-control mr-sm-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button
            className="btn btn-outline-success my-2 my-sm-0"
            type="submit"
          >
            Search
          </button>
        </form>
      </div>
    </nav>
  );
};

export default Navbar;
