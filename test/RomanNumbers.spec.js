const { expect } = require('chai');
const { convertDigits } = require('../src/RomanNumbers');

describe('Roman Numerals', () => {
	describe('convertDigits()', () => {
		it('should return nothing if no input', () => {
			expect(convertDigits()).to.equal();
        });
		it('should return "I" if input = 1', () => {
			expect(convertDigits(1)).to.equal('I');
		});
		it('should return "II" if input = 2', () => {
			expect(convertDigits(2)).to.equal('II');
		});
		it('should return "III" if input = 3', () => {
			expect(convertDigits(3)).to.equal('III');
		});
		it('should return "IV" if input = 4', () => {
			expect(convertDigits(4)).to.equal('IV');
		});
		it('should return "V" if input = 5', () => {
			expect(convertDigits(5)).to.equal('V');
		});
		it('should return "X" if input = 10', () => {
			expect(convertDigits(10)).to.equal('X');
        });
        it('should return "XL" if input = 40', () => {
			expect(convertDigits(40)).to.equal('XL');
		});
		it('should return "L" if input = 50', () => {
			expect(convertDigits(50)).to.equal('L');
		});
		it('should return "C" if input = 100', () => {
			expect(convertDigits(100)).to.equal('C');
		});
	});
});
