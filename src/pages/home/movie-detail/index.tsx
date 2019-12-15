import React from "react";
import {IMovieDetail} from "shared/types";

interface IProps {
  selectedMovie: IMovieDetail;
}

const MovieDetail = ({selectedMovie}: IProps) => {
  console.log("DETAIL: ", selectedMovie);
  if (!selectedMovie) {
    return <div>Select a movie</div>;
  }
  const {title, poster_path, overview, imdb_id} = selectedMovie;
  return (
    <div>
      <h1 className="text-4xl font-bold">{title}</h1>
      <div className="flex mt-5">
        <div className="w-1/5">
          <img src={`https://image.tmdb.org/t/p/w500${poster_path}`} />
          <a
            className="no-underline hover:underline text-blue-500"
            target="_blank"
            href={`https://www.imdb.com/title/${imdb_id}`}>
            Find out more
          </a>
        </div>
        <div className="w-4/5 pl-5">
          <h3 className="text-2xl font-bold -mt-2">Overview</h3>
          <p>{overview}</p>
          <p>
            IMDB:{" "}
            <a
              className="no-underline hover:underline text-blue-500"
              target="_blank"
              href={`https://www.imdb.com/title/${imdb_id}`}>
              Find out more
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default MovieDetail;
