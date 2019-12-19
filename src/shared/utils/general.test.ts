import {truncate, isEmpty} from "./general";

describe("Utils - Truncate", () => {
  it("truncates string as expected", () => {
    const sample = "This is a string to truncate";
    const result = truncate(sample, 7);
    expect(result).toEqual("This...");
  });
  it("truncates string with custom ending", () => {
    const sample = "This is a string to truncate";
    const result = truncate(sample, 7, "???");
    expect(result).toEqual("This???");
  });
});

describe("Utils - isEmpty", () => {
  it("handles empty object correctly", () => {
    const demoObject = {};
    const result = isEmpty(demoObject);
    expect(result).toEqual(true);
  });
  it("handles object with data correctly", () => {
    const demoObject = {id: "pikachu"};
    const result = isEmpty(demoObject);
    expect(result).toEqual(false);
  });
});
