import React from 'react';
import '../styles/card/card.css';
import { Link, useParams } from 'react-router-dom';

function Card(props) {
  return (
    <>
      <div className="card">
        <img className="img" src={props.img} alt="" />
        <div className="tags">
          <p className="platform-tag tag">{props.platform}</p>
          <p className="genre-tag tag">{props.genre}</p>
        </div>
        <div className="about">
          <Link className="link" as={Link} to={'/game/' + props.id}>
            <h3>{props.title}</h3>
          </Link>
          <p className="description">{props.description}</p>
        </div>
      </div>
    </>
  );
}

export default Card;
