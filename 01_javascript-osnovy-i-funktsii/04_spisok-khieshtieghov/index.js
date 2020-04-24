/**
 * @param {String} tweet
 * @returns {String[]}
 */
module.exports = function (tweet) {
    return tweet.split(' ').filter(word => word.startsWith('#')).map(word => word.slice(1));
};
