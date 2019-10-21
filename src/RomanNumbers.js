const InvalidInputException = require('./exceptions/InvalidInputException');

const DIGIT_ONE = 1;
const DIGIT_FIVE = 5;

const ROMAN_NUMBER_MAP = {
	1: 'I',
	4: 'IV',
    5: 'V',
    9: 'IX'
};

function convertDigits(digit) {
    if (isNumber(digit)) throw new InvalidInputException(`"${digit}" is not a number.`);
    
    if (isRomanNumberBase(digit)) return ROMAN_NUMBER_MAP[digit];

    const baseRoman = ROMAN_NUMBER_MAP[computeRomanNumberBase(digit)];
	return baseRoman + ROMAN_NUMBER_MAP[(digit - computeRomanNumberBase(digit))].repeat(digit - computeRomanNumberBase(digit))
}

function computeRomanNumberBase(digit) {
    const digits = Object.keys(ROMAN_NUMBER_MAP).map(Number);
    for (let digitIndex = digits.length - 1; digitIndex >=0; digitIndex --){
        let baseDigit = digits[digitIndex];
        if (digit > baseDigit) {
            return baseDigit;
        }
    }
}

function isNumber(input) {
	return typeof input !== 'number';
}

function isRomanNumberBase(digit) {
    let romanNumberKeys = Object.keys(ROMAN_NUMBER_MAP).map(Number);
    return romanNumberKeys.includes(digit);
}

module.exports = { convertDigits };
