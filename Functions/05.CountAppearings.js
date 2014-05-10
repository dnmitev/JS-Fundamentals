(function () {
    "use strict";

    function getArrayWithRandomIntegers(sizeOfArray) {
        var i,
            numbers = [];

        for (i = 0; i < sizeOfArray; i++) {
            numbers[i] = Math.floor(Math.random() * 100);
        }

        return numbers;
    }

    function getRandomElementFromArray(arr) {
        return arr[Math.floor(Math.random() * arr.length)];
    }

    function getElementOccuranceCount(arr, targetElement) {
        var i = 0,
            len = arr.length,
            count = 0;

        for (i = 0; i < len; i++) {
            if (arr[i] === targetElement) {
                count++;
            }
        }

        return count;
    }

    var numbers = getArrayWithRandomIntegers(20),
        numberToCount = getRandomElementFromArray(numbers),
        count = getElementOccuranceCount(numbers, numberToCount);

    jsConsole.writeLine("Given array: " + numbers.join("|"));
    jsConsole.writeLine("Number " + numberToCount + " is counted: " + count + " times");

    // since I've done a solution with random values, I believe it's irrelevant to do another function to check theese
})();