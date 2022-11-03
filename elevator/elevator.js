const elevator = {
    floor: 0,

    resetFloor: function () {
        return this.floor = 0;
    },

    up: function up() {
        return ++this.floor;
    },

    down: function () {
        return --this.floor;
    },

    printFloor: function () {
        console.log(this.floor);
    }
};

module.exports = elevator;