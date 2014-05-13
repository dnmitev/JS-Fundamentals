(function () {
    "use strict";

    function generateList(people, template) {
        template = new String(template); // parse to string
        template = template.replace(/<strong>/g, '<li><strong>'); // add <li> tag
        template = template.replace(/<\/span>/g, '</span></li>'); // add</li> tag

        var list = '<ul>',
            currentLI;

        for (var i in people) {
            currentLI = template.replace('-{name}-', people[i].name);
            currentLI = currentLI.replace('-{age}-', people[i].age);
            list += currentLI;
        }

        list += '</ul>';

        return list;
    }

    var people = [{ name: "Dinko Kapak", age: 12 },
                        { name: "Bay Ivan", age: 67 },
                        { name: "Shisho Bakshisho", age: 52 }],
        template = document.getElementById("list-item").innerHTML,
        peopleList = generateList(people, template);

    jsConsole.writeLine(peopleList);
})();