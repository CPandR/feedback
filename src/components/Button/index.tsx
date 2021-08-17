interface ButtonProps {
  valid: boolean;
  submitFeedback(event: React.MouseEvent<HTMLButtonElement>): void;
}

const style = {
  backgroundColor: 'white',
};

const Button = ({ valid, submitFeedback }: ButtonProps) => (
  <button style={style} disabled={!valid} onClick={submitFeedback}>
    Submit
  </button>
);

export default Button;
