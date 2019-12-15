import React from "react";
import {IMovieResponse} from "./home-reducer";
import {SearchBar, MovieDetail} from "./components";
import {DataTable, Layout} from "shared/components";
import {parseMovieData} from "shared/utils";
const styles = require("./home.module.scss");

interface IProps {
  onSubmit: (event: React.FormEvent) => void;
  onChange: (event: React.FormEvent) => void;
  onRowClick: (id: string) => void;
  results: IMovieResponse;
}

const HomePageView = ({onSubmit, onChange, results, onRowClick}: IProps) => {
  console.log("RESULTS: ", results);
  const data = [
    {
      ID: "299536",
      Name: "Anssadsadasdadasam",
      Age: "20"
    },
    {
      ID: "299536",
      Name: "REN",
      Age: "33"
    },
    {
      ID: "299536",
      Name: "Anssadsadasdadasam",
      Age: "20"
    },
    {
      ID: "299536",
      Name: "REN",
      Age: "33"
    },
    {
      ID: "299536",
      Name: "Anssadsadasdadasam",
      Age: "20"
    },
    {
      ID: "299536",
      Name: "REN",
      Age: "33"
    }
  ];

  function handleRowClick(row: any) {
    onRowClick("299536");
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
          <MovieDetail />
        </div>
      </div>
    </Layout>
  );
};

export default HomePageView;
