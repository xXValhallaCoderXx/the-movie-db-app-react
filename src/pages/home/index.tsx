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

  const recursiveFetch = (release?: any, parentDir?: string) => {
    let totalPages: any;
    const movies: any = [];
    Fetch.searchMovie(release).then(res => {
      totalPages = res.total_pages;
      let pageNum = 1;
      loadMore();

      function loadMore() {
        Fetch.searchMovie(release, pageNum)
          .then((nestedRes: any) => {
            movies.push(nestedRes.results);
            if (nestedRes.page < totalPages) {
              loadMore();
            } else {
              if (nestedRes.total_results === 0) {
                recursiveFetch(parentDir, "");
              } else {
                dispatch({
                  type: "RESULTS_RECIEVE",
                  payload: movies.flat()
                });
              }
            }
          })
          .catch(err => {
            console.log("ERRROR: ", err);
          });
        pageNum++;
      }
    });
  };

  const movieApiCall = (name: string) => recursiveFetch(name);

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
