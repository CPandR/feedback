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
  return (
    <div className="question-section">
      <h2>{title}</h2>
      <p>{detail}</p>
      <div className="numbers">
        {Array.from({ length: 10 }, (_, i) => 1 + i * 1).map((num) => {
          return (
            <div
              key={`${title} - ${num}`}
              role="button"
              className={`number ${currentValue === num ? 'selected' : ''}`}
              onClick={() => handleChange(num)}
            >
              {num}
            </div>
          );
        })}
      </div>
    </div>
  );
};
