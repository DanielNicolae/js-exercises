function add (a, b) {
	return (a + b);
}

function subtract (a, b) {
	return (a - b)
}

function sum (arr) {
	if (arr.length === 0) {
		return 0;
	}
	else {
		let sum = 0;
		arr.forEach(element => {
			sum += element;
		});
		return sum;
	}
}

function multiply (arr) {
	let product = 1;
	arr.forEach(element => {
		product *= element;
	});
	return product;
}

function power(a, b) {
	return (a ** b);
}

function factorial(num) {
	let fact = 1
	if (num === 0) {
		return 1;
	}
	else {
		while(num > 0) {
			fact *= num;
			--num;
		}
		return fact;
	}
}

module.exports = {
	add,
	subtract,
	sum,
	multiply,
    power,
	factorial
}