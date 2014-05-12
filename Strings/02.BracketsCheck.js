(function () {
    "use strict";

    function areBracketsPutCorrectly(expression) {
        var i,
            bracketsCount = 0;

        for (i = 0; i < expression.length; i+=1) {
            if (expression[i] === "(") {
                bracketsCount += 1;
            } else if (expression[i] === ")") {
                bracketsCount -= 1;
            }

            if (bracketsCount < 0) {
                break;
            }
        }

        if (bracketsCount === 0) {
            return true;
        }

        return false;
    }

    jsConsole.writeLine("((a+b)/5-d) has " + (areBracketsPutCorrectly("((a+b)/5-d)") ? "correctly " : "not correctly ") + "put brackets");
    jsConsole.writeLine(")(a+b)/5-d) has " + (areBracketsPutCorrectly(")(a+b)/5-d)") ? "correctly " : "not correctly ") + "put brackets");

})();