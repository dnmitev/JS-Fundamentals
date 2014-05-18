(function () {
    "use strict";

    function nameLastDigit(number) {
        var lastDigit = parseInt((number % 10), 10);

        switch (lastDigit) {
            case 0:
                return "zero";
            case 1:
                return "one";
            case 2:
                return "two";
            case 3:
                return "three";
            case 4:
                return "four";
            case 5:
                return "five";
            case 6:
                return "six";
            case 7:
                return "seven";
            case 8:
                return "eight";
            case 9:
                return "nine";
            default:
                return "Invalid digit";
        }
    }

    var number = parseInt((Math.random() * 1000), 10),
        lastDigit = nameLastDigit(number);

    // jsConsole.writeLine("The last digit of " + number + " is " + lastDigit);
	console.log(lastDigit)
})();