(function () {
    "use strict";

    function extractEmails(text) {
        var regEx = /[a-zA-Z0-9_]+(?:\.[A-Za-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?!([a-zA-Z0-9]*\.[a-zA-Z0-9]*\.[a-zA-Z0-9]*\.))(?:[A-Za-z0-9](?:[a-zA-Z0-9-]*[A-Za-z0-9])?\.)+[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?/g;

        return text.match(regEx);
    }

    var text = document.getElementById("sample").textContent,
        listOfEmails = extractEmails(text);
     
    jsConsole.writeLine(listOfEmails.join(" | "));
})();