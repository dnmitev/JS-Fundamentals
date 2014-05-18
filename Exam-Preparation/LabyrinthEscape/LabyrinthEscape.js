function solve(args) {
    "use strict";

    var rows = parseInput(args[0])[0];
    var cols = parseInput(args[0])[1];

    var matrix = getMatrix(rows, cols);

    var pos = {
        row: parseInput(args[1])[0],
        col: parseInput(args[1])[1]
    };

    var directions = getMatrixDirection();

    var sum = 0;
    var steps = 0;

    var currentDir = "";

    while (true) {
        if (!isInRange(pos.row, rows) || !isInRange(pos.col, cols)) {
            return "out " + sum;
        }

        if (directions[pos.row][pos.col] === "X") {
            return "lost " + steps;
        }

        steps += 1;
        sum += matrix[pos.row][pos.col];
        currentDir = directions[pos.row][pos.col];
        directions[pos.row][pos.col] = "X";
        pos = handleDirection(currentDir, pos);
    }

    function parseInput(args) {
        return args.split(' ').map(Number);
    }

    function getMatrix(rowsCount, colsCount) {
        var i,
            j,
            counter = 1,
            matrix = [],
            row;

        for (i = 0; i < rowsCount; i += 1) {
            row = [];

            for (j = 0; j < colsCount; j += 1) {
                row[j] = counter;
                counter += 1;
            }

            matrix[i] = row;
        }

        return matrix;
    }

    function getMatrixDirection() {
        var directions = [];

        for (var i = 2; i < args.length; i += 1) {
            directions[i - 2] = args[i].split("");
        }

        return directions;
    }

    function isInRange(position, range) {
        return 0 <= position && range > position;
    }

    function handleDirection(dir, position) {
        var newPos = {
            row: position.row,
            col: position.col
        };

        switch (dir) {
            case "l":
                newPos.col -= 1;
                break;
            case "r":
                newPos.col += 1;
                break;
            case "u":
                newPos.row -= 1;
                break;
            case "d":
                newPos.row += 1;
                break;
        }

        return newPos;
    }
}