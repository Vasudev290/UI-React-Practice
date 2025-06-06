import { render, screen } from "@testing-library/react";
import RestaurentCard from "../RestaurentCard";
import MOCK_DATA from "../../utils/Mocks/ResCardMock.json";
import "@testing-library/jest-dom";
import { withPromotedLabel } from "../RestaurentCard";

describe("RestaurentCard Component Tests", () => {

  it("Should render RestaurentCard component with Data", () => {
    render(<RestaurentCard resData={MOCK_DATA} />);

    const name = screen.getByText("Sharief Bhai Biryani");

    expect(name).toBeInTheDocument();
  });

  //Test for HOC
  it("Should render RestaurentCard component with promoted Label", () => {
    const PromotedRestaurentCard = withPromotedLabel(RestaurentCard);
    render(<PromotedRestaurentCard resData={MOCK_DATA} />);

    const promotedLabel = screen.getByText("Promoted");
    expect(promotedLabel).toBeInTheDocument();
  });
  
});
