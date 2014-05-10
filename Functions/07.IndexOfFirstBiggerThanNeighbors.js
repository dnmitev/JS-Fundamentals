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

    function getIndexOfFirstBiggerThanNeighbors(arr) {
        var i,
            len = arr.length,
            index = -1;

        for (i = 1; i < len - 1; i++) {
            if (isBiggerThanNeighbours(arr, i)) {
                index = i;
                return index;
            }
        }

        return index;
    }

    function isBiggerThanNeighbours(arr, position) {
        var len = arr.length;

        if ((position < len - 1) && (position > 0)) {
            if ((arr[position - 1] < arr[position]) && (arr[position + 1] < arr[position])) {
                return true;
            } else {
                return false;
            }
        }
    }

    var numbers = getArrayWithRandomIntegers(15),
        indexOfFirstElement = getIndexOfFirstBiggerThanNeighbors(numbers);


    jsConsole.writeLine("Array: " + numbers.join("|"));
    
    if (indexOfFirstElement !== -1) {
        jsConsole.writeLine("First element bigger than its neighbors has index of " + indexOfFirstElement);
    } else {
        jsConsole.writeLine("There is not element that is bigger than its neighbors.");
    }
})();