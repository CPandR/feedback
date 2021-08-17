interface ButtonProps {
  valid: boolean;
  submitFeedback(event: React.MouseEvent<HTMLButtonElement>): void;
}

const Button = ({ valid, submitFeedback }: ButtonProps) => (
  <button id="button" disabled={!valid} onClick={submitFeedback}>
    Submit
  </button>
);

export default Button;
