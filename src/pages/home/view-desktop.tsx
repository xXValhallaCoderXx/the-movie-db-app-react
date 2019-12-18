import React from "react";
import {SearchBar} from "./components";
import MovieDetail from "./movie-detail";
import {DataTable, Alert} from "shared/components";
import {parseMovieData} from "shared/utils";
import {IMovieDetail} from "shared/types";
const styles = require("./home.module.scss");

interface IProps {
  onChange: (event: React.FormEvent) => void;
  onRowClick: (id: string) => void;
  loading: boolean;
  results: IMovieDetail[];
}

export default ({onChange, results, onRowClick, loading}: IProps) => {
  const parsedMovieData = parseMovieData(results);
  const {search_container} = styles;
  return (
    <div
      className="flex bg-tmd-dark-green justify-center p-20 pt-32"
      style={{height: "100%"}}>
      <div
        className="flex rounded shadow-lg bg-white w-screen"
        style={{maxWidth: 1300}}>
        <div
          className={`md:w-32/6 lg:w-2/6 p-10 bg-tmd-blue ${search_container}`}>
          <SearchBar onSearchChange={onChange} />
          <section id="table-wrapper" className="mt-10 text-sm">
            {/* <DataTable
              loading={loading}
              onRowClick={onRowClick}
              type="auto"
              data={parsedMovieData}
            /> */}
          </section>
        </div>
        <MovieDetail />
      </div>
      <Alert />
    </div>
  );
};
