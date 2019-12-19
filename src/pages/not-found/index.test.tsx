import React from "react";
import {MemoryRouter, Link} from "react-router-dom";
import {shallow, mount} from "enzyme";
import NotFound from "./index";

describe("Not Found Page", () => {
  const setState = jest.fn();
  const useStateSpy = jest.spyOn(React, "useState");
  // @ts-ignore
  useStateSpy.mockImplementation(init => [init, setState]);
  it("should render correctly", () => {
    const component = shallow(<NotFound />);
    expect(component).toMatchSnapshot();
  });
  it("includes link to Home page", () => {
    const wrapper = mount(
      <MemoryRouter>
        <NotFound />
      </MemoryRouter>
    );
    expect(
      wrapper
        .find(Link)
        .at(1)
        .prop("to")
    ).toEqual("/movies");
  });
});
