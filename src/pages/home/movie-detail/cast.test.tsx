import React from "react";
import {MemoryRouter, Link} from "react-router-dom";
import {castData} from "../../../../__mocks__/mock-data";
import {shallow, mount} from "enzyme";
import Cast from "./cast";

describe("Movie Details - Cast", () => {
  it("should render correctly without data", () => {
    const component = shallow(<Cast cast={[]} />);
    expect(component.find("#no-cast").text()).toEqual("No Cast Data");
    expect(component).toMatchSnapshot();
  });
  it("should render correctly with data", () => {
    const component = shallow(<Cast cast={castData} />);
    expect(component.find("#cast-avatar-name").text()).toEqual("Pikachuuuuu");
    expect(component).toMatchSnapshot();
  });
});
