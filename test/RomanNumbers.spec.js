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
	});
});
