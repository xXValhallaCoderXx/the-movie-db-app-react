import React from "react";
import {debounce, Api} from "shared/utils";
import {useBreakpoints} from "shared/hooks";
import {ISearchResponse} from "shared/types";
import {Layout} from "shared/components";
import MobileView from "./view-mobile";
import DesktopView from "./view-desktop";
import {useHistory, RouteComponentProps} from "react-router-dom";
import {homeReducer, IState} from "./home-reducer";

const initialState: IState = {
  movies: [],
  loading: false,
  device: "desktop"
};

const HomePageContainer = (props: RouteComponentProps<{movieID: string}>) => {
  const point = useBreakpoints();
  const history = useHistory();
  const {movieID} = props.match.params;
  const [state, dispatch] = React.useReducer(homeReducer, initialState);

  React.useEffect(() => {
    if (point === "xs" || point === "sm" || point === "md") {
      dispatch({type: "SET_DEVICE", payload: "mobile"});
    } else {
      dispatch({type: "SET_DEVICE", payload: "desktop"});
    }
  }, [point]);

  // Todo - Move this into API Wrapper
  const recursiveFetch = (release?: any, parentDir?: string) => {
    let totalPages: any;
    const movies: any = [];
    dispatch({type: "RESULTS_FETCH"});
    Api.searchMovie(release)
      .then((res: ISearchResponse) => {
        totalPages = res.total_pages;
        let pageNum = 1;
        loadMore();

        function loadMore() {
          Api.searchMovie(release, pageNum)
            .then((nestedRes: ISearchResponse) => {
              movies.push(nestedRes.results);
              // Temp Hack as doing client side pagination
              if (nestedRes.page < totalPages && nestedRes.page < 4) {
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
            .catch(() => {
              dispatch({
                type: "RESULTS_ERROR",
                payload: "Error fetching movies"
              });
            });
          pageNum++;
        }
      })
      .catch(() => {
        dispatch({
          type: "RESULTS_ERROR",
          payload: "Error fetching movies"
        });
      });
  };

  const getMovieByID = (id: string) => history.push(`/movies/${id}`);
  const movieApiCall = (name: string) => recursiveFetch(name);
  const debounceOnChange = debounce((name: string) => {
    movieApiCall(name);
  }, 500);

  const {device, loading} = state;
  return (
    <Layout movieID={movieID} mobile={device === "mobile"}>
      {device === "mobile" ? (
        <MobileView
          loading={loading}
          results={state.movies}
          onChange={debounceOnChange}
          onRowClick={getMovieByID}
        />
      ) : (
        <DesktopView
          loading={loading}
          results={state.movies}
          onChange={debounceOnChange}
          onRowClick={getMovieByID}
        />
      )}
    </Layout>
  );
};

export default HomePageContainer;
