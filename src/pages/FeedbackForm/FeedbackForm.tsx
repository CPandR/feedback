import { useState } from 'react';
import axios from 'axios';
import qs, { ParsedQuery } from 'query-string';
import prod from '../../config/config';
import { Question, Button, Comment } from '../../components';
import CCALogo from '../../assets/images/cca-logo.webp';

interface FeedbackFormProps {
  setState: Function;
}

interface IFeedback {
  1: number | null;
  2: number | null;
  3: number | null;
  4: number | null;
  comments: string;
}

export function FeedbackForm({ setState }: FeedbackFormProps) {
  const [feedback, setFeedback] = useState<IFeedback>({ 1: null, 2: null, 3: null, 4: null, comments: '' });
  const [loading, setLoading] = useState<Boolean>(false);

  const submitFeedback = () => {
    setLoading(true);
    const { id }: ParsedQuery<string> = qs.parse(window.location.search);
    console.log({
      coaching: feedback['1'],
      project_management: feedback['2'],
      four_pillars: feedback['3'],
      communication: feedback['4'],
      comments: feedback['comments'],
    });
    axios
      .patch(`${prod}/submit_feedback/${id}`, {
        coaching: feedback['1'],
        project_management: feedback['2'],
        four_pillars: feedback['3'],
        communication: feedback['4'],
        comments: feedback['comments'],
      })
      .then(() => {
        setLoading(false);
        setState('success');
      })
      .catch(() => {
        setLoading(false);
        setState('error');
      });
  };

  return (
    <div className="container">
      <div className="image">
        <img src={CCALogo} alt="Cardiac Coach Academy" />
      </div>
      <h1>Your feedback is important</h1>
      <p className="context">
        Following your last session, please score you Academy Coach according to their current performance. This is what
        the scores will mean:
        <ol>
          <li>
            <span className="li-num">0</span> - Not applicable
          </li>
          <li>
            <span className="li-num">1</span> - Needs improvement
          </li>
          <li>
            <span className="li-num">2</span> - Consistently meet expectations
          </li>
          <li>
            <span className="li-num">3</span> - Exceeds expectations
          </li>
          <li>
            <span className="li-num">4</span> - Strongly exceeds expectations
          </li>
          <li>
            <span className="li-num">5</span> - Superb graduate
          </li>
        </ol>
        We appraise all CP+R coaches using this scoring system. Level 3 and above is the expectation and in this way,
        Academy Coaches will be ready to graduate when they achieve at least a 3 in all the coaching areas below. <br />
        <br />
        In the first few sessions, it may not be possible for you to comment yet on how the individual is performing,
        there you can select N/A. After the first week of training, you should be able to score them in all 4 areas.
        <br />
        <br /> The scores can only be viewed by the CCA manager, who will review and use this to help support and
        develop the Academy Coach.
      </p>
      <hr />
      <Question
        title="Coaching and session quality"
        detail="Please rate your coach’s ability to prescribe exercises that you enjoy, appropriately progress your exercise routine, count accurately and guide you smoothly through the session. "
        question={1}
        currentValue={feedback['1']}
        setFeedback={setFeedback}
      />
      <Question
        title="Project management"
        detail="Please rate your coach’s ability to set goals for you, manage you towards your next assessment and rearrange your sessions without your progress being affected."
        question={2}
        currentValue={feedback['2']}
        setFeedback={setFeedback}
      />
      <Question
        title="4 Pillars"
        detail="Please rate your coach’s ability to engage, support and monitor your progress with the 4 pillars – session adherence, homework, nutrition and steps."
        question={3}
        currentValue={feedback['3']}
        setFeedback={setFeedback}
      />
      <Question
        title="Communication"
        detail="Please rate your coach’s ability to communicate in and around you sessions, including sending helpful and motivating texts and emails to keep you on track."
        question={4}
        currentValue={feedback['4']}
        setFeedback={setFeedback}
      />
      <Comment
        title="Comments"
        currentValue={feedback['comments']}
        setFeedback={setFeedback}
        detail="Any comments you wish to add:"
        question={100}
      />
      <div className="button-cont">
        <p style={{ marginTop: '2rem' }}>Thank you so much.</p>
        <Button valid={Object.values(feedback).every((x) => x !== null) && !loading} submitFeedback={submitFeedback} />
      </div>
    </div>
  );
}
