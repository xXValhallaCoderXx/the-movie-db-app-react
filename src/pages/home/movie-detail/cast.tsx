import React from "react";
import {ICast} from "shared/types";

interface IProps {
  cast: ICast[];
}

const Cast = ({cast}: IProps) => {
  if (!cast || cast.length === 0) {
    return (
      <div id="no-cast" className="text-center font-bold text-xl">
        No Cast Data
      </div>
    );
  }
  function renderCast() {
    return cast.map((item, index) => {
      return (
        <div
          id="cast-avatar"
          className="flex justify-content items-center flex-col p-5"
          key={index}>
          {renderAvatar(item.profile_path)}
          <p id="cast-avatar-name" className="font-bold">
            {item.name}
          </p>
          <p id="cast-avatar-character" className="italic">
            {item.character}
          </p>
        </div>
      );
    });
  }

  function renderAvatar(img: string) {
    const src: string = img
      ? `https://image.tmdb.org/t/p/w264_and_h264_bestv2${img}`
      : "http://placekitten.com/200/300";
    return <img className="w-24 h-24 rounded-full" src={src} />;
  }
  return (
    <div className="flex flex-wrap justify-center mt-2">{renderCast()}</div>
  );
};

export default Cast;
