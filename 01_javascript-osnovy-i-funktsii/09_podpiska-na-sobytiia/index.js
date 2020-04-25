module.exports = {

    /**
     * @param {String} event
     * @param {Object} subscriber
     * @param {Function} handler
     */
    on: function (event, subscriber, handler) {
        function Event() {
            this.subscribers = [];
            this.subscriberObjects = [];
        }

        function Subscriber() {
            this.handlers = [];
        }

        if (!this.hasOwnProperty(event)) {
            this[event] = new Event();
        }

        let inx = this[event].subscriberObjects.indexOf(subscriber);

        if (inx === -1) {
            inx = this[event].subscriberObjects.push(subscriber) - 1;
            this[event].subscribers.push(new Subscriber());
        }

        this[event].subscribers[inx].handlers.push(handler.bind(subscriber));

        return this;
    },

    /**
     * @param {String} event
     * @param {Object} subscriber
     */
    off: function (event, subscriber) {
        if (!this.hasOwnProperty(event)) {
            return this;
        }

        let inx = this[event].subscriberObjects.indexOf(subscriber);

        if (inx !== -1) {
            this[event].subscriberObjects.splice(inx, 1, null);
            this[event].subscribers.splice(inx, 1, null);
        }

        return this;
    },

    /**
     * @param {String} event
     */
    emit: function (event) {
        if (!this.hasOwnProperty(event)) {
            return this;
        }

        for (let i = 0; i < this[event].subscribers.length; i++) {
            if (this[event].subscribers[i] !== null) {
                for (let j = 0; j < this[event].subscribers[i].handlers.length; j++) {
                    this[event].subscribers[i].handlers[j]();
                }
            }
        }

        return this;
    }
};
