import React from "react";
import {useParams} from "react-router-dom";
import {DataTable} from "shared/components";
import MovieDetail from "./movie-detail";
import {parseMovieData} from "shared/utils";
import {SearchBar} from "./components";
const styles = require("./home.module.scss");

interface IRouteParams {
  movieID: string;
}

interface IProps {
  onSubmit: (event: React.FormEvent) => void;
  onChange: (event: React.FormEvent) => void;
  onRowClick: (id: string) => void;
  results: any;
  selectedMovie: any;
}

const MobileView = (props: IProps) => {
  const params = useParams<IRouteParams>();
  const {onChange, results, onRowClick, selectedMovie} = props;

  function handleRowClick(row: any) {
    onRowClick(row.id);
  }

  function renderDataTable() {
    if (results.results.length > 0) {
      const parsedMovieData = parseMovieData(results);
      return (
        <DataTable
          loading={false}
          onRowClick={handleRowClick}
          type="auto"
          data={parsedMovieData}
        />
      );
    }
    return null;
  }
  function renderView() {
    if (params.movieID) {
      return (
        <div className="p-10">
          <MovieDetail selectedMovie={selectedMovie} />;
        </div>
      );
    } else {
      return (
        <div className="flex justify-center h-full">
          <div className="w-3/5 mt-10">
            <div className="flex items-center">
              <SearchBar onSearchChange={onChange} />
            </div>
            <section id="table-wrapper" className="mt-10 text-sm">
              {renderDataTable()}
            </section>
          </div>
        </div>
      );
    }
  }
  return renderView();
};

export default MobileView;
