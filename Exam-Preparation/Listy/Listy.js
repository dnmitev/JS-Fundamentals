function solve(args) {
    var result = 0;

    var definedFunctions = {};
    var listValues = [];


    for (var i = 0; i < args.length; i++) {
        var line = args[i];

        var isInDefine = false;
        var isInFunction = false;
        var isInList = false;

        var varName = "";
        var funcName = "";
        var list = [];

        for (var j = 0; j < line.length; j++) {

            if (line.substr(j, 3) === "def" && line[j + 3] === " ") {
                isInDefine = true;
                varName = "";
                j += 3; // skip next 3 symbols - " " is taken into account
                continue;
            }

            if (isInDefine) {
                if (line[j] !== " " && line[j] !== "[") {
                    varName += line[j];
                    continue;
                } else {
                    isInDefine = false;
                }
            }

            if (line[j] !== "[" && line[j] !== " " && !isInList) {
                funcName = line.substr(j, 3);
                j += 2; // next symbol should be "["
                continue;
            } else if (line[j] === "[") {
                isInList = true;
                continue;
            }

            if (isInList) {
                list = line.substr(j, line.length - j - 1).split(","); // here the elements are NOT trimmed!
                isInlist = false;

                result = handleFunction(funcName, fillListWithValues(list));
                definedFunctions[varName] = result;

                j += line.length - j - 1;
            }
        }
    }

    function handleFunction(str, list) {
        var result = 0;

        switch (str) {
            case "sum": {
                result = getElementsSum(list);
                break;
            }
            case "avg": {
                result = parseInt(getElementsSum(list) / list.length);
                break;
            }
            case "max":
                result = getMax(list);
                break;
            case "min":
                result = getMin(list);
                break;
            default:
                result = list;
                break;
        }

        return result;
    }

    function getElementsSum(list) {
        var sum = 0;

        for (var i = 0; i < list.length; i++) {
            sum += list[i];
        }

        return sum;
    }

    function getMax(list) {
        var max = list[0];

        for (var i = 1; i < list.length; i++) {

            if (list[i] > max) {
                max = list[i];
            }
        }

        return max;
    }

    function getMin(list) {
        var min = list[0];

        for (var i = 1; i < list.length; i++) {

            if (list[i] < min) {
                min = list[i];
            }
        }

        return min;
    }

    function fillListWithValues(list) {
        var result = [];
        var current = "";

        for (var i = 0; i < list.length; i++) {
            current = list[i].trim();

            if (!isNaN(current - 0)) {
                result.push(current | 0);
            } else {
                if (Array.isArray(definedFunctions[current])) {
                    
                    for (var j = 0; j < definedFunctions[current].length; j++) {
                        result.push(definedFunctions[current][j] | 0);
                    }
                } else {
                    result.push(definedFunctions[current] | 0);
                }
            }
        }

        return result;
    }

    result = Array.isArray(result) ? result.shift() : result;

    return result;
}