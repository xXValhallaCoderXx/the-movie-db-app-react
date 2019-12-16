import React from "react";
import {debounce, Fetch} from "shared/utils";
import {useBreakpoints} from "shared/hooks";
import {Layout} from "shared/components";
import MobileView from "./view-mobile";
import DesktopView from "./view-desktop";
import {useHistory} from "react-router-dom";
import {homeReducer, IState} from "./home-reducer";

const initialState: IState = {
  movies: []
};

const HomePageContainer = () => {
  const point = useBreakpoints();
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

  const getMovieByID = (id: string) => history.push(`/movies/${id}`);

  function renderView() {
    if (view === "mobile") {
      return (
        <MobileView
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
          loading={loading}
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
