import React from "react";
import {parseMovieDetailData, isEmpty, Fetch} from "shared/utils";
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
    if (!params.movieID) {
      Fetch.latestMovies().then(res => setPopular(res.results.splice(0, 9)));
    }
  }, [params.movieID]);

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
    } else {
      setSelectedMovie({});
    }
  }, [params.movieID]);
  if (isEmpty(selectedMovie)) {
    return <PopularMoviesView movies={popular} />;
  }
  // @ts-ignorey
  
  return <View selectedMovie={selectedMovie} />;
};

export default MovieDetail;
