const { expect } = require('chai');
const { convertDigits, convertRoman } = require('../src/RomanNumbers');
const { InvalidInputException } = require('../src/exceptions');

describe('Roman Numerals', () => {
	// describe('convertDigits()', () => {
	// it('should throw Error if no input', () => {
	// 	try {
	// 		convertDigits();
	// 		throw new Error('Test should not pass');
	// 	} catch (err) {
	// 		expect(err).to.be.instanceOf(InvalidInputException);
	// 		expect(err.message).to.equal('Invalid input');
	// 	}
	// });
	// 	it('should return "I" if input = 1', () => {
	// 		expect(convertDigits(1)).to.equal('I');
	// 	});
	// 	it('should return "II" if input = 2', () => {
	// 		expect(convertDigits(2)).to.equal('II');
	// 	});
	// 	it('should return "III" if input = 3', () => {
	// 		expect(convertDigits(3)).to.equal('III');
	// 	});
	// 	it('should return "IV" if input = 4', () => {
	// 		expect(convertDigits(4)).to.equal('IV');
	// 	});
	// 	it('should return "V" if input = 5', () => {
	// 		expect(convertDigits(5)).to.equal('V');
	// 	});
	// 	it('should return "VI" if input = 6', () => {
	// 		expect(convertDigits(6)).to.equal('VI');
	// 	});
	// 	it('should return "X" if input = 10', () => {
	// 		expect(convertDigits(10)).to.equal('X');
	// 	});
	// 	it('should return "XI" if input = 11', () => {
	// 		expect(convertDigits(11)).to.equal('XI');
	// 	});
	// 	it('should return "XII" if input = 12', () => {
	// 		expect(convertDigits(12)).to.equal('XII');
	// 	});
	// 	it('should return "XX" if input = 20', () => {
	// 		expect(convertDigits(20)).to.equal('XX');
	// 	});
	// 	it('should return "XXII" if input = 22', () => {
	// 		expect(convertDigits(22)).to.equal('XXII');
	// 	});
	// 	it('should return "XLIX" if input = 49', () => {
	// 		expect(convertDigits(49)).to.equal('XLIX');
	// 	});
	// 	it('should return "L" if input = 50', () => {
	// 		expect(convertDigits(50)).to.equal('L');
	// 	});
	// 	it('should return "LXVII" if input = 67', () => {
	// 		expect(convertDigits(67)).to.equal('LXVII');
	// 	});
	// 	it('should return "XCIX" if input = 99', () => {
	// 		expect(convertDigits(99)).to.equal('XCIX');
	// 	});
	// 	it('should return "C" if input = 100', () => {
	// 		expect(convertDigits(100)).to.equal('C');
	// 	});
	// });

	describe('convertRoman()', () => {
		// it('should throw Error if no input', () => {
		// 	try {
		// 		convertRoman();
		// 		throw new Error('Test should not pass');
		// 	} catch (err) {
		// 		expect(err).to.be.instanceOf(InvalidInputException);
		// 		expect(err.message).to.equal('Invalid input');
		// 	}
		// });
		// it('should throw Error if invalid input', () => {
		// 	try {
		// 		convertRoman('hiiii');
		// 		throw new Error('Test should not pass');
		// 	} catch (err) {
		// 		expect(err).to.be.instanceOf(InvalidInputException);
		// 		expect(err.message).to.equal('Invalid input');
		// 	}
		// });
		it('should return "IV" if input = 4', () => {
			expect(convertRoman('IV')).to.equal(4);
		});
		it('should return "II" if input = 2', () => {
			expect(convertRoman('II')).to.equal(2);
		});
		it('should return "LVI" if input = 56', () => {
			expect(convertRoman('LVI')).to.equal(56);
		});
	});
});
