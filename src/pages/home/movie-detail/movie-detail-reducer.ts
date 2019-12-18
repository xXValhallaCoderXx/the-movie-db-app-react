export interface IState {
  popular_movies: any;
  loading: boolean;
  error: string;
  selected_movie: any;
}

type Action =
  | {type: "POPULAR_MOVIES_FETCH"}
  | {type: "POPULAR_MOVIES_ERROR"; payload: any}
  | {type: "POPULAR_MOVIES_SUCCESS"; payload: any}
  | {type: "SELECT_MOVIE"; payload: any};

const movieDetailReducer = (state: IState, action: Action) => {
  switch (action.type) {
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
