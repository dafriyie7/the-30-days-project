// script.js
// Basic calculator logic for index.html
// Grab the display input once the DOM is ready (script is placed right before </body>)
const outputScreen = document.getElementById("output-screen");

/**
 * Append a character (number, operator, or dot) to the display.
 * @param {string} value
 */
function display(value) {
	outputScreen.value += value;
}

/** Clear the entire display. */
function clearScreen() {
	outputScreen.value = "";
}

/** Delete the last character. */
function del() {
	outputScreen.value = outputScreen.value.slice(0, -1);
}

/**
 * Evaluate the expression currently shown on the display.
 * If evaluation fails, show "Error" briefly and then reset.
 */
function calculate() {
	if (!outputScreen.value) return; // Nothing to evaluate

	try {
		// Use Function constructor instead of eval for slightly better scoping
		const result = Function(
			"'use strict'; return (" + outputScreen.value + ")"
		)();

		// Prevent displaying undefined or non‑finite results like Infinity/NaN
		if (Number.isFinite(result)) {
			outputScreen.value = result;
		} else {
			throw new Error("Invalid result");
		}
	} catch (err) {
		outputScreen.value = "Error";
		// Reset after a short delay so the user sees the message
		setTimeout(() => {
			outputScreen.value = "";
		}, 1500);
	}
}

/* Optional: Handle keyboard input for a nicer UX */
window.addEventListener("keydown", (e) => {
	const key = e.key;

	// Allow digits, operators, and decimal point
	if (/^[0-9%/*+\-\.]{1}$/.test(key)) {
		display(key);
	} else if (key === "Enter" || key === "=") {
		calculate();
	} else if (key === "Backspace") {
		del();
	} else if (key === "Escape") {
		clear();
	}
});
