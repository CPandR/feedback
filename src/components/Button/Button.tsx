interface ButtonProps {
  valid: boolean;
  submitFeedback(event: React.MouseEvent<HTMLButtonElement>): void;
}

export const Button = ({ valid, submitFeedback }: ButtonProps) => (
  <button disabled={!valid} onClick={submitFeedback}>
    Submit
  </button>
);
