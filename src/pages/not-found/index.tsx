import React from "react";
import {Layout} from "shared/components";
import {Link} from "react-router-dom";

const NotFound = () => {
  return (
    <Layout movieID="">
      <div className="bg-tmd-dark-green h-screen flex justify-center items-center">
        <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white p-10">
          <h1 className="text-2xl text-center">
            Ooops! Looks like you shouldn't be here!
          </h1>
          <p className="text-center mt-5">
            Click{" "}
            <span className="font-bold">
              <Link data-testid="home-link" to="/movies">
                HERE
              </Link>
            </span>{" "}
            to go back
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default NotFound;
