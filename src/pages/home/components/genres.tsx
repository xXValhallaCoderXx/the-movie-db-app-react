import React from "react";

interface IProps {
  genres: any;
}

const Genres = ({genres}: IProps) => {
  return genres.map((genre: any, index: any) => {
    console.log("GENRES: ", genre);
    return (
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-5"
        key={index}>
        {genre.name}
      </button>
    );
  });
};

export default Genres;
