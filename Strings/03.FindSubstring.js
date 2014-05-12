(function () {
    "use strict";

    var textString = document.getElementById("sample").textContent.toLowerCase(),
        index = textString.indexOf("in"),
        count = 0;

    while (index !== -1) {
        index = textString.indexOf("in", index + 1);
        count += 1;
    }

    jsConsole.writeLine("Given text contains \"in\" " + count + " times.");
})();