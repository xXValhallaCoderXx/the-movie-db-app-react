import React from "react";
import {shallow, mount} from "enzyme";
import {MemoryRouter} from "react-router-dom";
import NavBar from "./index";

describe("Nav Bar Component", () => {
  it("should render correctly", () => {
    const component = shallow(<NavBar movieID="" />);
    expect(component).toMatchSnapshot();
  });
  it("includes link to Home page and Mobile view link is not showing", () => {
    const wrapper = mount(
      <MemoryRouter>
        <NavBar movieID="" />
      </MemoryRouter>
    );
    expect(
      wrapper
        .find("#home-link")
        .at(0)
        .prop("to")
    ).toEqual("/movies");

    expect(wrapper.find("#mobile-back").exists()).toBeFalsy();
  });
  it("should have a back link on mobile if movie is selected", () => {
    const wrapper = mount(
      <MemoryRouter>
        <NavBar mobile movieID="1234" />
      </MemoryRouter>
    );
    expect(
      wrapper
        .find("#mobile-back")
        .at(0)
        .prop("to")
    ).toEqual("/movies");
  });
});
