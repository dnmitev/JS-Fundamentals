function solve(args) {
    var words = getWords();
    var wordsCount = args[0] | 0;

    reorderWords(words);

    var result = getResult(words);

    function getWords() {
        var wordsList = [];

        for (var i = 1; i < args.length; i += 1) {
            wordsList.push(args[i].trim());
        }

        return wordsList;
    }

    function reorderWords(list) {
        var oldWord = "";
        var pos = 0;

        for (var i = 0; i < list.length; i += 1) {
            pos = list[i].length % wordsCount;

            oldWord = list[i];
            list[i] = list[pos];
            list[pos] = oldWord;
        }
    }

    function getResult(list) {
        var output = "";
        var longestWord = getLongestWord(list);

        for (var i = 0; i < longestWord.length; i += 1) {
            for (var word = 0; word < list.length; word++) {
                if (i < list[word].length) {
                    output += list[word][i];
                }
            }
        }

        return output;
    }

    function getLongestWord(list) {
        var longest = list[0];

        for (var i = 1; i < list.length; i+=1) {
            if (list[i].length > longest.length) {
                longest = list[i];
            }
        }

        return longest;
    }

    return result;
}