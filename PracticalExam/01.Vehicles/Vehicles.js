function solve(params) {
    var wheelsCount = getWheelsCount(params[0]);
    var totalCombinations = 0;

    var limit = parseInt(wheelsCount / 3);

    for (var i = 0; i <= limit; i += 1) {
        for (var j = 0; j <= limit; j += 1) {
            for (var k = 0; k <= limit; k += 1) {
                var a = 3 * i;
                var b = 4 * j;
                var c = 10 * k;

                if (a + b + c === wheelsCount) {
                    totalCombinations += 1;
                }
            }
        }
    }

    return totalCombinations;

    function getWheelsCount(input) {
        return input | 0;
    }
}