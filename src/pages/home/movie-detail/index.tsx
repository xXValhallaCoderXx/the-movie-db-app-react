import React from "react";
import {Badge} from "shared/components";
import {ISelectedMovie} from "shared/types";
import Cast from "./cast";
import Reviews from "./reviews";
import Similar from "./similar";

interface IProps {
  selectedMovie: ISelectedMovie;
}

const MovieDetail = ({selectedMovie}: IProps) => {
  if (!selectedMovie) {
    return <div>Select a movie</div>;
  }
  const {
    similar,
    reviews,
    cast,
    info: {
      title,
      poster_path,
      overview,
      imdb_id,
      backdrop_path,
      tagline,
      genres
    }
  } = selectedMovie;

  function renderGenres() {
    return genres.map((genre: any, index: any) => {
      return (
        <Badge color="" key={index}>
          {genre.name}
        </Badge>
      );
    });
  }
  return (
    <div>
      <div
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/original${backdrop_path}), linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5))`,
          backgroundBlendMode: "overlay"
        }}>
        <h1 className="text-6xl font-bold text-center text-white pt-5">
          {title}
        </h1>
        <h1 className="text-xl font-bold text-center text-white">{tagline}</h1>
        <div className="mt-5 p-10">
          <div className="rounded overflow-hidden shadow-lg bg-white flex p-5">
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
              {renderGenres()}
              <h3 className="text-2xl font-bold mt-2">Overview</h3>
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
      </div>
      <section id="cast">
        <h1 className="text-black text-center mt-4 font-bold text-4xl">Cast</h1>
        <Cast cast={cast.slice(0, 4)} />
      </section>
      <section
        id="reviews"
        className="rounded overflow-hidden shadow-lg bg-gray-400 flex p-5 flex-col m-10">
        <h1 className="text-black text-center mt-3 font-bold text-3xl">
          Reviews
        </h1>
        <Reviews reviews={reviews.slice(0, 3)} />
      </section>
      <section id="similar" className="p-10">
        <h1 className="text-black text-center mt-3 font-bold text-3xl">
          Other Similar Choices
        </h1>
        <Similar similar={similar.slice(0, 3)} />
      </section>
    </div>
  );
};

export default MovieDetail;
