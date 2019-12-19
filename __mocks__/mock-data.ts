import {
  ISelectedMovie,
  IMovieDetail,
  ICast,
  IReviews
} from "../src/shared/types";

export const castData: ICast[] = [
  {
    cast_id: 1,
    character: "Pikachu",
    name: "Pikachuuuuu",
    profile_path: "/img.jpg"
  }
];

export const reviewData: IReviews[] = [
  {
    author: "Ash Catchem",
    content: "This is the review",
    url: "www.urlreview.com"
  }
];

export const searchMovieResponse: IMovieDetail[] = [
  {
    id: "1",
    backdrop_path: "/img.jpg",
    budget: 2000,
    homepage: "www.marvel.com",
    overview: "This is the overview",
    imdb_id: "1234",
    poster_path: "/img.jpg",
    revenue: 2000000,
    release_date: "",
    runtime: 143,
    status: "released",
    tagline: "To infinity and beyond",
    title: "Avengers",
    genres: [
      {
        id: 28,
        name: "Action"
      }
    ]
  }
];

export const mockPaginationData = (data): IMovieDetail[] => {
  const mockData: IMovieDetail[] = [];
  for (let i = 0; i < 61; i++) {
    mockData.push(data);
  }
  return mockData;
};

export const invalidSearchResponse: any[] = [
  {
    id: "1",
    backdrop_path: "/img.jpg",
    budget: 2000,
    homepage: "www.marvel.com",
    overview: "This is the overview",
    imdb_id: "1234",
    poster_path: "/img.jpg",
    revenue: 2000000,
    release_date: "",
    runtime: 143,
    status: "released",
    tagline: "To infinity and beyond",
    genres: [
      {
        id: 28,
        name: "Action"
      }
    ]
  }
];

export const searchResults = [
  {
    id: 603,
    title: "The Matrix"
  }
];

export const selectedMovie: ISelectedMovie = {
  cast: [
    {
      cast_id: 34,
      character: "Thomas A. Anderson / Neo",
      name: "Keanu Reeves",
      profile_path: "/bOlYWhVuOiU6azC4Bw6zlXZ5QTC.jpg"
    }
  ],
  info: {
    id: "1",
    backdrop_path: "/img.jpg",
    budget: 2000,
    homepage: "www.marvel.com",
    overview: "This is the overview",
    imdb_id: "1234",
    poster_path: "/img.jpg",
    revenue: 2000000,
    release_date: "",
    runtime: 143,
    status: "released",
    tagline: "To infinity and beyond",
    title: "Avengers",
    genres: [
      {
        id: 28,
        name: "Action"
      }
    ]
  },
  reviews: [
    {
      author: "GeekMasher",
      content:
        "The Martix is a great example of a movie that will live for ever or a very log time. The story and concept are out of this world. Keanu Reeves plays his role with utter brilliance, the cast was very well put together and the graphics are still to this day amazing. All in all one of the best movies of all time.",
      url: "https://www.themoviedb.org/review/51429fb419c29552f00f2f7b"
    }
  ],
  similar: [
    {
      id: 605,
      title: "The Matrix Revolutions",
      poster_path: "/sKogjhfs5q3azmpW7DFKKAeLEG8.jpg"
    }
  ]
};
