(function () {
    "use strict";

    function createPoint(xCoordinate, yCoordinate) {
        return {
            x: xCoordinate,
            y: yCoordinate,
            toString: function () {
                return "P(" + this.x + ";" + this.y + ")";
            }
        }
    }

    function createLine(firstPoint, secondPoint) {
        return {
            start: firstPoint,
            end: secondPoint,
            length: calculateDistance(firstPoint, secondPoint),
            toString: function () {
                return "L{" + firstPoint + ";" + secondPoint + "}";
            }
        }
    }

    function calculateDistance(firstPoint, secondPoint) {
        return Math.sqrt(Math.pow((firstPoint.x - secondPoint.x), 2) + Math.pow((firstPoint.y - secondPoint.y), 2));
    }

    function canFormTriangle(firstLine, secondLine, thirdLine) {
        if (((firstLine.length + secondLine.length) > thirdLine.length) &&
                ((firstLine.length + thirdLine.length) > secondLine.length) &&
                ((secondLine.length + thirdLine.length) > firstLine.length)) {
            return true;
        }

        return false;
    }

    var firstPoint = createPoint(0, 0),
        secondPoint = createPoint(5, 0),
        distance = calculateDistance(firstPoint, secondPoint),
        line = createLine(firstPoint, secondPoint);

    jsConsole.writeLine("The distance between " + firstPoint + " and " + secondPoint + " is " + distance);
    jsConsole.writeLine(line);
})();