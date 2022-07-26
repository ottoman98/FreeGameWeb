import { React, useState, useEffect } from 'react';
import Card from './card';
import '../styles/list/list.css';
import useApi from '../hooks/useapi';
import { useParams } from 'react-router-dom';
import LoadingPage from '../pages/loading';
import Button from 'react-bootstrap/Button';

function List() {
  const data = useApi(
    'https://free-to-play-games-database.p.rapidapi.com/api/games'
  );

  const [showMore, useShowMore] = useState(12);

  return (
    <>
      {!data ? (
        <LoadingPage />
      ) : (
        <>
          <h2>Latest releases</h2>
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
        </>
      )}
    </>
  );
}

export default List;
