import React from "react";
import {shallow, mount} from "enzyme";
import SearchBar from "./search-bar";

describe("Search Bar Component", () => {
  const mockOnChange = jest.fn();
  const setState = jest.fn();
  const useStateSpy = jest.spyOn(React, "useState");
  // @ts-ignore
  useStateSpy.mockImplementation(init => [init, setState]);
  it("should render correctly", () => {
    const component = shallow(<SearchBar onSearchChange={mockOnChange} />);
    expect(component).toMatchSnapshot();
  });
  it("should update state after input", () => {
    const wrapper = mount(<SearchBar onSearchChange={mockOnChange} />);
    const input = wrapper.find("input");
    // @ts-ignore
    input.instance().value = "Pokemon";
    input.simulate("change");
    expect(setState).toHaveBeenCalledWith("Pokemon");
  });
});
