import { useState } from 'react';
import axios from 'axios';
import qs, { ParsedQuery } from 'query-string';
import prod from '../../config/config';
import { Question, Button } from '../../components';
import CCALogo from '../../assets/images/cca-logo.png';

interface FeedbackFormProps {
  setState: Function;
}

interface IFeedback {
  1: number | null;
  2: number | null;
  3: number | null;
  4: number | null;
}

export function FeedbackForm({ setState }: FeedbackFormProps) {
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
      <div className="image">
        <img src={CCALogo} alt="Cardiac Coach Academy" />
      </div>
      <h1>We'd love to hear your feedback</h1>
      <p className="context">
        For each of the four areas below, please score your Academy Coach according to their current performance. Here
        is a reference for your scoring:
        <ol>
          <li>
            <span className="li-num">1</span> - Minimal to no ability (definitely not ready to graduate)
          </li>
          <li>
            <span className="li-num">2</span> - Some ability (improvements being shown)
          </li>
          <li>
            <span className="li-num">3</span> - Average ability (competent but not world-class)
          </li>
          <li>
            <span className="li-num">4</span> - High ability (almost ready to graduate, after a few improvements)
          </li>
          <li>
            <span className="li-num">5</span> - Excellent ability (they fill you with confidence and they're ready to
            graduate)
          </li>
        </ol>
      </p>
      <Question
        title="Coaching and session quality"
        detail="Please rate your coach's ability to prescribe exercises that you enjoy, appropriately progress your exercise routine, count accurately and guide you smoothly through the session."
        question={1}
        currentValue={feedback['1']}
        setFeedback={setFeedback}
      />
      <Question
        title="Project management"
        detail="Please rate your coach's ability to set goals for you, manage you towards your next reassessment and rearrange your sessions as needed without your progress being affected."
        question={2}
        currentValue={feedback['2']}
        setFeedback={setFeedback}
      />
      <Question
        title="4 Pillars"
        detail="Please rate your coach's ability to engage you with the 4 Pillars."
        question={3}
        currentValue={feedback['3']}
        setFeedback={setFeedback}
      />
      <Question
        title="Communication"
        detail="Please rate your coach's ability to communicate in and around your sessions, including sending helpful and motivating texts and emails to keep you on track."
        question={4}
        currentValue={feedback['4']}
        setFeedback={setFeedback}
      />
      <div className="button-cont">
        <Button valid={Object.values(feedback).every((x) => x)} submitFeedback={submitFeedback} />
      </div>
    </div>
  );
}
