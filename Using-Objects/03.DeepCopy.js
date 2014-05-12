(function () {
    "use strict";

    function deepCopy(input) {
        var copy = {};

        if (typeof input !== Object) {
            copy = input;
        } else {
            for (var prop in input) {
                copy[prop] = input[prop];
            }
        }

        return copy;
    }

    var number = 5,
        sampleString = "pesho",
        stupidObject = {
            name: "dinko",
            location: "jigula",
            toString: function () {
                return "bat giorgi zadushavam sa";
            }
        };

    jsConsole.writeLine("Number: " + number);
    jsConsole.writeLine("String: " + sampleString);
    jsConsole.writeLine("Object: " + stupidObject);

    var otherNumber = deepCopy(number),
        otherString = deepCopy(sampleString),
        otherObject = deepCopy(stupidObject);

    jsConsole.writeLine("Other Number: " + otherNumber);
    jsConsole.writeLine("Other String: " + otherString);
    jsConsole.writeLine("Other Object: " + otherObject);

    otherNumber = 150;
    otherString = "pesho+mariika=vnl";
    otherObject = {
        name: "spindi",
        toString: function () {
            return "gubi buklik";
        }
    }

    jsConsole.writeLine("Number: " + number);
    jsConsole.writeLine("String: " + sampleString);
    jsConsole.writeLine("Object: " + stupidObject);

    jsConsole.writeLine("Other Number: " + otherNumber);
    jsConsole.writeLine("Other String: " + otherString);
    jsConsole.writeLine("Other Object: " + otherObject);
})();