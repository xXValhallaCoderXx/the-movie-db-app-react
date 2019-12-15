import React from "react";
import {IMovieResponse} from "pages/home/home-reducer";

interface IColumn {
  id: string;
  label: string;
}

// interface IProps {
//   results: IMovieResponse;
//   columns: IColumn[];
// }

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
  const componentClassName = [
    "some-base-class",
    props.type === "fixed" && "table-fixed",
    props.type === "auto" && "table-auto"
  ]
    .filter(Boolean)
    .join(" ");

  const handleRowClick = (data: any) => () => {
    console.log("ID : ", data);
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
    return props.data.map((el: string, index: number) => (
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
  return (
    <table className={componentClassName} {...props}>
      <thead>
        <tr>{renderHeaders()}</tr>
      </thead>
      <tbody>{renderBody()}</tbody>
    </table>
  );
};

export default DataTable;
