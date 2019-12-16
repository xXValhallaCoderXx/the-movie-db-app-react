import React from "react";
import FetchWrapper from "shared/utils/fetch-wrapper";
import {parseMovieDetailData, isEmpty} from "shared/utils";
import {useParams, useLocation} from "react-router-dom";
import {ISelectedMovie} from "shared/types";
import View from "./view";

interface IRouteParams {
  movieID: string;
}

const MovieDetail = () => {
  const [selectedMovie, setSelectedMovie] = React.useState({});
  const params = useParams<IRouteParams>();
  const {pathname} = useLocation();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  React.useEffect(() => {
    if (!isEmpty(params)) {
      FetchWrapper.fetchMovieMeta(params.movieID)
        .then(res => {
          const results: ISelectedMovie = parseMovieDetailData(res);
          setSelectedMovie(results);
        })
        .catch(err => {
          console.log("Error: ", err);
        });
    }
  }, [params.movieID]);
  if (isEmpty(selectedMovie)) {
    return null;
  }
  return <View selectedMovie={selectedMovie} />;
};

export default MovieDetail;
