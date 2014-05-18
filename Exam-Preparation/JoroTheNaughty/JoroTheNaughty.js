function solve(input) {
    "use strict";

    function parseInput(input) {
        return input.split(' ').map(Number);
    }

    function getMatrix(rows, cols) {
        var i,
            j,
            counter = 1,
            matrix = [],
            row;

        for (i = 0; i < rows; i += 1) {
            row = [];

            for (j = 0; j < cols; j += 1) {
                row[j] = counter;
                counter += 1;
            }

            matrix[i] = row;
        }

        return matrix;
    }

    function isInRange(position, range) {
        return 0 <= position && range > position;
    }

    var totalJumps = 0,
        sumOfNumbers = 0,
        counter = 0,
        matrixRows = parseInput(input[0])[0],
        matrixCols = parseInput(input[0])[1],
        jumpsCount = parseInput(input[0])[2],
        matrix = getMatrix(matrixRows, matrixCols),
        currentPosition = {
            x: parseInput(input[1])[0],
            y: parseInput(input[1])[1]
        },
        jumpsArr = [];

    for (var i = 2; i < input.length; i += 1) {
        jumpsArr.push({
            x: parseInput(input[i])[0],
            y: parseInput(input[i])[1]
        });
    }

    while (true) {
        if (!isInRange(currentPosition.x, matrixRows) || !isInRange(currentPosition.y, matrixCols)) {
            return "escaped " + sumOfNumbers;
        }

        if (matrix[currentPosition.x][currentPosition.y] === "X") {
            return "caught " + totalJumps;
        }

        totalJumps += 1;

        sumOfNumbers += matrix[currentPosition.x][currentPosition.y];
        matrix[currentPosition.x][currentPosition.y] = "X";
        currentPosition.x += jumpsArr[counter].x;
        currentPosition.y += jumpsArr[counter].y;
        counter += 1;
        counter = counter === jumpsCount ? 0 : counter;
    }
}

