import React from "react";
import {movieDetailReducer, IState} from "./movie-detail-reducer";
import {Loader} from "shared/components";
import {parseMovieDetailData, isEmpty, Api} from "shared/utils";
import {useParams, useLocation} from "react-router-dom";
import {ISelectedMovie} from "shared/types";
import View from "./view";
import PopularMoviesView from "./view-popular";

interface IRouteParams {
  movieID: string;
}

const initialState: IState = {
  selected_movie: "",
  popular_movies: [],
  loading: false,
  error: ""
};

const MovieDetail = () => {
  const [state, dispatch] = React.useReducer(movieDetailReducer, initialState);
  const params = useParams<IRouteParams>();
  const {pathname} = useLocation();

  React.useEffect(() => {
    if (!params.movieID) {
      dispatch({type: "POPULAR_MOVIES_FETCH"});
      Api.latestMovies().then(res => {
        dispatch({
          type: "POPULAR_MOVIES_SUCCESS",
          payload: res.results.splice(0, 9)
        });
      });
    }
  }, [params.movieID]);

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  React.useEffect(() => {
    if (!isEmpty(params)) {
      Api.fetchMovieMeta(params.movieID)
        .then(res => {
          const results: ISelectedMovie = parseMovieDetailData(res);
          dispatch({type: "SELECT_MOVIE", payload: results});
        })
        .catch(() => {
          dispatch({type: "POPULAR_MOVIES_ERROR", payload: "Error"});
        });
    } else {
      dispatch({type: "SELECT_MOVIE", payload: null});
    }
  }, [params.movieID]);

  if (state.loading) {
    return (
      <div className="flex w-full justify-center items-center">
        <Loader />
      </div>
    );
  }
  if (!params.movieID) {
    return <PopularMoviesView movies={state.popular_movies} />;
  }
  // @ts-ignore
  return <View selectedMovie={selectedMovie} />;
};

export default MovieDetail;
