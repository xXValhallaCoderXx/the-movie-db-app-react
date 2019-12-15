import React from "react";
import {parseMoviePages} from "shared/utils";
import Pagination from "./pagination";

interface IProps {
  type?: "fixed" | "auto";
  data: any;
  headers?: string[];
  onRowClick?: (data: any) => void;
  loading: boolean;
}

function greyRow(index: number) {
  const greyRowClass = "";
  // if (index % 2 === 0) {
  //   greyRowClass = "bg-gray-100";
  // }
  return greyRowClass;
}

const DataTable = (props: IProps) => {
  const [page, setPage] = React.useState(0);
  const [paginatedResults, setPaginatedResults] = React.useState([[]]);
  React.useEffect(() => {
    setPaginatedResults(parseMoviePages(props.data));
  }, []);
  const componentClassName = [
    "some-base-class",
    props.type === "fixed" && "table-fixed",
    props.type === "auto" && "table-auto"
  ]
    .filter(Boolean)
    .join(" ");

  const handleRowClick = (data: any) => () => {
    props.onRowClick && props.onRowClick(data);
  };

  function renderHeaders() {
    let x;
    if (props.headers) {
      x = props.headers;
    } else {
      const firstRow = props.data[0];
      x = Object.keys(firstRow);
    }
    return x.map((el: string, index: number) => (
      <th className="text-left" key={index}>
        {el.toUpperCase()}
      </th>
    ));
  }

  function renderBody() {
    // @ts-ignore
    return paginatedResults[page].map((el: string, index: number) => (
      <tr
        className="hover:bg-black"
        onClick={handleRowClick(el)}
        key={index * 0.1}>
        {Object.values(el).map(value => (
          <td
            className={`border px-4 py-2 cursor-pointer ${greyRow(
              index * 0.1
            )}`}
            key={index * 0.2}>
            {value}
          </td>
        ))}
      </tr>
    ));
  }
  function goToPage(e: any) {
    setPage(e.target.value);
  }

  return (
    <div>
      <table className={componentClassName} {...props}>
        <thead>
          <tr>{renderHeaders()}</tr>
        </thead>
        <tbody>{renderBody()}</tbody>
      </table>
      <Pagination pages={paginatedResults} goTo={goToPage} />
    </div>
  );
};

export default DataTable;
