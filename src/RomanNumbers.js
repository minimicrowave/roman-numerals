const {
	DECIMAL_ZERO,
	BLANK_STRING,
	ROMAN_DECIMAL_MAP,
	ROMAN_BASES,
	ROMAN_ALPHABETS
} = require('./consts');
const { validateNumeral, validateRoman } = require('./validations');

function convertDigits(digit) {
	validateNumeral(input);
	return computeRomanAlphabets(digit);
}

function computeRomanAlphabets(digit, finalRomanAlphabets = BLANK_STRING) {
	let max = getMaxBase(digit);

	finalRomanAlphabets += ROMAN_DECIMAL_MAP[max];
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

// ===========================================================================================

function convertRoman(input) {
	validateRoman(input);
	return computeRomanNumbers(input.toUpperCase());
}

function computeRomanNumbers(input, sum = 0) {
	let [ firstChar, secondChar, ...remainder ] = input;
	let finalArray;

	let number = getNumberByAlphabet(firstChar + secondChar);
	if (!number) {
		number = getNumberByAlphabet(firstChar);
		finalArray = [ secondChar, finalArray ];
	} else {
		finalArray = remainder;
	}
	console.log(number);

	sum += Number(number);

	if (!finalArray || finalArray.length === 0) return sum;
	else return computeRomanNumbers(finalArray, sum);
}

function getNumberByAlphabet(character) {
    console.log(Object.keys(ROMAN_DECIMAL_MAP).find((key) => ROMAN_DECIMAL_MAP[key] === character))
	return Object.keys(ROMAN_DECIMAL_MAP).find((key) => ROMAN_DECIMAL_MAP[key] === character);
}

module.exports = { convertDigits, convertRoman };
