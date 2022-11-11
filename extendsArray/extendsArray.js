const allNum = [4, 12, 8, 2];
const mixed = ["Hello", 20, -1, "!", 450];

function extendsArray() {
    var element = 0;
    Array.prototype.sum = function () {
        for (let i = 0; i < this.length; i++) {
            if (typeof this[i] == 'number') {
                element += this[i];
            }
        }
        return element;
    }
    Array.prototype.first = function () {
        return this[0];
    }
    Array.prototype.last = function () {
        return this[this.length - 1];
    }
    Array.prototype.sum();
    Array.prototype.first();
    Array.prototype.last();
}

module.exports = extendsArray;