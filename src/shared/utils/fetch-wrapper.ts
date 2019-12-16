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

const FetchWrapper = {
  searchMovie: (name: string, page?: number) => {
    const {API_KEY} = process.env;
    const url = `https://api.themoviedb.org/3/search/movie?query=${name}&page=${page}&api_key=${API_KEY}`;
    return fetch(url)
      .then(httpStatus)
      .then(parseJson);
  },
  getMovie: (id: string): Promise<any> => {
    const {API_KEY} = process.env;
    const url = `https://api.themoviedb.org/3/movie/${id}?&api_key=${API_KEY}`;
    return fetch(url)
      .then(httpStatus)
      .then(parseJson);
  },
  getReviews: (id: string): Promise<any> => {
    const {API_KEY} = process.env;
    const url = `https://api.themoviedb.org/3/movie/${id}/reviews?&api_key=${API_KEY}`;
    return fetch(url)
      .then(httpStatus)
      .then(parseJson);
  },
  getCast: (id: string): Promise<any> => {
    const {API_KEY} = process.env;
    const url = `https://api.themoviedb.org/3/movie/${id}/cast?&api_key=${API_KEY}`;
    return fetch(url)
      .then(httpStatus)
      .then(parseJson);
  },
  getSimilar: (id: string): Promise<any> => {
    const {API_KEY} = process.env;
    const url = `https://api.themoviedb.org/3/movie/${id}/similar?&api_key=${API_KEY}`;
    return fetch(url)
      .then(httpStatus)
      .then(parseJson);
  },
  fetchMovieMeta: (id: string) => {
    const {API_KEY} = process.env;
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
