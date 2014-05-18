function solve(args) {
    var path = args[0].split(",").map(Number);

    var bestLength = 0;

    for (var i = 0; i < path.length; i++) {
        for (var step = 1; step < path.length; step++) {
            var previousPos = i;
            var currentPos = (previousPos + step) % path.length;

            var currentLength = 1;

            while (previousPos !== currentPos && path[previousPos] < path[currentPos]) {
                currentLength += 1;
                previousPos = currentPos;
                currentPos = (previousPos + step) % path.length;
            }

            if (currentLength > bestLength) {
                bestLength = currentLength;
            }
        }
    }

    return bestLength;
}