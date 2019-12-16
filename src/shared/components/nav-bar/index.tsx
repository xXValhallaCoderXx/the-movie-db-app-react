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
    <nav className="flex items-center justify-between flex-wrap bg-tmd-dark p-4 fixed w-full">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <svg
          className="fill-current h-8 w-8 mr-2"
          width="54"
          height="54"
          viewBox="0 0 54 54"
          xmlns="http://www.w3.org/2000/svg">
          <path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z" />
        </svg>
        <Link to="/">
          <span className="font-semibold text-xl tracking-tight text-tmd-green hover:text-tmd-light cursor-pointer">
            The Movie DB App
          </span>
        </Link>
      </div>
      <a
        href="#"
        className="inline-block text-sm px-4 py-2 leading-none border rounded text-tmd-green border-tmd-green hover:border-transparent hover:text-tmd-dark hover:bg-tmd-light mt-4 lg:mt-0">
        Back
      </a>
    </nav>
  );
};

export default NavBar;
