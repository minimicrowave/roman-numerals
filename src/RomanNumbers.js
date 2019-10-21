const ROMAN_ALPHABETS = {
	1: 'I',
	5: 'V',
	10: 'X',
	50: 'L',
	100: 'C'
};

const DENOMINATORS = {
	1: 1,
	5: 1,
	10: 1,
	50: 10,
	100: 10
};

function convertDigits(digit) {
	if (isNumber(digit)) {
		return computeRomanAlphabets(digit);
	}
	return;
}

function computeRomanAlphabets(digit) {
	let computedRomanAlphabet = '';
	if (ROMAN_ALPHABETS[digit]) return ROMAN_ALPHABETS[digit];
	let nearestBase = getNearestBase(digit);
	let nearestDenominator = DENOMINATORS[nearestBase];
	// console.log(digit, nearestBase, nearestDenominator);
	if (digit >= nearestBase - nearestDenominator) {
		computedRomanAlphabet += ROMAN_ALPHABETS[nearestDenominator] + ROMAN_ALPHABETS[nearestBase];
		// console.log('yeah', digit, computedRomanAlphabet);
		return computedRomanAlphabet;
	}
	return ROMAN_ALPHABETS[1].repeat(digit);
}

function getNearestBase(digit) {
	let ROMAN_NUMBER_BASES = Object.keys(ROMAN_ALPHABETS).map(Number);
	let prevBase = 0;

	for (let i = 0; i < ROMAN_NUMBER_BASES.length; i++) {
		let currentBase = ROMAN_NUMBER_BASES[i];

		if (digit <= currentBase && digit > prevBase) return currentBase;
		prevBase = currentBase;
	}
}

function isNumber(digit) {
	return typeof digit === 'number';
}

module.exports = { convertDigits };
