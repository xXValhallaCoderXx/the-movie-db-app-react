import React from "react";

interface IProps {
  genres: any;
}

const colourMapper = (genre: string) => {
  let color;
  switch (genre.toLowerCase()) {
    case "adventure":
      color = "bg-green-500";
      break;

    case "action":
      color = "bg-red-500";
      break;

    case "thriller":
      color = "bg-orange-500";
      break;

    default:
      color = "bg-blue-500";
  }
  return color;
};

const Genres = ({genres}: IProps) => {
  return genres.map((genre: any, index: any) => {
    return (
      <button
        className={`${colourMapper(
          genre.name
        )} text-white font-bold py-2 px-4 rounded mr-5 text-xs cursor-default disabled:opacity-100`}
        key={index}>
        {genre.name}
      </button>
    );
  });
};

export default Genres;
