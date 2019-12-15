export interface IState {
  movies: IMovieResponse;
  movieDetails: any;
}

export interface IMovieResponse {
  page: number;
  results: any;
  totalPages: number;
  totalResults: number;
}

type Action =
  | {type: "RESULTS_FETCH"}
  | {type: "RESULTS_ERROR"; payload: any}
  | {type: "RESULTS_RECIEVE"; payload: IMovieResponse}
  | {type: "MOVIE_FETCH"}
  | {type: "MOVIE_ERROR"; payload: any}
  | {type: "MOVIE_RECIEVE"; payload: any};

const homeReducer = (state: IState, action: Action) => {
  switch (action.type) {
    case "RESULTS_FETCH":
      return {
        ...state
      };
    case "RESULTS_ERROR":
      return {
        ...state
      };
    case "RESULTS_RECIEVE":
      return {
        ...state,
        movies: action.payload
      };
    case "MOVIE_FETCH":
      return {
        ...state
      };
    case "MOVIE_ERROR":
      return {
        ...state
      };
    case "MOVIE_RECIEVE":
      return {
        ...state,
        movieDetails: {
          ...state.movieDetails,
          [action.payload.id]: action.payload
        }
      };
    default:
      return state;
  }
};

export {homeReducer};
