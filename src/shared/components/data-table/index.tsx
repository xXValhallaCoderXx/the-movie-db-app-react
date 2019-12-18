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
  }, []);

  const handleRowClick = (data: any) => () => {
    props.onRowClick && props.onRowClick(data);
  };

  function goToPage(e: any) {
    setPage(e.target.value);
  }

  return (
    <div>
      <TableView
        cols={[{name: "id", header: "ID"}]}
        data={paginatedResults[page]}
        onClick={handleRowClick}
      />
      <div className="mt-2">
        <Pagination pages={paginatedResults} goTo={goToPage} />
      </div>
    </div>
  );
};

export default DataTableContainer;
