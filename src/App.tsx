import axios from "axios";
import qs, { type ParsedQuery } from "query-string";
import { useEffect, useState } from "react";

import prod from "./config/config";
import "./App.css";
import { ErrorPage, FeedbackForm, Loading, Success } from "./pages";

function App() {
	const [state, setState] = useState<"loading" | "error" | "form" | "success">(
		"loading",
	);
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		const { id }: ParsedQuery<string> = qs.parse(window.location.search);
		console.log(id);
		axios
			.get(`${prod}/validate_feedback/${id}`)
			.then(() => {
				setState("form");
			})
			.catch((err) => {
				if (err.message === "Network Error") {
					setState("error");
				} else {
					const data = err?.response?.data;
					setState("error");
					setError(data || "An error occurred");
				}
			});
	}, []);

	switch (state) {
		case "loading":
			return <Loading />;
		case "error":
			return <ErrorPage error={error} />;
		case "form":
			return <FeedbackForm setState={setState} />;
		case "success":
			return <Success />;
		default:
			return <Loading />;
	}
}

export default App;
