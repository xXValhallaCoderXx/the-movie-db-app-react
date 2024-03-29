import React from "react";
import {Badge} from "shared/components";
import {isEmpty, revenueFormat} from "shared/utils";
import {ISelectedMovie} from "shared/types";
import Cast from "./cast";
import Reviews from "./reviews";
import Similar from "./similar";

interface IProps {
  selectedMovie: ISelectedMovie;
}

const MovieDetail = ({selectedMovie}: IProps) => {
  if (isEmpty(selectedMovie)) {
    return null;
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
      genres,
      runtime,
      revenue,
      release_date,
      status
    }
  } = selectedMovie;

  function renderGenres() {
    return genres.map((genre: any, index: any) => {
      return (
        <Badge className="mt-2 xl:mt-0" color="" key={index}>
          {genre.name}
        </Badge>
      );
    });
  }
  function handleBackground() {
    if (backdrop_path) {
      return {
        backgroundImage: `url(https://image.tmdb.org/t/p/original${backdrop_path}), linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5))`,
        backgroundBlendMode: "overlay",
        backgroundSize: "cover",
        backgroundPosition: "center center"
      };
    } else {
      return {
        backgroundColor: "black"
      };
    }
  }
  return (
    <div>
      <div style={handleBackground()}>
        <h1 className="text-6xl font-bold text-center text-white pt-5">
          {title}
        </h1>
        <h1 className="text-xl font-bold text-center text-white">{tagline}</h1>
        <div className="mt-5 p-10">
          <div className="rounded overflow-hidden shadow-lg bg-white flex flex-wrap p-5">
            <div className="w-full p-6 -pm-5 md:p-0 xl:w-1/5">
              <img
                className="rounded mx-auto"
                src={`https://image.tmdb.org/t/p/w500${poster_path}`}
              />
            </div>
            <div className="w-full md:w-4/5 p-5">
              {renderGenres()}
              <h3 className="text-2xl font-bold mt-5 md:mt-2">Overview</h3>
              <p>{overview}</p>
              <h3 className="text-xl font-bold mt-5">Info</h3>
              <p>
                <span className="font-semibold">Status:</span> {status}{" "}
              </p>
              <p>
                <span className="font-semibold">Release Date:</span>{" "}
                {release_date}{" "}
              </p>
              <p>
                <span className="font-semibold">Running Time:</span> {runtime}{" "}
                minutes
              </p>
              <p>
                <span className="font-semibold">Revenue:</span>{" "}
                {revenueFormat(revenue)}
              </p>
              <p className="mt-3">
                <a
                  className="no-underline hover:underline text-tmd-green font-semibold hover:font-bold"
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
        <Reviews reviews={reviews.slice(0, 2)} />
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

MovieDetail.defaultProps = {
  selectedMovie: {
    info: {}
  }
};

export default MovieDetail;
