import { render, screen, fireEvent } from '@testing-library/react';
import { Button } from './Button';

test('renders button with submit text', () => {
  render(<Button valid={false} submitFeedback={() => {}} />);
  const text = screen.getByText(/Submit/i);
  expect(text).toBeInTheDocument();
});

test('renders button with disabled state', () => {
  render(<Button valid={false} submitFeedback={() => {}} />);
  const button = screen.getByText('Submit');
  expect(button).toBeDisabled();
});

test('renders button with enabled state', () => {
  render(<Button valid={true} submitFeedback={() => {}} />);
  const button = screen.getByText('Submit');
  expect(button).not.toBeDisabled();
});

test('button click event fires', () => {
  const mockCallBackClick = jest.fn();
  render(<Button valid={true} submitFeedback={mockCallBackClick} />);
  fireEvent.click(screen.getByText('Submit'));
  expect(mockCallBackClick.mock.calls.length).toEqual(1);
});
