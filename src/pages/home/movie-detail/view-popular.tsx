import React from "react";
import {MovieCard} from "shared/components";
interface IProps {
  movies: any;
}

const PopularMovies = ({movies}: IProps) => {
  function renderMovies() {
    const popular10 = movies.splice(0, 9);
    return popular10.map((movie: any, index: number) => {
      return (
        <div key={index} className="p-5">
          <MovieCard id={movie.id} poster_path={movie.poster_path} />
        </div>
      );
    });
  }
  return (
    <div className="p-10">
      <h1 className="text-center text-3xl font-bold">Popular Movies</h1>
      <div className="flex justify-center flex-wrap">{renderMovies()}</div>
    </div>
  );
};

export default PopularMovies;
