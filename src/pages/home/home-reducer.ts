export interface IState {
  movies: any;
}

type Action =
  | {type: "RESULTS_FETCH"}
  | {type: "RESULTS_ERROR"; payload: any}
  | {type: "RESULTS_RECIEVE"; payload: any};

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
    default:
      return state;
  }
};

export {homeReducer};
