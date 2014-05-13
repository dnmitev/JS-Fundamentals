(function () {
    "use strict";

    function removeHTMLTags(text) {
        var regex = /(<([^>]+)>)/ig;

        return text.replace(regex, "");
    }

    var html = document.getElementById("sample").textContent;

    jsConsole.writeLine(removeHTMLTags(html));
})();