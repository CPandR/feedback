interface ErrorProps {
  error: string | null;
}

const Error = ({ error }: ErrorProps) => {
  let message;
  if (error === 'Booking not complete') {
    message =
      'It looks like the session you are trying to leave feedback for has not yet been marked as complete. Please try again shortly or contact your Cardiac Coach if the problen persists.';
  } else if (error === 'Feedback not required') {
    message =
      'It looks like the session you are trying to leave feedback for does not require it. If you have followed a link from an email or believe this is incorrect please contact your Cardiac Coach.';
  } else if (error === 'Feedback already submitted') {
    message =
      'It looks like feedback has already been submitted for this session! If you believe this to be a mistake, please contact your Cardiac Coach.';
  } else {
    message =
      "It looks like you've taken a wrong turn. If you were expecting to submit feedback, please try following the link sent via email again or contact your Cardiac Coach.";
  }

  return (
    <div className="error-container">
      <h1>Uh oh!</h1>
      <p>{message}</p>
    </div>
  );
};
export default Error;
