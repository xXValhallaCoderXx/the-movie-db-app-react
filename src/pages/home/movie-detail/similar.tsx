import React from "react";
import {ISimilar} from "shared/types";

interface IProps {
  similar: ISimilar[];
}


const Similar = ({similar}: IProps) => {
  if (!similar || similar.length === 0) {
    return <div className="text-center font-bold text-xl">No Similar Data</div>;
  }
  function renderSimilar(){
    return similar.map((item, index) => {
      return <div>
        <img src={`https://image.tmdb.org/t/p/w200${item.poster_path}`} />
      </div>
    })
  }
return <div className="flex flex-wrap justify-around mt-6">{renderSimilar()}</div>;
};

export default Similar;
