const ROMAN_ONE = 'I';
const ROMAN_FIVE = 'V';
const ROMAN_TEN = 'X';
const ROMAN_FIFTY = 'L';
const ROMAN_HUNDRED = 'C';

function convertDigits(digit) {
	if (isNumber(digit)) {
		if (digit === 5) return ROMAN_FIVE;
		if (digit === 10) return ROMAN_TEN;
		if (digit === 50) return ROMAN_FIFTY;
		if (digit === 100) return ROMAN_HUNDRED;
		return ROMAN_ONE.repeat(digit);
	}
	return;
}

function isNumber(digit) {
	return typeof digit === 'number';
}

module.exports = { convertDigits };
