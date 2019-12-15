import React from "react";
import {IMovieResponse} from "./home-reducer";
import {SearchBar} from "./components";
import MovieDetail from "./movie-detail";
import {DataTable, Layout} from "shared/components";
import {parseMovieData} from "shared/utils";
const styles = require("./home.module.scss");

interface IProps {
  onSubmit: (event: React.FormEvent) => void;
  onChange: (event: React.FormEvent) => void;
  onRowClick: (id: string) => void;
  results: IMovieResponse;
  selectedMovie: any;
}

const HomePageView = (props: IProps) => {
  const {onSubmit, onChange, results, onRowClick, selectedMovie} = props;
  function handleRowClick(row: any) {
    onRowClick(row.id);
  }

  function renderDataTable() {
    if (results.results.length > 0) {
      const parsedMovieData = parseMovieData(results.results);
      return (
        <DataTable
          loading={results.loading}
          onRowClick={handleRowClick}
          type="auto"
          data={parsedMovieData}
        />
      );
    }
    return null;
  }
  return (
    <Layout>
      <div className="flex h-full">
        <div className={`w-2/6 p-10 ${styles.search_container}`}>
          <div className="flex items-center">
            <div className="mr-5 text-xl">Search</div>
            <form onSubmit={onSubmit} className="flex-grow">
              <SearchBar onSearchChange={onChange} />
            </form>
          </div>
          <section id="table-wrapper" className="mt-10 text-sm">
            {renderDataTable()}
          </section>
        </div>
        <div className="w-4/6 p-10">
          <MovieDetail selectedMovie={selectedMovie} />
        </div>
      </div>
    </Layout>
  );
};

export default HomePageView;
