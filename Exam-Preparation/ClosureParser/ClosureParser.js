function solve(args) {
    var finalResult = 0;
    var functions = {};

    for (var i = 0; i < args.length; i++) {
        var line = args[i].trim();

        var operator = "";
        var nestedOperator = "";
        var currentDigit = "";
        var currentFuncName = "";
        var currentNewFunc = "";

        var nestedParams = [];
        var parameters = [];

        var inCommand = false;
        var inNestedCommand = false;

        for (var j = 1; j < line.length; j++) {
            var symbol = line[j];

            if (symbol == " " || symbol == ")") {
                if (currentFuncName !== "") {
                    if (functions[currentFuncName] || functions[currentFuncName] === 0) {
                        var functionResult = functions[currentFuncName];

                        if (inNestedCommand) {
                            nestedParams.push(functionResult);
                        } else {
                            parameters.push(parseInt(functionResult));
                        }
                    } else {
                        currentNewFunc = currentFuncName;
                    }

                    currentFuncName = ""
                }

                if (currentDigit !== "") {
                    if (inNestedCommand) {
                        nestedParams.push(parseInt(currentDigit));
                    } else {
                        parameters.push(parseInt(currentDigit));
                    }

                    currentDigit = "";
                }

                if (symbol === ")" && currentNewFunc !== "") {
                    var result;

                    if (inNestedCommand) {
                        result = calculate(nestedOperator, nestedParams);
                    } else {
                        result = calculate(operator, parameters);
                    }

                    functions[currentNewFunc] = result;
                    currentNewFunc = "";
                }

                if (symbol == ")" && inNestedCommand) {
                    var nestedResult = calculate(nestedOperator, nestedParams);
                    parameters.push(nestedResult);

                    nestedParams = [];
                    nestedOperator = "";
                    inNestedCommand = false;
                }

                continue;
            }

            if (symbol == "(") {
                if (inCommand) {
                    inNestedCommand = true;
                } else {
                    inCommand = true;
                }

                continue;
            }

            if (isMathOperator(symbol)) {
                if (symbol === "-" && j + 1 < line.length && isNumber(line[j + 1])) {
                    currentDigit += symbol;
                } else {
                    if (inNestedCommand) {
                        nestedOperator += symbol;
                    } else {
                        operator += symbol;
                    }
                }

                continue;
            }

            if (isNumber(symbol)) {
                if (currentFuncName !== "") {
                    currentFuncName += symbol;
                } else {
                    currentDigit += symbol;
                }

                continue;
            }

            currentFuncName += symbol;

        }

        finalResult = calculate(operator, parameters);

        if (finalResult === "Error") {
            return "Division by zero! At Line:" + (i + 1);
        }
    }

    function isMathOperator(symbol) {
        if (symbol === "+" || symbol === "-" || symbol === "/" || symbol === "*") {
            return true;
        } else {
            return false;
        }
    }

    function isNumber(symbol) {
        if (symbol == " ") {
            return false;
        }

        return symbol == Number(symbol);
    }

    function calculate(operator, parameters) {
        if (parameters.length === 1) {
            return parameters[0];
        }

        var result = parameters[0];

        for (var i = 1; i < parameters.length; i++) {
            switch (operator) {
                case "+":
                    result += parameters[i];
                    break;
                case "-":
                    result -= parameters[i];
                    break;
                case "*":
                    result *= parameters[i];
                    break;
                case "/":
                    if (parameters[i] === 0) {
                        return "Error";
                    }

                    result /= parameters[i];
                    result = parseInt(result);
                    break;
            }
        }

        return result;
    }

    return finalResult;
}