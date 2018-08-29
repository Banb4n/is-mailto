/**
 * Check if string is a valid mailto
 * @param str
 * @return {boolean}
 */
function isMailTo(value) {
    var re = /^mailto:.+\@.+\..+/i
    return re.test(value);
}

module.exports = isMailTo;