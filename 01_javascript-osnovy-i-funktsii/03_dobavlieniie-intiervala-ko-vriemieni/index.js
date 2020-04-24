/**
 * @param {Number} hours
 * @param {Number} minutes
 * @param {Number} interval
 * @returns {String}
 */
module.exports = function (hours, minutes, interval) {
    const h = new Intl.NumberFormat('en-US',
        {minimumIntegerDigits: 2}).format((hours + Math.floor((minutes + interval) / 60)) % 24);

    const m = new Intl.NumberFormat('en-US',
        {minimumIntegerDigits: 2}).format((minutes + interval) % 60);

    return `${h}:${m}`;
};

