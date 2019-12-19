import React from "react";
import {Link} from "react-router-dom";
const InvalidView = () => {
  return (
    <div className="flex w-full justify-center items-center flex-col">
      <h1 className="text-4xl font-semibold">Ooops!!</h1>
      <h2 className="text-2xl font-semibold">
        Looks like you entered an invalid ID
      </h2>
      <h3 className="text-xl font-semibold">
        Click{" "}
        <Link
          className="font-semibold hover:underline hover:font-bold text-tmd-green"
          to="/movies">
          HERE
        </Link>{" "}
        to go back
      </h3>
    </div>
  );
};

export default InvalidView;
