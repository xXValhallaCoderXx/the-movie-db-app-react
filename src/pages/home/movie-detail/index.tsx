import React from "react";
import {IMovieDetail} from "shared/types";

interface IProps {
  selectedMovie: IMovieDetail;
}

const MovieDetail = ({selectedMovie}: IProps) => {
  if (!selectedMovie) {
    return <div>Select a movie</div>;
  }

  return (
    <div>
      <h1>Title: {selectedMovie.title}</h1>
    </div>
  );
};

export default MovieDetail;
