import React from "react";
import {MemoryRouter, Link} from "react-router-dom";
import {shallow, mount} from "enzyme";
import DataTable from "./index";

describe("Data Table Component", () => {
  it("should render correctly", () => {
    const component = shallow(
      <MemoryRouter>
        <DataTable data={[{id: "1"}]} loading={false} />
      </MemoryRouter>
    );
    expect(component).toMatchSnapshot();
  });
  it("should render rows correctly", () => {
    const component = mount(
      <MemoryRouter>
        <DataTable data={[{id: "1"}]} loading={false} />
      </MemoryRouter>
    );
    // const firstTableRow = component.at(1).find('table').find('tbody').find('tr').first();
  
    console.log("t: ", component)
    // expect(tableCell).toContain("1")
  });
});
