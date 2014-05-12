(function () {
    "use strict";

    function hasProperty(obj, property) {
        for (var prop in obj) {
            if (property === prop) {
                return true;
            }
        }

        return false;
    }

    var person = {
        name: "Bat Spindi",
        gender: "male",
        type: "idiot",
        likesCount: 30000,
        toString: function () {
            return "Bat Giorgi Zadushavam sa";
        }
    };

    hasProperty(person, "gender") ? "The object contains the given property" : "The object does not contains the given property";

    jsConsole.writeLine(hasProperty(person, "gender") ? "The object contains the given property" : "The object does not contains the given property");
    jsConsole.writeLine(hasProperty(person, "gubi") ? "The object contains the given property" : "The object does not contain the given property");
})();