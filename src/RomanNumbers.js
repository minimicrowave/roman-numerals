const ROMAN_ALPHABETS = {
	1: 'I',
	5: 'V',
	10: 'X',
	50: 'L',
	100: 'C'
};

function convertDigits(digit) {
	if (isNumber(digit)) {
		if (ROMAN_ALPHABETS[digit]) return ROMAN_ALPHABETS[digit];
		return ROMAN_ALPHABETS[1].repeat(digit);
	}
	return;
}

function isNumber(digit) {
	return typeof digit === 'number';
}

module.exports = { convertDigits };
