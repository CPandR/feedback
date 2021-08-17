import { render, screen } from '@testing-library/react';
import Question from './index';

test('renders question component with correct title', () => {
  render(<Question title="hello world" detail="123" question={1} currentValue={null} setFeedback={() => {}} />);
  const title = screen.getByText(/hello world/i);
  const detail = screen.getByText(/123/i);
  expect(title).toBeInTheDocument();
  expect(detail).toBeInTheDocument();
});
