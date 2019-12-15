export interface IState {
  results: any;
  movies: IMovieResponse;
  movieDetails: any;
}

export interface IMovieResponse {
  page: number;
  results: any;
  totalPages: number;
  totalResults: number;
}

// export interface IAction {
//   type: string;
// }

// export interface IOnResults extends IAction {
//   payload: any;
// }

// export interface ISetStatusAction extends IAction {
//   payload: {
//     index: number;
//     status: string;
//   };
// }

// The Type Guard Functions
// function isOnResults(action: IAction): action is IOnResults {
//   return action.type === "ON_CHANGE";
// }

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
        ...state,
        results: state.results
      };
    case "RESULTS_ERROR":
      return {
        ...state,
        results: action.payload
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
