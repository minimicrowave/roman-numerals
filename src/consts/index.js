const DECIMAL_ZERO = 0;

const BLANK_STRING = '';

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

const ROMAN_BASES = Object.keys(ROMAN_ALPHABETS).map(Number).reverse();

module.exports = { DECIMAL_ZERO, BLANK_STRING, ROMAN_ALPHABETS, ROMAN_BASES };
