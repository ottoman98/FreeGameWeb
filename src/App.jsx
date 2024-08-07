import { React, useState, useEffect } from "react";
import NavScroll from "./components/Nav";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import List from "./components/list";
import { BrowserRouter, Route, Routes, HashRouter } from "react-router-dom";
import GameDetails from "./components/gameDetails";
import genres from "./utils/genresArray";
import Footer from "./components/footer";

function App() {
  return (
    <HashRouter hashTypes="hashbang">
      <>
        <NavScroll />
        <Routes>
          <Route path="/" element={<List key={window.location.pathname} />} />
          <Route path="/game/:id" element={<GameDetails />} />
          {genres.map((x) => {
            const spacesOut = x.trim().replace(/\s/g, "-");
            return (
              <Route
                key={spacesOut}
                path={"/" + spacesOut}
                element={<List key={spacesOut} />}
              />
            );
          })}
        </Routes>
      </>
      <Footer />
    </HashRouter>
  );
}

export default App;
