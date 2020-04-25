/**
 * @param {Array} collection
 * @params {Function[]} – Функции для запроса
 * @returns {Array}
 */
function query(collection) {
    let funcArr = Array.prototype.slice.call(arguments).slice(1);
    let filterIn = funcArr.filter(e => e.name === 'filterIn');
    let select = funcArr.filter(e => e.name === 'select');

    filterIn.forEach(fn => {
        collection = fn(collection)
    });

    select.forEach(fn => {
        collection = fn(collection)
    });

    return collection
}


/**
 * @params {String[]}
 */
function select() {
    let fields = Array.prototype.slice.call(arguments);

    return function select(collection) {
        return collection.map(i => {
            let result = {};

            fields.forEach(function (e) {
                if (i.hasOwnProperty(e)) {
                    result[e] = i[e]
                }
            });

            return result
        })
    }
}

/**
 * @param {String} property – Свойство для фильтрации
 * @param {Array} values – Массив разрешённых значений
 */
function filterIn(property, values) {
    return function filterIn(collection) {
        return collection.filter(i => {
            return values.includes(i[property])
        })
    }
}

module.exports = {
    query: query,
    select: select,
    filterIn: filterIn
};
