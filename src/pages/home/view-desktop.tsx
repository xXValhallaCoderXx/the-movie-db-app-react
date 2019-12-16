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
}

const HomePageView = (props: IProps) => {
  const {onSubmit, onChange, results, onRowClick} = props;
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
    <div className="flex bg-tmd-dark-green justify-center p-20 pt-32">
      <div
        className="flex rounded shadow-lg bg-white w-screen"
        style={{maxWidth: 1300}}>
        <div
          className={`md:w-32/6 lg:w-2/6 p-10 bg-tmd-blue ${
            styles.search_container
          }`}>
          <SearchBar onSearchChange={onChange} />
          <section id="table-wrapper" className="mt-10 text-sm">
            {renderDataTable()}
          </section>
        </div>
        <div>
          <MovieDetail />
        </div>
      </div>
    </div>
  );
};

export default HomePageView;
