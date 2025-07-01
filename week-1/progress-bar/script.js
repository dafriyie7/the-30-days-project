// Grab everything you need
const progress = document.getElementById("progress");
const prev = document.getElementById("prev");
const next = document.getElementById("next");
const circles = document.querySelectorAll(".circle");

let currentActive = 1; // starts on first step

next.addEventListener("click", () => {
	currentActive = Math.min(currentActive + 1, circles.length);
	update();
});

prev.addEventListener("click", () => {
	currentActive = Math.max(currentActive - 1, 1);
	update();
});

function update() {
	// 1. toggle `.active` on circles
	circles.forEach((circle, idx) => {
		circle.classList.toggle("active", idx < currentActive);
	});

	// 2. update progress bar width
	const actives = document.querySelectorAll(".circle.active");
	progress.style.width =
		((actives.length - 1) / (circles.length - 1)) * 100 + "%";

	// 3. enable / disable buttons
	prev.disabled = currentActive === 1;
	next.disabled = currentActive === circles.length;
}

// Call once so initial state is correct
update();
