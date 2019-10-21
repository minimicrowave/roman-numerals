const { InvalidInputException } = require('../exceptions');
const { isNumber, isString } = require('../utils');


function validateRoman(input) {
	if (!input || input.match(/[^IVXLC]/gi) || !isString(input))
		throw new InvalidInputException('Invalid input');
}

function validateNumeral(input) {
	if (!input || !isNumber(input)) throw new InvalidInputException('Invalid input');
}

module.exports = { validateNumeral, validateRoman };
