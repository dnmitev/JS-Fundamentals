(function () {
    "use strict";

    String.prototype.reverse = function () {
        var i,
            reversedString = "";

        for (i = this.length - 1; i >= 0; i -= 1) {
            reversedString += this[i];
        }

        return reversedString;
    }

    var sampleStr = "buklik";

    jsConsole.writeLine(sampleStr + " => " + sampleStr.reverse())
})();