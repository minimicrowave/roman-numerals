const ROMAN_ALPHABETS = {
	1: 'I',
	4: 'IV',
	5: 'V',
	9: 'IX',
	10: 'X',
	40: 'XL',
	50: 'L',
	90: 'XC',
	100: 'C'
};

const DECIMAL_ZERO = 0;
const BLANK_STRING = '';

const ROMAN_BASES = Object.keys(ROMAN_ALPHABETS).map(Number).reverse();

function convertDigits(digit) {
	if (isNumber(digit)) {
		return computeRomanAlphabets(digit);
	}
	return;
}

function computeRomanAlphabets(digit, finalRomanAlphabets = BLANK_STRING) {
	let max;
	for (base of ROMAN_BASES) {
		if (digit >= base) {
			max = base;
			break;
		}
	}
	finalRomanAlphabets += ROMAN_ALPHABETS[max];
	digit -= max;

	if (digit === DECIMAL_ZERO) return finalRomanAlphabets;
	else return computeRomanAlphabets(digit, finalRomanAlphabets);
}

function isNumber(digit) {
	return typeof digit === 'number';
}

// =====================================================================================================

function convertRoman(input) {
	if (typeof input === 'string') {
		return 'hi';
    }
    return;
}

module.exports = { convertDigits, convertRoman };
