/**
 * Check if string is a valid mailto
 * @param str
 * @return {boolean}
 */
function isMailTo(value) {
    return /^mailto:.+\@.+\..+/i.test(value);
}

module.exports = isMailTo;