import React from "react";
import {movieDetailReducer, IState} from "./movie-detail-reducer";
import {Loader} from "shared/components";
import {parseMovieDetailData, Api} from "shared/utils";
import {useParams, useLocation} from "react-router-dom";
import {ISelectedMovie} from "shared/types";
import MovieDetail from "./view-detail";
import PopularMoviesView from "./view-popular";
import InvalidView from "./view-invalid";

interface IRouteParams {
  movieID: string;
}

const initialState: IState = {
  selected_movie: "",
  popular_movies: [],
  loading: false,
  error: "",
  movies: {}
};

const MovieDetailContainer = () => {
  const [state, dispatch] = React.useReducer(movieDetailReducer, initialState);
  const params = useParams<IRouteParams>();
  const {pathname} = useLocation();

  React.useEffect(() => {
    // No ID in URL load Popular Movies
    if (!params.movieID) {
      dispatch({type: "POPULAR_MOVIES_FETCH"});
      Api.latestMovies()
        .then(res => {
          dispatch({
            type: "POPULAR_MOVIES_SUCCESS",
            payload: res.results.splice(0, 9)
          });
        })
        .catch(() => {
          dispatch({type: "POPULAR_MOVIES_ERROR", payload: "Error"});
        });
    } else {
      // Fetch Movie URL
      dispatch({type: "SELECT_MOVIE_FETCH"});
      Api.fetchMovieMeta(params.movieID)
        .then(res => {
          const results: ISelectedMovie = parseMovieDetailData(res);
          dispatch({type: "SELECT_MOVIE_SUCCESS", payload: results});
        })
        .catch(() => {
          dispatch({type: "SELECT_MOVIE_ERROR", payload: "Error"});
        });
    }
  }, [params.movieID]);

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

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
  if (state.movies[params.movieID]) {
    return <MovieDetail selectedMovie={state.movies[params.movieID]} />;
  }
  return <InvalidView />;
};

export default MovieDetailContainer;
