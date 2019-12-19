import React from "react";
import {Loader} from "shared/components";

interface ICol {
  header: string;
  name: string;
}

interface IProps {
  cols: ICol[];
  data: any;
  onClick: any;
  loading: boolean;
}

const TableView = ({cols, data, onClick, loading}: IProps) => {
  function emptyState() {
    return (
      <tr>
        <td
          className="py-4 px-6 bg-grey-lightest font-bold uppercase text-sm text-grey-dark border-b border-grey-light text-left"
          colSpan={cols.length}>
          No Search Results
        </td>
      </tr>
    );
  }

  function renderData() {
    return data.map(row => (
      <tr onClick={onClick(row)} key={row.id}>
        {cols.map(col => (
          <td
            className="py-4 px-6 border-b border-grey-light cursor-pointer"
            key={col.name}>
            {row[col.name]}
          </td>
        ))}
      </tr>
    ));
  }

  function handleLoader() {
    if (loading) {
      return (
        <tr>
          <td className="p-5">
            <Loader />
          </td>
        </tr>
      );
    } else {
      return data && data.length > 0 ? renderData() : emptyState();
    }
  }
  return (
    <table className="text-sm w-full bg-white shadow-md rounded my-6">
      <thead>
        <tr>
          {cols.map(col => (
            <th
              className="py-4 px-6 bg-grey-lightest font-bold uppercase text-sm text-grey-dark border-b border-grey-light text-left"
              key={col.name}>
              {col.header}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>{handleLoader()}</tbody>
    </table>
  );
};

export default TableView;
