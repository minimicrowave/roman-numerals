function isNumber(digit) {
	return typeof digit === 'number';
}

function isString(input) {
	return typeof input === 'string';
}

module.exports = { isNumber, isString };
