import React from "react";
import {MovieCard} from "shared/components";
import {ISimilar} from "shared/types";

interface IProps {
  similar: ISimilar[];
}

const Similar = ({similar}: IProps) => {
  if (!similar || similar.length === 0) {
    return <div className="text-center font-bold text-xl">No Similar Data</div>;
  }
  function renderSimilar() {
    return similar.map((item, index) => {
      return (
        <div
          key={index}
          className="w-full xl:w-1/3 mt-5 xl:mt-0 flex justify-center">
          <MovieCard id={item.id} poster_path={item.poster_path} />
        </div>
      );
    });
  }
  return (
    <div className="flex flex-wrap justify-around mt-6">{renderSimilar()}</div>
  );
};

export default Similar;
