export interface IState {
  popular_movies: any;
  loading: boolean;
  error: string;
  selected_movie: any;
  movies: any;
}

type Action =
  | {type: "POPULAR_MOVIES_FETCH"}
  | {type: "POPULAR_MOVIES_ERROR"; payload: any}
  | {type: "POPULAR_MOVIES_SUCCESS"; payload: any}
  | {type: "SELECT_MOVIE_FETCH"}
  | {type: "SELECT_MOVIE_ERROR"; payload: any}
  | {type: "SELECT_MOVIE_SUCCESS"; payload: any};

const movieDetailReducer = (state: IState, action: Action) => {
  switch (action.type) {
    case "SELECT_MOVIE_FETCH":
      return {
        ...state,
        loading: true,
        error: ""
      };
    case "SELECT_MOVIE_ERROR":
      return {
        ...state,
        error: action.payload,
        loading: false
      };
    case "SELECT_MOVIE_SUCCESS":
      return {
        ...state,
        loading: false,
        error: "",
        movies: {
          ...state.movies,
          [action.payload.info.id]: action.payload
        }
      };
    case "POPULAR_MOVIES_FETCH":
      return {
        ...state,
        popular_movies: [],
        loading: true,
        error: ""
      };
    case "POPULAR_MOVIES_ERROR":
      return {
        ...state,
        loading: false,
        error: action.payload
      };
    case "POPULAR_MOVIES_SUCCESS":
      return {
        ...state,
        popular_movies: action.payload,
        loading: false,
        error: false
      };
    default:
      return state;
  }
};

export {movieDetailReducer};
