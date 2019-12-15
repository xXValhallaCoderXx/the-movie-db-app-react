import React from "react";
import {useParams, Link} from "react-router-dom";

interface IProps {
  mobile?: boolean;
}

interface IRouteParams {
  movieID: string;
}

const NavBar = ({mobile}: IProps) => {
  const params = useParams<IRouteParams>();
  return (
    <nav className="flex items-center justify-between flex-wrap bg-teal-500 p-3">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <img
          color="white"
          src="https://img.icons8.com/ios/50/000000/maxcdn.png"
          className="mr-5"
        />
        <span className="font-semibold text-xl tracking-tight">
          The Movie DB Application
        </span>
      </div>
      {mobile && params.movieID ? <Link to="/">Back</Link> : null}
    </nav>
  );
};

export default NavBar;
