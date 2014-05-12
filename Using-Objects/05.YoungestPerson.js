(function () {
    "use strict";

    function createPerson(firstName, lastName, age) {
        return {
            firstName: firstName,
            lastName: lastName,
            age: age
        };
    }

    function getTheYoungestPersonFullName(arr) {
        var i,
            min = 1000,
            len = arr.length,
            fullName = "";

        for (i = 0; i < len; i += 1) {
            if (arr[i].age < min) {
                min = arr[i].age;
                fullName = arr[i].firstName + " " + arr[i].lastName;
            }
        }

        return fullName;
    }

    var people = [
        createPerson("Bat", "Georgi", 23),
        createPerson("Dinko", "Zadushavam sa", 12),
        createPerson("Pesho", "the One", 25),
        createPerson("Unufri", "Picha", 27)
    ];

    jsConsole.writeLine(getTheYoungestPersonFullName(people) + " is the youngest person.");
})();