import "@testing-library/jest-dom/extend-expect";
import React from "react";
import {render, fireEvent} from "@testing-library/react";
import {StaticRouter} from "react-router";
import MainView from "./view-desktop";

test("Search result empty on load", () => {
  const mockOnRowClick = jest.fn(x => null);
  const mockOnChange = jest.fn(x => null);
  const {queryByText, getByLabelText, getByText, getByTestId} = render(
    <StaticRouter>
      <MainView
        results={[]}
        onRowClick={mockOnRowClick}
        loading={false}
        onChange={mockOnChange}
      />
    </StaticRouter>
  );
});
