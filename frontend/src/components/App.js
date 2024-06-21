import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/home/HomePage";
import AboutPage from "./pages/about/AboutPage";
import NavBar from "./navbar/NavBar";
import TicTacToe from "./games/ticTacToe/TicTacToePage";
import HowToPlay from "./pages/howToPlay/HowToPlayPage";
import { RelayEnvironmentProvider } from "react-relay/hooks";
import PhotoFeedPage from "./pages/photoFeed/PhotoFeedPage";
import PageNotFound from "./pages/PageNotFound";
import "../utilities.css";
import RelayEnvironment from "../RelayEnvironment";
import { Hearts } from "react-loader-spinner";

function App() {
  return (
    <RelayEnvironmentProvider environment={RelayEnvironment}>
      <React.Suspense
        fallback={
          <Hearts
            height="80"
            width="80"
            color="#00bfff"
            ariaLabel="hearts-loading"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
          />
        }
      >
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
      </React.Suspense>
    </RelayEnvironmentProvider>
  );
}

export default App;
