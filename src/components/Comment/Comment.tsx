import { ChangeEvent } from 'react';

interface CommentProps {
  title: string;
  detail: string;
  question: number;
  currentValue: string;
  setFeedback: Function;
}

export const Comment = ({ title, detail, currentValue, setFeedback }: CommentProps) => {
  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setFeedback((prev: object) => ({ ...prev, comments: e.target.value }));
  };

  return (
    <div className="question-section">
      <h2>{title}</h2>
      <p>{detail}</p>
      <textarea value={currentValue} onChange={(evt) => handleChange(evt)} />
    </div>
  );
};
