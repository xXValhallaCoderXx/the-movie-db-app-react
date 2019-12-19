import {
  searchMovieResponse,
  invalidSearchResponse,
  mockPaginationData
} from "../../../__mocks__/mock-data";
import {parseMovieData, parseMoviePages} from "./parse-movies";

describe("Utils - Parse Movie Data", () => {
  it("parses movie data correctly", () => {
    const result = parseMovieData(searchMovieResponse);
    expect(result[0]).toMatchObject({id: "1", title: "Avengers"});
  });
  it("returns the correct number of results", () => {
    const result = parseMovieData(searchMovieResponse);
    expect(result.length).toEqual(searchMovieResponse.length);
  });
  it("filters incorrectly parsed data", () => {
    const result = parseMovieData(invalidSearchResponse);
    expect(result.length).toEqual(0);
  });
});

describe("Utils - Parse Pagination Data Correctly", () => {
  const mockData = mockPaginationData(searchMovieResponse);
  it("returns arrays with a maximum of 10 items", () => {
    const result = parseMoviePages(mockData);
    expect(result[0].length).toEqual(10);
  });
  it("returns the correct number of arrays", () => {
    const result = parseMoviePages(mockData);
    expect(result.length).toEqual(7);
  });
  it("returns the last array with correct number of items", () => {
    const result = parseMoviePages(mockData);
    expect(result.slice(-1)[0].length).toEqual(1);
  });
});
