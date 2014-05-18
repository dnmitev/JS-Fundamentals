function solve(input) {
    "use strict";

    var i,
        arr = input.map(Number),
        elementsCount = arr[0],
        maxSoFar = arr[1],
        maxEndingHere = arr[1],
        start = 1,
        startTemp = 1,
        end = 2;

    for (i = 2; i <= elementsCount; i += 1) {
        if (maxEndingHere <= 0) {
            maxEndingHere = arr[i]
            startTemp = i;
        } else {
            maxEndingHere += arr[i];
        }

        if (maxEndingHere > maxSoFar) {
            maxSoFar = maxEndingHere;

            start = startTemp;
            end = i;
        }
    }

    return maxSoFar;
}