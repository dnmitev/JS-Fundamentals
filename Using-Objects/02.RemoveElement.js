function getArrayWithRandomIntegers(sizeOfArray) {
    var i,
        numbers = [];

    for (i = 0; i < sizeOfArray; i += 1) {
        numbers[i] = Math.floor(Math.random() * 100);
    }

    return numbers;
}

Array.prototype.remove = function (number) {
    for (var i = 0; i < this.length; i += 1) {
        if (this[i] === number) {
            this.splice(i, 1);
        }
    }
};

var arr = getArrayWithRandomIntegers(20);

jsConsole.writeLine("Initial array is: " + arr.join("|"));

function onRemoveClick() {
    var number = parseInt(document.getElementById("tb-number").value);

    arr.remove(number);

    jsConsole.writeLine("After removing :" + arr.join("|"));
}