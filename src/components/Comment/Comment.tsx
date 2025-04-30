import type { ChangeEvent } from "react";
import type { IFeedback } from "../../pages";

interface CommentProps {
	title: string;
	detail: string;
	question: number;
	currentValue: string;
	setFeedback: React.Dispatch<React.SetStateAction<IFeedback>>;
}

export const Comment = ({
	title,
	detail,
	currentValue,
	setFeedback,
}: CommentProps) => {
	const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
		setFeedback((prev: IFeedback) => ({ ...prev, comments: e.target.value }));
	};

	return (
		<div className="question-section">
			<h2>{title}</h2>
			<p>{detail}</p>
			<textarea value={currentValue} onChange={(evt) => handleChange(evt)} />
		</div>
	);
};
