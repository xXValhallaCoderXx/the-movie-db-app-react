import React from "react";
import {reviewData} from "../../../../__mocks__/mock-data";
import {shallow} from "enzyme";
import Reviews from "./reviews";

describe("Movie Details - Reviews", () => {
  it("should render correctly without data", () => {
    const component = shallow(<Reviews reviews={[]} />);
    expect(component.find("#no-review").text()).toEqual("No Review Data");
    expect(component).toMatchSnapshot();
  });
  it("should render correctly with data", () => {
    const component = shallow(<Reviews reviews={reviewData} />);
    expect(component.find("#review-author").text()).toEqual(
      reviewData[0].author
    );
    expect(component.find("#review-content").text()).toEqual(
      reviewData[0].content
    );
    expect(component).toMatchSnapshot();
  });
});
