interface IGet {
  path: string;
  params?: object;
}

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
  searchMovie: (name: string) => {
    const {API_KEY} = process.env;
    const url = `https://api.themoviedb.org/3/search/movie?query=${name}&api_key=${API_KEY}`;
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
  }
};

export default FetchWrapper;
