import { KeyboardEvent } from 'react';

interface QuestionProps {
  title: string;
  detail: string;
  question: number;
  currentValue: number | null;
  setFeedback: Function;
}

export const Question = ({ title, detail, question, currentValue, setFeedback }: QuestionProps) => {
  const handleChange = (val: Number) => {
    setFeedback((prev: object) => ({ ...prev, [question]: val }));
  };

  const handleKeyPress = (e: KeyboardEvent, num: number) => {
    if (e.key === 'Enter') {
      handleChange(num);
    }
  };
  return (
    <div className="question-section">
      <h2>{title}</h2>
      <p>{detail}</p>
      <div className="numbers">
        {Array.from({ length: 5 }, (_, i) => 1 + i * 1).map((num) => {
          return (
            <div
              tabIndex={question * 5 + num}
              key={`${title} - ${num}`}
              role="button"
              className={`number ${currentValue === num ? 'selected' : ''}`}
              onClick={() => handleChange(num)}
              onKeyPress={(e) => handleKeyPress(e, num)}
            >
              {num}
            </div>
          );
        })}
      </div>
    </div>
  );
};
