interface ErrorProps {
  error: string | null;
}

const Error = ({ error }: ErrorProps) => {
  return <div className="error-container">Error!</div>;
};
export default Error;
