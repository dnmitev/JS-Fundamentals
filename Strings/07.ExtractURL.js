(function () {
    "use strict";

    function extractURLData(url) {
        var protocol = "",
            server = "",
            resource = "",
            start = url.indexOf("://") + 3,
            end = url.indexOf("/", start);

        if (url.indexOf("://") === -1) {
            protocol += "none";
            start = 0;
        } else {
            protocol += url.substr(0, url.indexOf("://") + 3);
        }

        if (end !== -1) {
            server += url.substr(start, end - start);
            resource += url.substr(end);
        } else {
            server = url.substr(end);
            resource += "none";
        }

        return {
            protocol: protocol,
            server: server,
            resource: resource,
            toString: function () {
                return "Protocol: " + this.protocol + "\nServer: " + this.server + "\nResource: " + this.resource;
            }
        }
    }

    var url = document.getElementById("sample").textContent;

    jsConsole.writeLine(extractURLData(url));
})();