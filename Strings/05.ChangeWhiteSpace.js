(function () {
    "use strict";
    
    function escapeSpacesToHTML(text) {
        var i,
            result = "";

        for (i = 0; i < text.length; i += 1) {
            if (text[i] !== " ") {
                result += text[i];;
            } else {
                result += "&nbsp;";
            }
        }

        return result;
    }

    var textInput = document.getElementById("sample").textContent;

    jsConsole.writeLine(escapeSpacesToHTML(textInput));
})();