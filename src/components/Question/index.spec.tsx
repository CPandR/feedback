import { page } from "@vitest/browser/context";
import { expect, test, vi } from "vitest";
import { render } from "vitest-browser-react";
import { Question } from "./index";

test("renders question component with correct text", async () => {
	render(
		<Question
			title="hello world"
			detail="123"
			question={1}
			currentValue={null}
			setFeedback={() => {}}
		/>,
	);
	await expect.element(page.getByText(/hello world/i)).toBeInTheDocument();
	await expect.element(page.getByText(/123/i)).toBeInTheDocument();
});

test("renders question component with five buttons", async () => {
	render(
		<Question
			title="Test"
			detail="details"
			question={1}
			currentValue={null}
			setFeedback={() => {}}
		/>,
	);
	for (const label of ["1", "2", "3", "4", "5"]) {
		await expect
			.element(page.getByText(new RegExp(`^${label}$`, "i")))
			.toBeInTheDocument();
	}
});

test("question buttons are unselected and clickable", async () => {
	const mockCallBackClick = vi.fn();
	render(
		<Question
			title="Test"
			detail="details"
			question={1}
			currentValue={null}
			setFeedback={mockCallBackClick}
		/>,
	);
	const one = page.getByText(/^1$/);

	await expect.element(one).toHaveClass("number");
	await expect.element(one).not.toHaveClass("selected");

	await one.click();

	expect(mockCallBackClick).toHaveBeenCalledTimes(1);
});

test("question buttons are black when selected", async () => {
	const mockCallBackClick = vi.fn();
	render(
		<Question
			title="Test"
			detail="details"
			question={1}
			currentValue={1}
			setFeedback={mockCallBackClick}
		/>,
	);
	const one = page.getByText(/^1$/);
	const two = page.getByText(/^2$/);

	await expect.element(one).toHaveClass("number");
	await expect.element(one).toHaveClass("selected");

	await expect.element(two).toHaveClass("number");
	await expect.element(two).not.toHaveClass("selected");
});
