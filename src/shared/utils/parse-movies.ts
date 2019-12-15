export const parseMovieData = (data: any) => {
  const result = data.map((movie: any) => {
    return {
      title: movie.title,
      released: movie.release_date
    };
  });
  return result;
};
