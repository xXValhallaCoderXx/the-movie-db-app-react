import React from "react";
import {shallow} from "enzyme";
import DataTable from "./view-table";

describe("Data Table Component", () => {
  const cols = [
    {header: "ID", name: "id"},
    {header: "Name", name: "name"},
    {header: "Email", name: "email"}
  ];
  const data = [
    {id: 5, name: "John", email: "john@example.com"},
    {id: 6, name: "Liam", email: "liam@example.com"},
    {id: 7, name: "Maya", email: "maya@example.com", someTest: 10},
    {id: 8, name: "Oliver", email: "oliver@example.com", hello: "hello world"},
    {id: 25, name: "Amelia", email: "amelia@example.com"}
  ];
  const onClick = jest.fn();
  it("should render correctly", () => {
    const component = shallow(
      <DataTable loading={false} cols={cols} data={data} onClick={onClick} />
    );
    expect(component).toMatchSnapshot();
  });
  it("should render rows correctly with data", () => {
    const component = shallow(
      <DataTable loading={false} cols={cols} data={data} onClick={onClick} />
    );
    // const firstTableRow = component.at(1).find('table').find('tbody').find('tr').first();

    const table = component.find("table");
    expect(table).toHaveLength(1);

    // const thead = table.find("thead");
    // expect(thead).toHaveLength(1);

    // const headers = thead.find("th");
    // expect(headers).toHaveLength(Object.keys(data[0]).length);

    // headers.forEach((th, idx) => {
    //   expect(th.text()).toEqual(data[idx].id);
    // });
    // const tbody = table.find("tbody");
    // expect(tbody).toHaveLength(1);

    // const rows = tbody.find("tr");
    // expect(rows).toHaveLength(data.length);

    // rows.forEach((tr, rowIndex) => {
    //   const cells = tr.find("td");
    //   expect(cells).toHaveLength(data.length);
    //   expect(cells.at(0).text()).toEqual(data[rowIndex].id);
    // });
  });

  // it("should render if no data", () => {
  //   const cols2 = [
  //     {header: "ID", name: "id"},
  //     {header: "Name", name: "name"},
  //     {header: "Email", name: "email"}
  //   ];
  //   const component = mount(
  //     <DataTable cols={cols2} data={[]} onClick={onClick} />
  //   );

  //   const table = component.find("table");
  //   expect(table).toHaveLength(1);

  //   const thead = table.find("thead");
  //   expect(thead).toHaveLength(1);

  //   const headers = thead.find("th");
  //   expect(headers).toHaveLength(cols.length);

  //   headers.forEach((th, idx) => {
  //     expect(th.text()).toEqual(cols[idx].header);
  //   });

  //   const tbody = table.find("tbody");
  //   expect(tbody).toHaveLength(1);

  //   const row = tbody.find("tr");
  //   expect(row).toHaveLength(1);

  //   const cell = row.find("td");
  //   expect(cell).toHaveLength(1);

  //   expect(cell.prop("colSpan")).toEqual(cols.length);

  //   expect(cell.text()).toEqual("There is no data in this table");
  // });
});
