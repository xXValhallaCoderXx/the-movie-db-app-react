import "@testing-library/jest-dom/extend-expect";
import React from "react";
import {render, fireEvent} from "@testing-library/react";
import HomeContainer from "./index";

test("Render children if checked", () => {
  const message = "This is some text";
  const {queryByText, getByLabelText, getByText, getByTestId} = render(
    <HomeContainer>{message}</HomeContainer>
  );
  expect(queryByText(message)).toBeNull();
  fireEvent.click(getByTestId("test-checkbox"));
  expect(getByText(message)).toBeInTheDocument();
});
