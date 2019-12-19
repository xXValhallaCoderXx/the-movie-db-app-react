import {IMovieDetail} from "shared/types";
export const parseMovieData = (data: IMovieDetail[]) => {
  // Parse movie data - If any are missing required fields
  // Store into array and send an event
  const invalidMovies: IMovieDetail[] = [];
  const results = data.filter((movie: IMovieDetail) => {
    if (movie.id && movie.title) {
      return {
        id: movie.id,
        title: movie.title
      };
    } else {
      invalidMovies.push(movie);
    }
  });
  if (invalidMovies.length > 0) {
    // Send an event to notify issue with particular objects
  }
  return results;
};

export const parseMoviePages = (movies: any) => {
  const ITEMS_PER_PAGE = 10;
  const pagedMovies: any = [];
  [...Array(Math.ceil(movies.length / ITEMS_PER_PAGE))].forEach((q, i) => {
    pagedMovies.push(
      movies.slice(0 + ITEMS_PER_PAGE * i, ITEMS_PER_PAGE + ITEMS_PER_PAGE * i)
    );
  });
  return pagedMovies;
};

export const parseMovieDetailData = (data: any) => {
  [
    "adult",
    "belongs_to_collection",
    "original_language",
    "original_title",
    "popularity",
    "production_companies",
    "spoken_languages",
    "video"
  ].forEach(e => delete data[0][e]);
  ["id", "page", "total_pages", "total_results"].forEach(
    e => delete data[1][e]
  );
  ["id", "crew"].forEach(e => delete data[2][e]);
  ["id", "page", "total_pages", "total_results"].forEach(
    e => delete data[3][e]
  );
  return {
    info: data[0],
    reviews: data[1].results,
    cast: data[2].cast,
    similar: data[3].results
  };
};
