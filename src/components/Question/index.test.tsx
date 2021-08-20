import { render, screen, fireEvent } from '@testing-library/react';
import { Question } from './index';

test('renders question component with correct text', () => {
  render(<Question title="hello world" detail="123" question={1} currentValue={null} setFeedback={() => {}} />);
  const title = screen.getByText(/hello world/i);
  const detail = screen.getByText(/123/i);
  expect(title).toBeInTheDocument();
  expect(detail).toBeInTheDocument();
});

test('renders question component with five buttons', () => {
  render(<Question title="Test" detail="details" question={1} currentValue={null} setFeedback={() => {}} />);
  const one = screen.getByText(/1/i);
  const two = screen.getByText(/2/i);
  const three = screen.getByText(/3/i);
  const four = screen.getByText(/4/i);
  const five = screen.getByText(/5/i);
  expect(one).toBeInTheDocument();
  expect(two).toBeInTheDocument();
  expect(three).toBeInTheDocument();
  expect(four).toBeInTheDocument();
  expect(five).toBeInTheDocument();
});

test('question buttons are unselected and clickable', async () => {
  const mockCallBackClick = jest.fn();
  render(<Question title="Test" detail="details" question={1} currentValue={null} setFeedback={mockCallBackClick} />);
  const one = screen.getByText(/1/i);
  expect(one).toHaveClass('number');
  expect(one).not.toHaveClass('selected');
  fireEvent.click(screen.getByText('1'));
  expect(mockCallBackClick.mock.calls.length).toEqual(1);
});

test('question buttons are black when selected', async () => {
  const mockCallBackClick = jest.fn();
  render(<Question title="Test" detail="details" question={1} currentValue={1} setFeedback={mockCallBackClick} />);
  const one = screen.getByText(/1/i);
  const two = screen.getByText(/2/i);
  expect(one).toHaveClass('number');
  expect(one).toHaveClass('selected');
  expect(two).toHaveClass('number');
  expect(two).not.toHaveClass('selected');
});
