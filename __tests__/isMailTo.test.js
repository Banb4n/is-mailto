/* @flow */

const isMailTo = require('../index.js');

describe('isMailTo()', () => {
    it('should return true if value contain "mailto:" and correct email', () => {
        const value = 'mailto:test@test.com';
        expect(isMailTo(value)).toBe(true);
    });

    it('should return false if value contain "mailto:" but incorrect email', () => {
        const mails = ['mailto:test@test', 'mailto:test.test.com', 'mailto:test.testte@test.fr', 'mailto:test.com@22'];
        const expected = [false, false, true, false];
        mails.forEach((mail, index) => {
            expect(isMailTo(mail)).toBe(expected[index]);
        })
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
