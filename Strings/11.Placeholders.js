﻿(function () {
    "use strict";

    String.prototype.format = function (args) {
        var str = this;

        return str.replace(String.prototype.format.regex, function (item) {
            var intVal = parseInt(item.substring(1, item.length - 1)),
                replace;

            if (intVal >= 0) {
                replace = args[intVal];
            } else if (intVal === -1) {
                replace = "{";
            } else if (intVal === -2) {
                replace = "}";
            } else {
                replace = "";
            }
            return replace;
        });
    };

    String.prototype.format.regex = new RegExp("{-?[0-9]+}", "g");

    // Sample usage.
    var str = "She {1} {0}{2} by the {0}{3}. {-1}^_^{-2}";

    str = str.format(["sea", "sells", "shells", "shore"]);

    jsConsole.writeLine(str);
})();