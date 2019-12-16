import "@testing-library/jest-dom/extend-expect";
import React from "react";
import {render, fireEvent} from "@testing-library/react";
import {StaticRouter} from "react-router";
import NotFoundPage from "./index";

test("Not found page renders with expected content", () => {
  const message1 = "Ooops! Looks like you shouldn't be here!";
  const message2 = "Click HERE to go back";
  const {queryByText, getByLabelText, getByText, getByTestId} = render(
    <StaticRouter>
      <NotFoundPage />
    </StaticRouter>
  );
  expect(getByText(message1)).toBeInTheDocument();
  // expect(getByText(message2)).toBeInTheDocument();
});

test("Redirected from Not Found page on link click", () => {
  const message1 = "Ooops! Looks like you shouldn't be here!";
  const {getByTestId, getByText} = render(
    <StaticRouter>
      <NotFoundPage />
    </StaticRouter>
  );
  const redirectLink = getByTestId("home-link");
  fireEvent.click(redirectLink);
  expect(getByText(message1)).not.toBeInTheDocument();
});
