const ROMAN_ONE = 'I';
function convertDigits(digit) {
	if (isNumber(digit)) {
		return ROMAN_ONE.repeat(digit);
	}
	return;
}

function isNumber(digit) {
	return typeof digit === 'number';
}

module.exports = { convertDigits };
