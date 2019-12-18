import React from "react";

interface ICol {
  header: string;
  name: string;
}

interface IProps {
  cols: ICol[];
  data: any;
  onClick: any;
}

const TableView = ({cols, data, onClick}: IProps) => {
  function renderBody() {
    if (data.length > 0) {
      return data.map((el: string, index: number) => {
        return (
          <tr onClick={onClick(el)} key={Math.random()}>
            {Object.values(el).map(value => (
              <td
                className={`py-4 px-6 border-b border-grey-light cursor-pointer`}
                key={Math.random()}>
                {value}
              </td>
            ))}
          </tr>
        );
      });
    } else {
      return <td colSpan={data.length}>There is no Data</td>;
    }
  }

  // function renderHeaders() {
  //   return Object.keys(data[0]).map((el: string, index: number) => (
  //     <th
  //       className="py-4 px-6 bg-grey-lightest font-bold uppercase text-sm text-grey-dark border-b border-grey-light text-left"
  //       key={index}>
  //       {el.toUpperCase()}
  //     </th>
  //   ));
  // }
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
      <tbody>
        {data.map(row => (
          <tr key={row.id}>
            {cols.map(col => (
              <td
                className="py-4 px-6 border-b border-grey-light cursor-pointer"
                key={col.name}>
                {row[col.name]}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TableView;
