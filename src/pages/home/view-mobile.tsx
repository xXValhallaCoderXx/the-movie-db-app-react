import React from "react";
import {useParams} from "react-router-dom";
import {DataTable, Loader} from "shared/components";
import MovieDetail from "./movie-detail";
import {parseMovieData} from "shared/utils";
import {SearchBar} from "./components";

interface IRouteParams {
  movieID: string;
}

interface IProps {
  onChange: (event: React.FormEvent) => void;
  onRowClick: (id: string) => void;
  loading: boolean;
  results: any;
}

const MobileView = (props: IProps) => {
  const params = useParams<IRouteParams>();
  const {onChange, results, onRowClick} = props;
  console.log("LALALA");
  function handleRowClick(row: any) {
    onRowClick(row.id);
  }

  function renderDataTable() {
    if (props.loading) {
      return <Loader />;
    }
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
    }
    return null;
  }
  function renderView() {
    if (params.movieID) {
      return (
        <div className="pt-20">
          <MovieDetail />;
        </div>
      );
    } else {
      return (
        <div className="flex justify-center h-screen overflow-hidden">
          <div
            className="w-3/5 mt-20 bg-tmd-blue w-full"
            style={{height: "94vh"}}>
            <div className="flex items-center pt-10 p-5">
              <SearchBar onSearchChange={onChange} />
            </div>
            <section id="table-wrapper" className="mt-10 text-sm pl-20 pr-20">
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
