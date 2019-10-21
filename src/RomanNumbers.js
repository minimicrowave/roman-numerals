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
		// if (ROMAN_ALPHABETS[digit]) return ROMAN_ALPHABETS[digit];
		return computeRomanAlphabets(digit);
	}
	return;
}

function computeRomanAlphabets(digit, finalRomanAlphabets = '') {
	let [ prevBase, nearestBase ] = getNearestBase(digit);
	let nearestDenominator = DENOMINATORS[nearestBase];
    let prevDenominator = DENOMINATORS[prevBase];

	if (digit === nearestBase) {
		finalRomanAlphabets += ROMAN_ALPHABETS[nearestBase];
		digit -= nearestBase;
	} else if (digit >= nearestBase - nearestDenominator) {
		finalRomanAlphabets += ROMAN_ALPHABETS[nearestDenominator] + ROMAN_ALPHABETS[nearestBase];
		digit -= nearestBase - nearestDenominator;
	} else if (digit <= nearestBase - nearestDenominator) {
        console.log(digit, nearestBase - nearestDenominator)
		let noOfRepetitions = (digit - prevBase) / prevDenominator;
		console.log('help here', nearestDenominator, noOfRepetitions, digit);
		digit -= prevDenominator * noOfRepetitions + prevBase;

		console.log('help', nearestDenominator, noOfRepetitions, digit);

		finalRomanAlphabets +=
			ROMAN_ALPHABETS[prevBase] + ROMAN_ALPHABETS[prevDenominator].repeat(noOfRepetitions);
		console.log(digit, finalRomanAlphabets);
	} else {
		finalRomanAlphabets += ROMAN_ALPHABETS[nearestDenominator];
		digit -= nearestDenominator;
	}

	if (digit !== 0) return computeRomanAlphabets(digit, finalRomanAlphabets);
	else return finalRomanAlphabets;
}

function getNearestBase(digit) {
	let ROMAN_NUMBER_BASES = Object.keys(ROMAN_ALPHABETS).map(Number);
	let prevBase = 0;

	for (let i = 0; i < ROMAN_NUMBER_BASES.length; i++) {
		let currentBase = ROMAN_NUMBER_BASES[i];

		if (digit <= currentBase && digit > prevBase) return [ prevBase, currentBase ];
		prevBase = currentBase;
	}
}

function isNumber(digit) {
	return typeof digit === 'number';
}

module.exports = { convertDigits };
