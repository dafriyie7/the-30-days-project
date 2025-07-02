const number = document.getElementById("number");
let counter = 0;

const timer = setInterval(() => {
	if (counter >= 65) {
		clearInterval(timer); // use the ID you got from setInterval
	} else {
		counter += 1;
		number.textContent = `${counter}%`;
	}
}, 30);
