const { DECIMAL_ZERO, BLANK_STRING, ROMAN_ALPHABETS, ROMAN_BASES } = require('./consts');
const { isNumber, isString } = require('./utils');

function convertDigits(digit) {
	if (isNumber(digit)) {
		return computeRomanAlphabets(digit);
	}
	return;
}

function computeRomanAlphabets(digit, finalRomanAlphabets = BLANK_STRING) {
	let max = getMaxBase(digit);

	finalRomanAlphabets += ROMAN_ALPHABETS[max];
	digit -= max;

	if (digit === DECIMAL_ZERO) return finalRomanAlphabets;
	else return computeRomanAlphabets(digit, finalRomanAlphabets);
}

function getMaxBase(digit) {
	for (base of ROMAN_BASES) {
		if (digit >= base) {
			return base;
		}
	}
}

// =====================================================================================================

function convertRoman(input) {
	if (isString(input)) {
		return 'hi';
	}
	return;
}

module.exports = { convertDigits, convertRoman };
