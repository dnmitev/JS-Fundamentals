(function () {
    "use strict";

    function solve(params) {
        var i,
            arr = params.map(Number),
            len = arr[0],
            sequenceCount = 1;

        for (i = 2; i <= len; i += 1) {
            if (arr[i - 1] > arr[i]) {
                sequenceCount += 1;
            }
        }

        return sequenceCount;
        //console.log(sequenceCount);
    }

    var sampleInput1 = [
        "7",
        "1",
        "2",
        "-3",
        "4",
        "4",
        "0",
        "1"
    ];

    var sampleInput2 = [
        6,
        1,
        3,
        -5,
        8,
        7,
        -6
    ];

    var sampleInput3 = [
        9,
        1,
        8,
        8,
        7,
        6,
        5,
        7,
        7,
        6
    ];

    solve(sampleInput2);
})();