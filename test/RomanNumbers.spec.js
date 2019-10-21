const { expect } = require('chai');
const { convertDigits } = require('../src/RomanNumbers');
const InvalidInputException = require('../src/exceptions/InvalidInputException');

describe('Roman Numerals', () => {
	describe('convertDigits()', () => {
		it('Should throw InvalidInputException if input is not a number', () => {
			try {
				convertDigits('hi');
				throw new Error('Test should not have passed.');
			} catch (err) {
				expect(err).to.be.instanceOf(InvalidInputException);
				expect(err.message).to.equal(`"hi" is not a number.`);
			}
		});

		it('should return "I" when input = 1', () => {
			expect(convertDigits(1)).to.equal('I');
		});
        
        it('should return "II" when input = 2', () => {
			expect(convertDigits(2)).to.equal('II');
        });
        it('should return "III" when input = 3', () => {
			expect(convertDigits(3)).to.equal('III');
		});
        it('should return "IV" when input = 4', () => {
			expect(convertDigits(4)).to.equal('IV');
		});
        it('should return "V" when input = 5', () => {
			expect(convertDigits(5)).to.equal('V');
		});
        it('should return "VI" when input = 6', () => {
			expect(convertDigits(6)).to.equal('VI');
		});
        // it('should return "VII" when input = 7', () => {
		// 	expect(convertDigits(7)).to.equal('VII');
		// });
        // it('should return "VIII" when input = 8', () => {
		// 	expect(convertDigits(8)).to.equal('VIII');
		// });
        // it('should return "IX" when input = 9', () => {
		// 	expect(convertDigits(9)).to.equal('IX');
		// });
	});
});
