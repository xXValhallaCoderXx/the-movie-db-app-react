const httpStatus: any = (response: Response) => {
  if (response.ok) {
    return response;
  } else {
    const error: any = new Error(response.statusText);
    error.response = response;
    throw error;
  }
};

const parseJson = (res: Response) => res.json();
const {API_KEY} = process.env;
const FetchWrapper = {
  latestMovies: () => {
    const url = `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}`;
    return fetch(url)
      .then(httpStatus)
      .then(parseJson);
  },
  searchMovie: (name: string, page?: number) => {
    const url = `https://api.themoviedb.org/3/search/movie?query=${name}&page=${page}&api_key=${API_KEY}`;
    return fetch(url)
      .then(httpStatus)
      .then(parseJson);
  },
  fetchMovieMeta: (id: string) => {
    return Promise.all([
      fetch(
        `https://api.themoviedb.org/3/movie/${id}?&api_key=${API_KEY}`
      ).then(value => value.json()),
      fetch(
        `https://api.themoviedb.org/3/movie/${id}/reviews?&api_key=${API_KEY}`
      ).then(value => value.json()),
      fetch(
        `https://api.themoviedb.org/3/movie/${id}/credits?&api_key=${API_KEY}`
      ).then(value => value.json()),
      fetch(
        `https://api.themoviedb.org/3/movie/${id}/similar?&api_key=${API_KEY}`
      ).then(value => value.json())
    ])
      .then(value => {
        return value;
      })
      .catch(err => {
        return err;
      });
  }
};

export default FetchWrapper;
