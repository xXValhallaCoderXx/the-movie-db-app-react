import React, {ReactNode} from "react";
import {debounce, Fetch} from "shared/utils";
import {homeReducer, IState, IMovieResponse} from "./home-reducer";
import HomeView from "./view";

interface IProps {
  children: ReactNode;
}

const initialState: IState = {
  results: "",
  movies: {
    page: 0,
    totalPages: 0,
    totalResults: 0,
    results: []
  }
};

const HomePageContainer = ({children}: IProps) => {
  const [state, dispatch] = React.useReducer(homeReducer, initialState);
  const movieApiCall = (name: string) =>
    Fetch.searchMovie(name)
      .then((res: IMovieResponse) => {
        dispatch({type: "RESULTS_RECIEVE", payload: res});
      })
      .catch(err => {
        dispatch({type: "RESULTS_ERROR", payload: err});
      });
  const debounceOnChange = debounce((name: string) => {
    movieApiCall(name);
  }, 500);
  function onSubmit(event: React.FormEvent) {
    event.preventDefault();
  }
  return (
    <HomeView
      results={state.movies}
      onSubmit={onSubmit}
      onChange={debounceOnChange}
    />
  );
};

export default HomePageContainer;
