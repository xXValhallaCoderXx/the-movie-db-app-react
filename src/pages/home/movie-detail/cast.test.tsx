import React from "react";
import {castData} from "../../../../__mocks__/mock-data";
import {shallow} from "enzyme";
import Cast from "./cast";

describe("Movie Details - Cast", () => {
  it("should render correctly without data", () => {
    const component = shallow(<Cast cast={[]} />);
    expect(component.find("#no-cast").text()).toEqual("No Cast Data");
    expect(component).toMatchSnapshot();
  });
  it("should render correctly with data", () => {
    const component = shallow(<Cast cast={castData} />);
    expect(component.find("#cast-avatar-name").text()).toEqual(
      castData[0].name
    );
    expect(component.find("#cast-avatar-character").text()).toEqual(
      castData[0].character
    );
    expect(component).toMatchSnapshot();
  });
});
