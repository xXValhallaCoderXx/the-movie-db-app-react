import React from "react";
import FetchWrapper from "shared/utils/fetch-wrapper";
import {parseMovieDetailData} from "shared/utils";
import {useParams, useHistory} from "react-router-dom";
import {ISelectedMovie} from "shared/types";
import View from "./view";

interface IRouteParams {
  movieID: string;
}

const MovieDetail = () => {
  const [selectedMovie, setSelectedMovie] = React.useState({});
  const params = useParams<IRouteParams>();
  const history = useHistory();
  React.useEffect(() => {
    FetchWrapper.fetchMovieMeta(params.movieID)
      .then(res => {
        const results: ISelectedMovie = parseMovieDetailData(res);
        setSelectedMovie(results);
        history.push(`/${params.movieID}`);
      })
      .catch(err => {
        console.log("Error: ", err);
        // setMovieDataLoading(false)
      });
  }, [params.movieID]);

  return <View selectedMovie={selectedMovie} />;
};

export default MovieDetail;
