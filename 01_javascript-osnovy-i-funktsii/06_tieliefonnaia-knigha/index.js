// Телефонная книга
var phoneBook = {};

/**
 * @param {String} command
 * @returns {*} - результат зависит от команды
 */
module.exports = function (command) {
    let s = command.split(' ');
    let commandName = s[0];

    if (commandName === 'ADD') {
        let name = s[1];
        let phones = s[2].split(',');

        if (!phoneBook.hasOwnProperty(name)) {
            phoneBook[name] = phones;
        } else {
            phoneBook[name] = phoneBook[name].concat(phones);
        }
    } else if (commandName === 'REMOVE_PHONE') {
        let phone = s[1];

        for (let key in phoneBook) {
            for (let i = phoneBook[key].length; i--;) {
                if (phoneBook[key][i] === phone) {
                    phoneBook[key].splice(i, 1);
                    return true;
                }
            }
        }

        return false;
    } else {
        let result = [];

        for (let key in phoneBook) {
            if (phoneBook[key].length > 0)
                result.push(`${key}: ${phoneBook[key].join(', ')}`);
        }

        result.sort();
        return result;
    }
};

