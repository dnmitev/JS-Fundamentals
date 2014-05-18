function solve(args) {
    var valley = args[0].split(",").map(Number);
    var coinsCollected = -9007199254740991;

    for (var i = 2; i < args.length; i += 1) {
        var coinsSoFar = 0;
        var pos = 0;
        var patternCounter = -1;

        var visited = [];

        var pattern = pattern = args[i].split(",").map(Number);
        var totalSteps = pattern.length - 1;

        while (true) {
            if (!isInRange(pos, valley.length)) {
                break;
            }

            if (visited[pos]) {
                break;
            }

            coinsSoFar += valley[pos];
            visited[pos] = 1; // mark as visited

            patternCounter += 1;
            pos += pattern[patternCounter];

            // get to the next pattern element
            if (patternCounter === totalSteps) {
                patternCounter = -1;
            }
        }

        if (coinsSoFar > coinsCollected) {
            coinsCollected = coinsSoFar;
        }
    }

    function isInRange(position, range) {
        return position >= 0 || position < range;
    }

    return coinsCollected;
}
