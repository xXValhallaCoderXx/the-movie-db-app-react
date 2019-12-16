import React from "react";
import {ICast} from "shared/types";

interface IProps {
  cast: ICast[];
}

const Cast = ({cast}: IProps) => {
  if (!cast || cast.length === 0) {
    return <div className="text-center font-bold text-xl">No Cast Data</div>;
  }
  function renderCast() {
    return cast.map((item, index) => {
      return (
        <div
          className="flex justify-content items-center flex-col p-5"
          key={index}>
          <img
            className="w-24 h-24 rounded-full"
            src={`https://image.tmdb.org/t/p/w264_and_h264_bestv2${
              item.profile_path
            }`}
          />
          <p className="font-bold">{item.name}</p>
          <p className="italic">{item.character}</p>
        </div>
      );
    });
  }
  return (
    <div className="flex flex-wrap justify-center mt-2">{renderCast()}</div>
  );
};

export default Cast;
