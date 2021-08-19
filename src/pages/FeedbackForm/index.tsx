import { useState } from 'react';
import Question from '../../components/Question';
import Button from '../../components/Button';

interface IFeedback {
  1: number | null;
  2: number | null;
  3: number | null;
  4: number | null;
}

function FeedbackForm(props: any) {
  const [feedback, setFeedback] = useState<IFeedback>({ 1: null, 2: null, 3: null, 4: null });

  const submitFeedback = () => {
    props.history.push('/success');
  };

  return (
    <div className="container">
      <h1>We'd love to hear your feedback</h1>
      <p className="context">
        For each of the four areas below, please choose the value that you believe best corresponds to your experience
        at CP+R. A score of 1 would indicate that you strongly disagree, 2 that you disagree, 3 that you neither agree
        or disagree, 4 that you agree and finally a score of 5 would indicate that you strongly agree.
      </p>
      <Question
        title="Coaching & Session Quality"
        detail="The coaching is of an excellent standard..."
        question={1}
        currentValue={feedback['1']}
        setFeedback={setFeedback}
      />
      <Question
        title="Project Management"
        detail="My Cardiac Coach keeps me well-informed about the plan leading up to my next reassessment and I am on board
          with it..."
        question={2}
        currentValue={feedback['2']}
        setFeedback={setFeedback}
      />
      <Question
        title="Four Pillars"
        detail="My Cardiac Coach clearly and consistently relates my progress to the 4 Pillars..."
        question={3}
        currentValue={feedback['3']}
        setFeedback={setFeedback}
      />
      <Question
        title="Communication"
        detail="I receive regular, timely and motivating communication from my Cardiac Coach across the week..."
        question={4}
        currentValue={feedback['4']}
        setFeedback={setFeedback}
      />
      <Button valid={Object.values(feedback).every((x) => x)} submitFeedback={submitFeedback} />
    </div>
  );
}

export default FeedbackForm;
