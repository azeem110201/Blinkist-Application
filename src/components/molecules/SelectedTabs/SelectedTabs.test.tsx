import { render, screen } from "@testing-library/react";
import SelectedTabs from "./SelectedTabs";

describe("Selected Tabs", () => {
  test("Currently Reading", () => {
    render(<SelectedTabs />);
    const searchElement = screen.getByText(
      "Currently Reading"
    );
    expect(searchElement).toBeInTheDocument();
  });
  test("Content", () => {
    render(<SelectedTabs />);
    const searchElement = screen.getByText(
      "Content"
    );
    expect(searchElement).toBeInTheDocument();
  });
  test("Connected Services", () => {
    render(<SelectedTabs />);
    const searchElement = screen.getByText(
      "Connected Services"
    );
    expect(searchElement).toBeInTheDocument();
  });
});
