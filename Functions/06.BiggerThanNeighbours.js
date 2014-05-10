(function () {
    "use strict";

    function RangeException(message) {
        this.message = this;
        this.name = "RangeException";
    }

    function getArrayWithRandomIntegers(sizeOfArray) {
        var i,
            numbers = [];

        for (i = 0; i < sizeOfArray; i++) {
            numbers[i] = Math.floor(Math.random() * 100);
        }

        return numbers;
    }

    function getRandomElementIndexFromArray(arr) {
        return Math.floor(Math.random() * arr.length);
    }

    function isBiggerThanNeighbours(arr, position) {
        var len = arr.length;

        if ((position < len - 1) && (position > 0)) {
            if ((arr[position - 1] < arr[position]) && (arr[position + 1] < arr[position])) {
                return true;
            } else {
                return false;
            }
        } else {
            throw new RangeException("Element has no neighbors");
        }
    }

    var numbers = getArrayWithRandomIntegers(15),
        checkPosition = getRandomElementIndexFromArray(numbers),
        isBigger = isBiggerThanNeighbours(numbers, checkPosition);

    jsConsole.writeLine("Array: " + numbers.join("|"));
    jsConsole.writeLine(numbers[checkPosition] + (isBigger ? " is " : " is not ") + "bigger than its neighbors");
})();