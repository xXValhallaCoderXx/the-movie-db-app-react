import React from "react";
import {ISimilar} from "shared/types";

interface IProps {
  similar: ISimilar[];
}


const Similar = ({similar}: IProps) => {
  if (!similar || similar.length === 0) {
    return <div className="text-center font-bold text-xl">No Similar Data</div>;
  }
  return <div>Castttt</div>;
};

export default Similar;
