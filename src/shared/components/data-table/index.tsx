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
}

const DataTable = (props: IProps) => {
  const componentClassName = [
    "some-base-class",
    props.type === "fixed" && "table-fixed",
    props.type === "auto" && "table-auto"
  ]
    .filter(Boolean)
    .join(" ");

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
      <tr key={index}>
        {Object.values(el).map(value => (
          <td key={index}>{value}</td>
        ))}
      </tr>
    ));
  }
  return (
    <table className={componentClassName} {...props}>
      <thead>{renderHeaders()}</thead>
      <tbody>{renderBody()}</tbody>
    </table>
  );
};

DataTable.TH = function TH(props: any) {
  return <th {...props} />;
};

DataTable.TR = function TR(props: any) {
  return <tr {...props} />;
};

DataTable.TD = function TD(props: any) {
  return <td {...props} />;
};

export default DataTable;
