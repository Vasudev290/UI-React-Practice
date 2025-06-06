import { render, screen, fireEvent } from "@testing-library/react";
import Header from "../Header";
import { Provider } from "react-redux";
import Store from "../../store";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

it("Should render Header Component with a login button", () => {
  render(
    <BrowserRouter>
      <Provider store={Store}>
        <Header />
      </Provider>
    </BrowserRouter>
  );
  const loginButton = screen.getByRole("button", {name: "Login"});
  //const loginButton = screen.getByText("Login");

  //Assertion
  expect(loginButton).toBeInTheDocument();
});

it("Should render Header Component with a Cart item is 0 ", () => {
  render(
    <BrowserRouter>
      <Provider store={Store}>
        <Header />
      </Provider>
    </BrowserRouter>
  );
  const cartItem = screen.getByText("Cart");
  //Assertion
  expect(cartItem).toBeInTheDocument();

  
});

//With RegEx
it("Should render Header Component with a Cart", () => {
  render(
    <BrowserRouter>
      <Provider store={Store}>
        <Header />
      </Provider>
    </BrowserRouter>
  );
  const cartItem = screen.getByText(/Cart/);
  //Assertion
  expect(cartItem).toBeInTheDocument();

  
});

//The Login button Tenrey working or not!
it("Should change login button to logout on click!", () => {
  render(
    <BrowserRouter>
      <Provider store={Store}>
        <Header />
      </Provider>
    </BrowserRouter>
  );
  const loginChanging = screen.getByRole("button", {name: "Login"});
  fireEvent.click(loginChanging);

  const logoutChanging = screen.getByRole("button", {name: "Logout"});
  //Assertion
  expect(logoutChanging).toBeInTheDocument();
});