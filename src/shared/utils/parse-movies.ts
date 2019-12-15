export const parseMovieData = (data: any) => {
  const result = data.map((movie: any) => {
    return {
      id: movie.id,
      title: movie.title
      // released: movie.release_date
    };
  });
  return result;
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
