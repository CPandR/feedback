import { page } from "@vitest/browser/context";
import { expect, test, vi } from "vitest";
import { render } from "vitest-browser-react";
import { Button } from "./Button";

test("renders button with submit text", async () => {
	render(<Button valid={false} submitFeedback={() => {}} />);
	await expect.element(page.getByText(/Submit/i)).toBeInTheDocument();
});

test("renders button with disabled state", async () => {
	render(<Button valid={false} submitFeedback={() => {}} />);
	const button = page.getByText(/^Submit$/);
	await expect.element(button).toBeDisabled();
});

test("renders button with enabled state", async () => {
	render(<Button valid={true} submitFeedback={() => {}} />);
	const button = page.getByText(/^Submit$/);
	await expect.element(button).not.toBeDisabled();
});

test("button click event fires", async () => {
	const mockCallBackClick = vi.fn();
	render(<Button valid={true} submitFeedback={mockCallBackClick} />);
	const button = page.getByText(/^Submit$/);
	await button.click();
	expect(mockCallBackClick).toHaveBeenCalledTimes(1);
});
