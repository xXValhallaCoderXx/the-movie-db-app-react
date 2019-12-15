import React, {ReactNode} from "react";
import {debounce, Fetch} from "shared/utils";
import {useBreakpoints} from "shared/hooks";
import {Layout} from "shared/components";
import MobileView from "./view-mobile";
import DesktopView from "./view-desktop";
import {useHistory, useParams} from "react-router-dom";
import {homeReducer, IState} from "./home-reducer";

interface ILocalProps {
  children: ReactNode;
}

interface IRouteParams {
  movieID: string;
}

type IProps = ILocalProps;

const initialState: IState = {
  movies: [],
  movieDetails: {},
  selectedMovie: ""
};

const HomePageContainer = (props: IProps) => {
  const point = useBreakpoints();
  const params = useParams<IRouteParams>();
  const history = useHistory();
  const [view, setView] = React.useState("desktop");
  const [loading, setLoading] = React.useState(false);
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
    setLoading(true);
    dispatch({
      type: "RESULTS_RECIEVE",
      payload: []
    });
    Fetch.searchMovie(release)
      .then(res => {
        totalPages = res.total_pages;
        let pageNum = 1;
        loadMore();

        function loadMore() {
          Fetch.searchMovie(release, pageNum)
            .then((nestedRes: any) => {
              movies.push(nestedRes.results);
              // Temp Hack as doing client side pagination
              if (nestedRes.page < totalPages && nestedRes.page < 4) {
                loadMore();
              } else {
                if (nestedRes.total_results === 0) {
                  recursiveFetch(parentDir, "");
                } else {
                  setLoading(false);
                  dispatch({
                    type: "RESULTS_RECIEVE",
                    payload: movies.flat()
                  });
                }
              }
            })
            .catch(err => {
              setLoading(false);
              console.log("ERRROR: ", err);
            });
          pageNum++;
        }
      })
      .catch(err => {
        setLoading(false);
        console.log("ERROR", err);
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
          loading={loading}
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
          loading={loading}
          results={state.movies}
          onSubmit={onSubmit}
          onChange={debounceOnChange}
          onRowClick={getMovieByID}
        />
      );
    }
  }
  console.log("STATE: ", state);
  return <Layout mobile={view === "mobile"}>{renderView()}</Layout>;
};

export default HomePageContainer;
