(function () {
    "use strict";

    function changeAnchorTag(html) {
        var regEx = /<a href[ ]*=[ ]*["']{1}([^>]+)["']{1}>([^>]+)<\/a>/g;

        return html.replace(regEx, "[URL = '$1']$2[/URL]");
    }

    var html = '<p>Please visit <a href="http://academy.telerik. com">our site</a> to choose a training course. Also visit <a href="www.devbg.org">our forum</a> to discuss the courses.</p>',
        changed = changeAnchorTag(html);

    jsConsole.writeLine(changed);
})();