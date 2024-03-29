import React from "react";
import {useParams} from "react-router-dom";
import {DataTable} from "shared/components";
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
  const {onChange, results, onRowClick, loading} = props;

  function renderView() {
    if (params.movieID) {
      return (
        <div className="pt-20">
          <MovieDetail />;
        </div>
      );
    } else {
      return (
        <div className="flex justify-center min-h-screen">
          <div className="w-3/5 mt-16 bg-tmd-blue w-full pt-5 pb-5">
            <div className="flex items-center pl-5 pr-5 pb-5">
              <SearchBar onSearchChange={onChange} />
            </div>
            <section id="table-wrapper" className="text-sm pl-5 pr-5">
              <DataTable
                loading={loading}
                onRowClick={onRowClick}
                data={results}
              />
            </section>
          </div>
        </div>
      );
    }
  }
  return renderView();
};

export default MobileView;
