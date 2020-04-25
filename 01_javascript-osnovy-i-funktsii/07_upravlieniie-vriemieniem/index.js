/**
 * @param {String} date
 * @returns {Object}
 */

function createObject(date) {
    let d = new Date(Date.parse(date));

    return {
        add: function (timeValue, timeUnit) {
            this.checkTime(timeValue, timeUnit);

            if (timeUnit === 'years') {
                d.setFullYear(d.getFullYear() + timeValue);
            } else if (timeUnit === 'months') {
                d.setMonth(d.getMonth() + timeValue);
            } else if (timeUnit === 'days') {
                d.setDate(d.getDate() + timeValue);
            } else if (timeUnit === 'hours') {
                d.setHours(d.getHours() + timeValue);
            } else if (timeUnit === 'minutes') {
                d.setMinutes(d.getMinutes() + timeValue);
            } else if (timeUnit === 'seconds') {
                d.setSeconds(d.getSeconds() - timeValue);
            }

            return this;
        },
        subtract: function (timeValue, timeUnit) {
            this.checkTime(timeValue, timeUnit);

            if (timeUnit === 'years') {
                d.setFullYear(d.getFullYear() - timeValue);
            } else if (timeUnit === 'months') {
                d.setMonth(d.getMonth() - timeValue);
            } else if (timeUnit === 'days') {
                d.setDate(d.getDate() - timeValue);
            } else if (timeUnit === 'hours') {
                d.setHours(d.getHours() - timeValue);
            } else if (timeUnit === 'minutes') {
                d.setMinutes(d.getMinutes() - timeValue);
            } else if (timeUnit === 'seconds') {
                d.setSeconds(d.getSeconds() - timeValue);
            }

            return this;
        },
        get value() {
            let options = {
                year: 'numeric',
                month: '2-digit',
                day: '2-digit',
                hour: '2-digit',
                minute: '2-digit'
            };

            return d.toLocaleString("ru", options);
        },
        checkTime: function (timeValue, timeUnit) {
            if (timeValue < 0) throw new TypeError(`${timeUnit}:${timeValue} - Не может быть отрицательным числом`);

            let timeUnits = ['years', 'months', 'days', 'hours', 'minutes', 'seconds'];
            if (timeUnits.indexOf(timeUnit) === -1) throw new TypeError(`${timeUnit} - Неподдреживаемая единица времени`);
        }
    };
}

module.exports = function (date) {
    return createObject(date);
};
