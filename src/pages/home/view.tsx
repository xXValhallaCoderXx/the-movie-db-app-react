import React from "react";
import {IMovieResponse} from "./home-reducer";
import {SearchBar} from "./components";
import MovieDetail from "./movie-detail";
import {DataTable, Layout} from "shared/components";
import {useBreakpoints} from "shared/hooks";
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
  const point = useBreakpoints();
  const {onSubmit, onChange, results, onRowClick, selectedMovie} = props;
  console.log("POINT: ", point);
  function handleRowClick(row: any) {
    onRowClick(row.id);
  }

  function renderDataTable() {
    if (results.results.length === 0) {
      return <div>Enter Search</div>;
    } else {
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
  }
  return (
    <Layout>
      <h1 className="text-center text-2xl mt-5 mb-5">
        The Movie DB Application
      </h1>
      <div className="flex">
        <div className="w-1/2 p-10">
          <div className="flex items-center">
            <div className="mr-5 text-xl">Search</div>
            <form onSubmit={onSubmit} className="flex-grow">
              <SearchBar onSearchChange={onChange} />
            </form>
          </div>
          <section id="table-wrapper" className="mt-5">
            {renderDataTable()}
          </section>
        </div>
        <div className="w-1/2 p-10">
          <MovieDetail selectedMovie={selectedMovie} />
        </div>
      </div>
    </Layout>
  );
};

export default HomePageView;
