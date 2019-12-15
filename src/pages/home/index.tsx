import React, {ReactNode} from "react";
import {debounce, Fetch} from "shared/utils";
import {useBreakpoints} from "shared/hooks";
import {Layout} from "shared/components";
import MobileView from "./view-mobile";
import DesktopView from "./view-desktop";
import {useHistory, useParams} from "react-router-dom";
import {homeReducer, IState, IMovieResponse} from "./home-reducer";

interface ILocalProps {
  children: ReactNode;
}

interface IRouteParams {
  movieID: string;
}

type IProps = ILocalProps;

const initialState: IState = {
  movies: {
    loading: false,
    page: 0,
    totalPages: 0,
    totalResults: 0,
    results: []
  },
  movieDetails: {},
  selectedMovie: ""
};

const HomePageContainer = (props: IProps) => {
  const point = useBreakpoints();
  const params = useParams<IRouteParams>();
  const history = useHistory();
  const [view, setView] = React.useState("desktop");
  const [state, dispatch] = React.useReducer(homeReducer, initialState);

  React.useEffect(() => {
    if (point === "xs" || point === "sm" || point === "md") {
      setView("mobile");
    } else {
      setView("desktop");
    }
  }, [point]);

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
          history.push(`/${id}`);
        })
        .catch((err: any) => {
          dispatch({type: "MOVIE_ERROR", payload: err});
        });
    } else {
      history.push(`/${id}`);
    }
  };
  const handleSelectedMovie = () => {
    if (state.movieDetails[params.movieID]) {
      return state.movieDetails[params.movieID];
    } else {
      return null;
    }
  };
  function renderView() {
    if (view === "mobile") {
      return (
        <MobileView
          selectedMovie={handleSelectedMovie()}
          results={state.movies}
          onSubmit={onSubmit}
          onChange={debounceOnChange}
          onRowClick={getMovieByID}
        />
      );
    } else {
      return (
        <DesktopView
          selectedMovie={handleSelectedMovie()}
          results={state.movies}
          onSubmit={onSubmit}
          onChange={debounceOnChange}
          onRowClick={getMovieByID}
        />
      );
    }
  }
  return <Layout mobile={view === "mobile"}>{renderView()}</Layout>;
};

export default HomePageContainer;
