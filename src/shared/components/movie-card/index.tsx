import React from "react";
import {Link} from "react-router-dom";
interface IProps {
  id: string;
  poster_path: string;
}

const MovieCard = ({id, poster_path}: IProps) => {
  return (
    <Link className="mt-6 md:mt-0" to={`/${id}`}>
      <img src={`https://image.tmdb.org/t/p/w200${poster_path}`} />
    </Link>
  );
};

export default MovieCard;
