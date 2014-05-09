(function () {
    "use strict";

    var number = parseInt(Math.random()*1000),
        reversedNumber = reverseDigits(number);

    function reverseDigits(number) {
        var strOfNumber = number.toString(),
            reversed = "",
            i;

        for (i = strOfNumber.length - 1; i >= 0; i--) {
            reversed += strOfNumber[i];
        }

        return parseInt(reversed); // returning parsed string would exclude leading zero -> i.e. 390 -> 93
    }

    jsConsole.writeLine(number + " -> " + reversedNumber);
}) ();