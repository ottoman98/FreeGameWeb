import { React, useState, useEffect } from 'react';
import Card from './card';
import '../styles/list/list.css';
import useApi from '../hooks/useapi';
import { useLocation } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import LoadingPage from './loadingPage';

function List() {
  const urlBase =
    'https://free-to-play-games-database.p.rapidapi.com/api/games';
  const urlGenre =
    'https://free-to-play-games-database.p.rapidapi.com/api/games?category=';

  const location = useLocation().pathname.replace('/', '');

  const data = useApi(location == '' ? urlBase : urlGenre + location);

  const [showMore, useShowMore] = useState(12);

  data ? console.log(data) : null;

  return (
    <>
      {!data ? (
        <LoadingPage />
      ) : (
        <>
          <div className="main-list-div">
            <h2>Latest Releases</h2>
            <div className="cards-container">
              {data.slice(0, showMore).map((x) => {
                return (
                  <Card
                    key={x.id}
                    id={x.id}
                    title={x.title}
                    img={x.thumbnail}
                    description={x.short_description}
                    platform={x.platform}
                    genre={x.genre}
                  />
                );
              })}
            </div>
            <Button
              onClick={() => {
                useShowMore(showMore + 12);
              }}
              className="showmore-button"
              variant="info"
            >
              show More
            </Button>
          </div>
        </>
      )}
    </>
  );
}

export default List;
