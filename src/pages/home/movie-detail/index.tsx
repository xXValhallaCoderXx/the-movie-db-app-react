import React from "react";
import { Fetch} from "shared/utils";
import {parseMovieDetailData, isEmpty} from "shared/utils";
import {useParams, useLocation} from "react-router-dom";
import {ISelectedMovie} from "shared/types";
import View from "./view";
import PopularMoviesView from "./view-popular";

interface IRouteParams {
  movieID: string;
}

const MovieDetail = () => {
  const [selectedMovie, setSelectedMovie] = React.useState({});
  const [popular, setPopular] = React.useState([]);
  const params = useParams<IRouteParams>();
  const {pathname} = useLocation();

  React.useEffect(() => {
    Fetch.latestMovies().then(res => setPopular(res.results));
  }, [])

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  React.useEffect(() => {
    if (!isEmpty(params)) {
      Fetch.fetchMovieMeta(params.movieID)
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
    return <PopularMoviesView movies={popular}/>;
  }
  return <View selectedMovie={selectedMovie} />;
};

export default MovieDetail;
