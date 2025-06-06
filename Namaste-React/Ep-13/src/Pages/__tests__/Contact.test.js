import { render, screen } from "@testing-library/react";
import Contact from "../Contact"
import "@testing-library/jest-dom";

describe("Contact us page test case", () => {

  // beforeAll(() => {
  //   console.log("Before all")
  // });

  // afterAll(() => {
  //   console.log("After All")
  // })

  // afterEach(() => {
  //   console.log("After Each")
  // })

  it("Should load the 'Contact Us' heading on the contact page", () => {
    render(<Contact />);

    const heading = screen.getByRole("heading", { name: /contact us/i });

    expect(heading).toBeInTheDocument();
  });

  test("Should load the 'Contact Us' Button on the contact page", () => {
    render(<Contact />);

    const button = screen.getByRole("button");

    expect(button).toBeInTheDocument();
  });

  it("Should load the 'Contact Us' name on the contact page", () => {
    render(<Contact />);

    const inputName = screen.getByPlaceholderText("Your Name");

    expect(inputName).toBeInTheDocument();
  });

  it("Should load the 'Contact Us' 2 input boxs on the contact page", () => {
    render(<Contact />);

    //Querying
    const inputBoxes = screen.getAllByRole("textbox");
    console.log(inputBoxes.length);
    expect(inputBoxes.length).toBe(4);
  });
});
