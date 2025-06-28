let calculate = document.getElementById("calculate");

calculate.addEventListener("click", () => {
	let totalBill = document.getElementById("total-bill").value;
	let tipPercent = document.getElementById("tip-percent").value;
	let split = document.getElementById("bill").value;

	if (totalBill === "" || tipPercent === "" || split === 0) {
		alert("Please enter values");
	}

	let total = (totalBill * tipPercent) / split;
	total = total.toFixed(2);

	console.log(total);

	document.getElementById("tip").innerHTML = total;
});