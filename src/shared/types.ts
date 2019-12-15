export interface IMovieDetail {
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
}

export interface IGenres {
  id: number;
  name: string;
}
