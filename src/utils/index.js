function isNumber(digit) {
	return typeof digit === 'number';
}

function isString(input) {
	return typeof input === 'string';
}

function filterUndefinedElements(array) {
	return array.filter((el) => el);
}

module.exports = { isNumber, isString, filterUndefinedElements };
