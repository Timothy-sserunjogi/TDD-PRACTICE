/**
Patience A
Timothy S
**/
function factorize(number) {
	if (number == 0) return 1;
	else {
		return number * factorize(number - 1);
	}
}
let number = 6;
result = factorize(number);
console.log(number + " = " + result);

module.exports = factorize;

