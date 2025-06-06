import { act } from "react-dom/test-utils";
import { fireEvent, render, screen } from "@testing-library/react";
import RestaurantMenu from "../RestaurantMenu";
import Header from "../../Components/Header";
import Cart from "../Cart";
import MOCK_DATA from "../../utils/Mocks/mockResMenu.json";
import { Provider } from "react-redux";
import Store from "../../store";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA);
    },
  });
});

it("Should load Restaurent Menu Component", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Provider store={Store}>
          <Header />
          <RestaurantMenu />
          <Cart />
        </Provider>
      </BrowserRouter>
    )
  );

  const accordionHeader = screen.getByText(
    "Mutton Biryani (Har-dil-Azeez Gosht)"
  );
  fireEvent.click(accordionHeader);

  expect(screen.getAllByTestId("foodItems").length).toBe(20);

  expect(screen.getByText("Cart")).toBeInTheDocument();

  const addBtns = screen.getAllByRole("button", { name: "ADD+" });
  fireEvent.click(addBtns[0]);

  expect(screen.getByText("Cart 1")).toBeInTheDocument();

  fireEvent.click(addBtns[1]);

  expect(screen.getByText("Cart 2")).toBeInTheDocument();

  expect(screen.getAllByAltText("foodItems").length).toBe(7);

  fireEvent.click(screen.getByRole("button", { name: "Clear Cart" }));

    expect(screen.getAllByAltText("foodItems").length).toBe(5);

});
