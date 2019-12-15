import React from "react";
import {SearchBar} from "./components";
import MovieDetail from "./movie-detail";
import {DataTable, Loader} from "shared/components";
import {parseMovieData} from "shared/utils";
const styles = require("./home.module.scss");

interface IProps {
  onSubmit: (event: React.FormEvent) => void;
  onChange: (event: React.FormEvent) => void;
  onRowClick: (id: string) => void;
  loading: boolean;
  results: any;
  selectedMovie: any;
}

const HomePageView = (props: IProps) => {
  const {onSubmit, onChange, results, onRowClick, selectedMovie} = props;
  function handleRowClick(row: any) {
    onRowClick(row.id);
  }

  function renderDataTable() {
    if (results.length > 0) {
      const parsedMovieData = parseMovieData(results);
      return (
        <DataTable
          loading={false}
          onRowClick={handleRowClick}
          type="auto"
          data={parsedMovieData}
        />
      );
    } else if (props.loading) {
      return (
        <div>
          <Loader />
        </div>
      );
    }
    return null;
  }
  return (
    <div className="flex h-full">
      <div className={`w-2/6 p-10 ${styles.search_container}`}>
        <div className="flex items-center">
          <form onSubmit={onSubmit} className="flex-grow">
            <SearchBar onSearchChange={onChange} />
          </form>
        </div>
        <section id="table-wrapper" className="mt-10 text-sm">
          {renderDataTable()}
        </section>
      </div>
      <div className="w-4/6 p-10 bg-black text-white">
        <MovieDetail selectedMovie={selectedMovie} />
      </div>
    </div>
  );
};

export default HomePageView;
