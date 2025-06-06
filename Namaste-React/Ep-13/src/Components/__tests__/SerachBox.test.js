import { fireEvent, render, screen } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import Body from "../Body";
import MOCK_DATA from "../../utils/Mocks/mockResListData.json";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom"

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA);
    },
  });
});

//Search Button 
it("Should Search ResList for Foods test input", async () => {
  await act(async () => {
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    );
  });

  const cardsBeforeSearch = screen.getAllByTestId("resCard") 
  expect(cardsBeforeSearch.length).toBe(7);

  const searchButton = screen.getByRole("button", {name: "Search"});
  const searchInput = screen.getByTestId("searchInput");
  fireEvent.change(searchInput, { target: {  value: "Foods"}});
  fireEvent.click(searchButton);

  const cardAfterSearch = screen.getAllByTestId("resCard");
  expect(cardAfterSearch.length).toBe(2)
});

//Top Rated Restaurent
it("Should filter top rated restaurent", async () => {
  await act(async () => {
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    );
  });

  const cardsBeforeFilter = screen.getAllByTestId("resCard") 
  expect(cardsBeforeFilter.length).toBe(7);

  const topRatedButton = screen.getByRole("button", {name: "Top Rated Restaurent"});
  fireEvent.click(topRatedButton)

  const cardsAfterFilter = screen.getAllByTestId("resCard")
  expect(cardsAfterFilter.length).toBe(6)
  
});