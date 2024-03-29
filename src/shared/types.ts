export interface ISearchResponse {
  page: number;
  total_pages: number;
  total_results: number;
  results: IMovieDetail[];
}

export interface IGenres {
  id: number;
  name: string;
}

export interface ISelectedMovie {
  info: IMovieDetail;
  cast: ICast[];
  reviews: IReviews[];
  similar: ISimilar[];
}

export interface IMovieDetail {
  id: string;
  budget: number;
  genres: IGenres[];
  homepage: string;
  imdb_id: string;
  overview: string;
  release_date: string;
  revenue: number;
  runtime: number;
  status: string;
  tagline: string;
  title: string;
  poster_path: string;
  backdrop_path: string;
}
export interface ICast {
  cast_id: number;
  character: string;
  name: string;
  profile_path: string;
}

export interface ISimilar {
  id: number;
  title: string;
  poster_path: string;
}

export interface IReviews {
  author: string;
  content: string;
  url: string;
}
