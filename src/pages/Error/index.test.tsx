import { render, screen } from '@testing-library/react';
import { Error } from './index';

test('renders Error component with correct error message - Invalid ID', () => {
  render(<Error error="Invalid ID" />);
  const title = screen.getByText(/Uh oh!/i);
  const details = screen.getByText(/It looks like you've taken a wrong turn./i);
  expect(title).toBeInTheDocument();
  expect(details).toBeInTheDocument();
});

test('renders Error component with correct error message - Booking not complete', () => {
  render(<Error error="Booking not complete" />);
  const title = screen.getByText(/Uh oh!/i);
  const detail = screen.getByText(
    /It looks like the session you are trying to leave feedback for has not yet been marked as complete/i,
  );
  expect(title).toBeInTheDocument();
  expect(detail).toBeInTheDocument();
});

test('renders Error component with correct error message - Feedback not required', () => {
  render(<Error error="Feedback not required" />);
  const title = screen.getByText(/Uh oh!/i);
  const detail = screen.getByText(
    /It looks like the session you are trying to leave feedback for does not require it/i,
  );
  expect(title).toBeInTheDocument();
  expect(detail).toBeInTheDocument();
});

test('renders Error component with correct error message - Feedback already submitted', () => {
  render(<Error error="Feedback already submitted" />);
  const title = screen.getByText(/Thank you!/i);
  const detail = screen.getByText(/It looks like feedback has already been submitted/i);
  expect(title).toBeInTheDocument();
  expect(detail).toBeInTheDocument();
});
