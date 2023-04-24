function convert() {
	const inputValue = document.getElementById("inputValue").value;
	const fromUnit = document.getElementById("fromUnit").value;
	const toUnit = document.getElementById("toUnit").value;

	let outputValue;

	if (fromUnit === "meter" && toUnit === "kilometer") {
		outputValue = inputValue / 1000;
	} else if (fromUnit === "meter" && toUnit === "centimeter") {
		outputValue = inputValue * 100;
	} else if (fromUnit === "kilometer" && toUnit === "meter") {
		outputValue = inputValue * 1000;
	} else if (fromUnit === "kilometer" && toUnit === "centimeter") {
		outputValue = inputValue * 100000;
	} else if (fromUnit === "centimeter" && toUnit === "meter") {
		outputValue = inputValue / 100;
	} else if (fromUnit === "centimeter" && toUnit === "kilometer") {
		outputValue = inputValue / 100000;
	} else {
		outputValue = inputValue;
	}

	document.getElementById("output").innerHTML = `${inputValue} ${fromUnit} = ${outputValue} ${toUnit}`;
}
