import React from "react";
import {parseMoviePages} from "shared/utils";
import TableView from "./view-table";
import Pagination from "./pagination";

interface IProps {
  type?: "fixed" | "auto";
  data: any;
  onRowClick?: (data: any) => void;
  loading: boolean;
}

const DataTableContainer = (props: IProps) => {
  const [page, setPage] = React.useState(0);
  const [paginatedResults, setPaginatedResults] = React.useState([[]]);
  React.useEffect(() => {
    setPaginatedResults(parseMoviePages(props.data));
  }, [props.data, page]);

  const handleRowClick = (data: any) => () => {
    props.onRowClick && props.onRowClick(data);
  };

  function goToPage(e: any) {
    setPage(e.target.value);
  }
  return (
    <div>
      <TableView
        cols={[{name: "title", header: "MOVIE TITLE"}]}
        data={paginatedResults[page]}
        onClick={handleRowClick}
        loading={props.loading}
      />
      <div className="mt-2 flex justify-center">
        <Pagination pages={paginatedResults} goTo={goToPage} />
      </div>
    </div>
  );
};

export default DataTableContainer;
