import React from "react";
import {Layout, DataTable} from "shared/components";
import {parseMovieData} from "shared/utils";
import {IMovieResponse} from "./home-reducer";
import {SearchBar} from "./components";
const styles = require("./home.module.scss");

interface IProps {
  onSubmit: (event: React.FormEvent) => void;
  onChange: (event: React.FormEvent) => void;
  onRowClick: (id: string) => void;
  results: IMovieResponse;
  selectedMovie: any;
}

const MobileView = (props: IProps) => {
  const {onChange, results, onRowClick} = props;

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
    </Layout>
  );
};

export default MobileView;
