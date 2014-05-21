function solve(args) {
    var sum = 0;

    var dimensions = args[0].split(" ").map(Number);
    var directions = getDirections(args);
    var numericMatrix = getNumericMatrix(dimensions[0], dimensions[1]);

    var pos = {
        row: 0,
        col: 0
    }

    var currentDirection = "";

    while (true) {
        if (!isInRange(pos.row, dimensions[0]) || !isInRange(pos.col, dimensions[1])) {
            return "successed with " + sum;
        }

        if (directions[pos.row][pos.col] == "X") {
            return "failed at " + "(" + pos.row + ", " + pos.col + ")";
        }

        sum += numericMatrix[pos.row][pos.col];
        currentDirection = directions[pos.row][pos.col];
        directions[pos.row][pos.col] = "X";
        pos = handleDirection(currentDirection, pos);
    }



    function getDirections(input) {
        var directions = [];

        for (var i = 1; i < input.length; i += 1) {
            var line = input[i].split(" "); // get each direction
            var row = [];

            for (var j = 0; j < line.length; j += 1) {
                row[j] = line[j].trim();
            }

            directions[i-1] = row;
        }

        return directions;
    }

    function getNumericMatrix(row, col) {
        var numeric = [];

        for (var i = 0; i < row; i += 1) {
            var line = [];
            line[0] = Math.pow(2, i);

            for (var j = 1; j < col; j += 1) {
                line[j] = line[j - 1] + 1;
            }

            numeric[i] = line;
        }

        return numeric;
    }

    function handleDirection(dir, position) {
        var newPos = {
            row: position.row,
            col: position.col
        };

        switch (dir) {
            case "dl":
                newPos.row += 1;
                newPos.col -= 1;
                break;
            case "dr":
                newPos.row += 1;
                newPos.col += 1;
                break;
            case "ul":
                newPos.row -= 1;
                newPos.col -= 1;
                break;
            case "ur":
                newPos.row -= 1;
                newPos.col += 1;
                break;
        }

        return newPos;
    }

    function isInRange(position, range) {
        return 0 <= position && range > position;
    }
}