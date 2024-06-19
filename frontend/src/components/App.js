import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./home/HomePage";
import AboutPage from "./about/AboutPage";
import NavBar from "./navbar/NavBar";
import TicTacToe from "./ticTacToe/TicTacToePage";
import HowToPlay from "./howToPlay/HowToPlayPage";
import { RelayEnvironmentProvider } from "react-relay/hooks";
import PhotoFeedPage from "./photos/PhotoFeedPage";
import PageNotFound from "./PageNotFound";
import "../utilities.css";
import RelayEnvironment from "../RelayEnvironment";

function App() {
  return (
    <RelayEnvironmentProvider environment={RelayEnvironment}>
      <div className="App">
        <NavBar />

        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="punnyPix" element={<PhotoFeedPage />} />
          <Route path="tictactoe" element={<TicTacToe />} />
          <Route path="how-to-play" element={<HowToPlay />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </div>
    </RelayEnvironmentProvider>
  );
}

export default App;
