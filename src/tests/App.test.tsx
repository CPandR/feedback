import { render, screen } from "@testing-library/react";
import FeedbackForm from "../pages/FeedbackForm";

test("renders learn react link", () => {
  render(<FeedbackForm />);
  const linkElement = screen.getByText(/your feedback/i);
  expect(linkElement).toBeInTheDocument();
});
