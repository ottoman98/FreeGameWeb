import { React, useState, useEffect } from 'react';
import NavScroll from './components/header';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import List from './components/list';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import GameDetails from './components/gameDetails';
import genres from './utils/genresArray';

function App() {
  return (
    <BrowserRouter>
      <>
        <NavScroll />
        <Routes>
          <Route path="/" element={<List key={window.location.pathname} />} />
          <Route path="/game/:id" element={<GameDetails />} />
          {genres.map((x) => {
            const spacesOut = x.trim().replace(/\s/g, '-');
            return (
              <Route
                key={spacesOut}
                path={'/' + spacesOut}
                element={<List key={spacesOut} />}
              />
            );
          })}
        </Routes>
      </>
    </BrowserRouter>
  );
}

export default App;
