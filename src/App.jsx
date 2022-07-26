import { React, useState } from 'react';
import NavScroll from './components/header';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import List from './components/list';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import GameDetails from './components/gameDetails';
import { useParams } from 'react-router-dom';

function App() {
  const { id } = useParams;
  return (
    <BrowserRouter>
      <>
        <NavScroll />
        <Routes>
          <Route path="/" element={<List />} />
          <Route
            path="/:id"
            element={
              <>
                <GameDetails key={id + 10000} />
              </>
            }
          />
        </Routes>
      </>
    </BrowserRouter>
  );
}

export default App;
