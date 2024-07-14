import React from "react";
import useApi from "../hooks/useApi";
import { useParams } from "react-router";
import "../styles/gameDetails/gamedetails.css";
import LoadingPage from "./loadingPage";

function GameDetails() {
  const { id } = useParams();

  const data = useApi(
    "https://free-to-play-games-database.p.rapidapi.com/api/game?id=" + id
  );

  return (
    <>
      {!data ? (
        <LoadingPage />
      ) : (
        <>
          <div
            className="main-div"
            key={id}
            style={{
              background: `url(${
                data.screenshots.length > 0 ? data.screenshots[0].image : ""
              }) no-repeat`,
              backgroundSize: "cover",
            }}
          >
            <div className="details-content">
              <h1>{data.title}</h1>
              <img
                className="img-detail"
                src={data.thumbnail}
                alt={data.title}
              />
              <div className="details-tags">
                <p>
                  <b>Platform: </b>
                  {data.platform}
                </p>
                <p>
                  <b>Developer: </b>
                  {data.developer}
                </p>
                <p>
                  <b>Publisher:</b> {data.publisher}
                </p>
                <p>
                  <b>Release Date: </b>
                  {data.release_date}
                </p>
              </div>

              <p className="details-description">{data.description}</p>

              {data.hasOwnProperty("minimum_system_requirements") ? (
                <>
                  <h4>Minimum system requirements</h4>

                  <div className="requirements">
                    {Object.keys(data.minimum_system_requirements).map((x) => {
                      return (
                        <ul>
                          <li key={x}>
                            <b key={data.x}>
                              {x.charAt(0).toUpperCase() + x.slice(1)}:{" "}
                            </b>
                            {data.minimum_system_requirements[x]}
                          </li>
                        </ul>
                      );
                    })}
                  </div>
                </>
              ) : null}
              {data.screenshots.length > 0 == false ? null : (
                <>
                  <h4>ScreenShots</h4>
                  <div className="screenshots">
                    {data.screenshots.slice(1).map((x) => {
                      return (
                        <img
                          className="screenshot"
                          key={x.id}
                          src={x.image}
                          alt=""
                        />
                      );
                    })}
                  </div>
                </>
              )}
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default GameDetails;
