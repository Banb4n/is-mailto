/* @flow */

const isMailTo = require('../index.js');

describe('isMailTo()', () => {
    it('should return true if value contain "mailto:"', () => {
        const value = 'mailto:test@test.com';

        expect(isMailTo(value)).toBe(true);
    });

    it('should return false if value not contain "mailto:"', () => {
        const value = 'test@test.com';

        expect(isMailTo(value)).toBe(false);
    });

    it('should return false if value is null:"', () => {
        const value = null;

        expect(isMailTo(value)).toBe(false);
    });
});
