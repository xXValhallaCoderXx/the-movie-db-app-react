import React from "react";
import {shallow} from "enzyme";
import Pagination from "./pagination";

describe("Data Table Component", () => {
  const pages = [{id: "1"}, {id: "2"}];

  const onClick = jest.fn();
  it("should render correctly", () => {
    const component = shallow(<Pagination pages={pages} goTo={onClick} />);
    expect(component).toMatchSnapshot();
  });
  it("should render correct number of buttons", () => {
    const component = shallow(<Pagination pages={pages} goTo={onClick} />);

    const pagination = component.find("#pagination");
    expect(pagination).toHaveLength(1);

    const buttons = component.find("button");
    expect(buttons).toHaveLength(pages.length);
  });
  it("should render correct content in buttons", () => {
    const component = shallow(<Pagination pages={pages} goTo={onClick} />);

    const buttons = component.find("button");
    expect(buttons).toHaveLength(pages.length);

    buttons.forEach((btn, idx) => {
      expect(btn.text()).toEqual((idx + 1).toString());
    });
  });
});
