const allNum = [4, 12, 8, 2];
const mixed = ["Hello", 20, -1, "!", 450];

function extendsArray() {
    Array.sum = function() {
        for (let i = 0; i < Array.length; i++) {
            var element = Array[i];
            element+=element;
        }
        return element;
    }
    Array.first = function() {
        return Array[0];
    }
    Array.last = function() {
        return Array[Array.length-1];
    }
}

module.exports = extendsArray;