export interface IState {
  movies: any;
  device: IDevice;
  loading: boolean;
}

type IDevice = "desktop" | "mobile";

type Action =
  | {type: "RESULTS_FETCH"}
  | {type: "RESULTS_ERROR"; payload: any}
  | {type: "RESULTS_RECIEVE"; payload: any}
  | {type: "SET_DEVICE"; payload: IDevice};

const homeReducer = (state: IState, action: Action) => {
  switch (action.type) {
    case "SET_DEVICE":
      return {
        ...state,
        device: "desktop"
      };
    case "RESULTS_FETCH":
      return {
        ...state,
        movies: [],
        loading: true
      };
    case "RESULTS_ERROR":
      return {
        ...state,
        loading: false
      };
    case "RESULTS_RECIEVE":
      return {
        ...state,
        movies: action.payload,
        loading: false
      };
    default:
      return state;
  }
};

export {homeReducer};
