import React from "react";
import {Link} from "react-router-dom";
interface IProps {
  id: number;
  poster_path: string;
}

const MovieCard = ({id, poster_path}: IProps) => {
  return (
    <Link className="mt-6 md:mt-0" to={`/movies/${id}`}>
      <img
        className="rounded"
        src={`https://image.tmdb.org/t/p/w200${poster_path}`}
      />
    </Link>
  );
};

export default MovieCard;
