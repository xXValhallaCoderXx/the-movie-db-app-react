import React from "react";
import {useParams} from "react-router-dom";
import {parseMoviePages} from "shared/utils";
import Pagination from "./pagination";

interface IRouteParams {
  movieID: string;
}

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
  const params = useParams<IRouteParams>();
  const [page, setPage] = React.useState(0);
  const [paginatedResults, setPaginatedResults] = React.useState([[]]);
  console.log("PAGE: ", paginatedResults)
  React.useEffect(() => {
    setPaginatedResults(parseMoviePages(props.data));
  }, []);
  const componentClassName = [
    "text-sm",
    "w-full",
    "bg-white shadow-md rounded my-6",
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
      <th
        className="py-4 px-6 bg-grey-lightest font-bold uppercase text-sm text-grey-dark border-b border-grey-light text-left"
        key={index}>
        {el.toUpperCase()}
      </th>
    ));
  }
  function handleSelected(row: any) {
    if (row.id === params.movieID) {
      return "border 2px black";
    }
  }

  function renderBody() {
    // @ts-ignore
    return paginatedResults[page].map((el: string, index: number) => {
      return (
        <tr
          className=""
          style={{border: handleSelected(el)}}
          onClick={handleRowClick(el)}
          key={index * 0.1}>
          {Object.values(el).map(value => (
            <td
              className={`py-4 px-6 border-b border-grey-light cursor-pointer`}
              key={index * 0.2}>
              {value}
            </td>
          ))}
        </tr>
      );
    });
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
      <div className="mt-2">
        <Pagination pages={paginatedResults} goTo={goToPage} />
      </div>
    </div>
  );
};

export default DataTable;
