(function () {
    "use strict";

    function groupByKey(people, key) {
        var i,
            groupedPeople = {},
            groupName,
            currPerson,
            len = people.length;

        for (i = 0; i < len; i += 1) {
            groupName = people[i][key];
            currPerson = people[i];

            if (groupedPeople[groupName]) {
                groupedPeople[groupName].push(currPerson);
            } else {
                groupedPeople[groupName] = currPerson;
            }
        }

        return groupedPeople;
    }

    function createPerson(firstName, lastName, age) {
        return {
            firstName: firstName,
            lastName: lastName,
            age: age
        };
    }

    var groupedPeople,
        people = [
             createPerson("Bat", "Georgi", 23),
             createPerson("Dinko", "Zadushavam sa", 12),
             createPerson("Pesho", "the One", 25),
             createPerson("Unufri", "Picha", 27)
        ];

    groupedPeople = groupByKey(people, "firstName");

    for (var group in groupedPeople) {
        jsConsole.writeLine("Group: " + group);

        for (var member in groupedPeople[group]) {
            jsConsole.writeLine("---Item:" + groupedPeople[group][member]);
        }
    }
})();