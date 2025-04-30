import { page } from "@vitest/browser/context";
import { expect, test } from "vitest";
import { render } from "vitest-browser-react";
import { ErrorPage } from "./index";

test("renders Error component with correct error message - Invalid ID", async () => {
	render(<ErrorPage error="Invalid ID" />);
	await expect.element(page.getByText(/Uh oh!/i)).toBeInTheDocument();
	await expect
		.element(page.getByText(/It looks like you've taken a wrong turn./i))
		.toBeInTheDocument();
});

test("renders Error component with correct error message - Booking not complete", async () => {
	render(<ErrorPage error="Booking not complete" />);
	await expect.element(page.getByText(/Uh oh!/i)).toBeInTheDocument();
	await expect
		.element(
			page.getByText(
				/It looks like the session you are trying to leave feedback for has not yet been marked as complete/i,
			),
		)
		.toBeInTheDocument();
});

test("renders Error component with correct error message - Feedback not required", async () => {
	render(<ErrorPage error="Feedback not required" />);
	await expect.element(page.getByText(/Uh oh!/i)).toBeInTheDocument();
	await expect
		.element(
			page.getByText(
				/It looks like the session you are trying to leave feedback for does not require it/i,
			),
		)
		.toBeInTheDocument();
});

test("renders Error component with correct error message - Feedback already submitted", async () => {
	render(<ErrorPage error="Feedback already submitted" />);
	await expect.element(page.getByText(/Thank you!/i)).toBeInTheDocument();
	await expect
		.element(
			page.getByText(/It looks like feedback has already been submitted/i),
		)
		.toBeInTheDocument();
});
