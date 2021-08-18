import { useState } from 'react';
import axios from 'axios';
import qs, { ParsedQuery } from 'query-string';
import prod from '../../config/config';
import Question from '../../components/Question';
import Button from '../../components/Button';

interface FeedbackFormProps {
  setState: Function;
}

interface IFeedback {
  1: number | null;
  2: number | null;
  3: number | null;
  4: number | null;
}

function FeedbackForm({ setState }: FeedbackFormProps) {
  const [feedback, setFeedback] = useState<IFeedback>({ 1: null, 2: null, 3: null, 4: null });

  const submitFeedback = () => {
    const { id }: ParsedQuery<string> = qs.parse(window.location.search);
    axios
      .patch(`${prod}/submit_feedback/${id}`, {
        coaching: feedback['1'],
        project_management: feedback['2'],
        four_pillars: feedback['3'],
        communication: feedback['4'],
      })
      .then(() => {
        setState('success');
      });
  };

  return (
    <div className="container">
      <h1>We'd love to hear your feedback</h1>
      <p className="context">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab velit eaque, quasi rem incidunt quidem rerum
        eligendi, corporis voluptas iusto repellendus molestias perspiciatis omnis sit! Soluta architecto nostrum
        tenetur necessitatibus! iusto repellendus molestias perspiciatis omnis sit! Soluta architecto nostrum tenetur
        necessitatibus!
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
