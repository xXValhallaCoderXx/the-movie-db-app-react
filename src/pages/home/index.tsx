import React, {ReactNode} from "react";
import {debounce, Fetch} from "shared/utils";
import { useHistory } from "react-router-dom";
import {homeReducer, IState, IMovieResponse} from "./home-reducer";
import HomeView from "./view";

interface ILocalProps {
  children: ReactNode;
}

type IProps = ILocalProps;

const initialState: IState = {
  movies: {
    page: 0,
    totalPages: 0,
    totalResults: 0,
    results: []
  },
  movieDetails: {}
};

const HomePageContainer = (props: IProps) => {
  const history = useHistory();
  const [state, dispatch] = React.useReducer(homeReducer, initialState);
  const movieApiCall = (name: string) => {
    Fetch.searchMovie(name)
      .then((res: IMovieResponse) => {
        dispatch({type: "RESULTS_RECIEVE", payload: res});
      })
      .catch(err => {
        dispatch({type: "RESULTS_ERROR", payload: err});
      });
  };
  const debounceOnChange = debounce((name: string) => {
    movieApiCall(name);
  }, 500);
  function onSubmit(event: React.FormEvent) {
    event.preventDefault();
  }

  const getMovieByID = (id: string) => {
    if (!state.movieDetails[id]) {
      Fetch.getMovie(id)
        .then((res: any) => {
          dispatch({type: "MOVIE_RECIEVE", payload: res});
          history.push(`/${id}`)
        })
        .catch(err => {
          dispatch({type: "MOVIE_ERROR", payload: err});
        });
    }else {
      history.push(`/${id}`)
    }
  };
  return (
    <HomeView
      results={state.movies}
      onSubmit={onSubmit}
      onChange={debounceOnChange}
      onRowClick={getMovieByID}
    />
  );
};

export default HomePageContainer;
