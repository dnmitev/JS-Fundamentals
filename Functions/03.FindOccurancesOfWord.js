function onSearchWordClick(){
    var text = document.getElementById("text").textContent.trim(),
        searchedWord = document.getElementById("tb-input").value;

    countWordOccurrances(text, searchedWord);
    countWordOccurrances(text, searchedWord, true);

    function countWordOccurrances(text, targetWord, isCaseSensitive){
        isCaseSensitive = isCaseSensitive || false; // default value for case sensitive search is false

        if (isCaseSensitive === false) {
            text = text.toLowerCase();
        }

        var i,
            occurrancesCount = 0,
            wordsInText = text.split(" ");

        // go through all words to search the target one
        for (i = 0; i < wordsInText.length; i++) {
            if (wordsInText[i].trim() === targetWord.trim()) {
                occurrancesCount++;
            }
        }

        jsConsole.writeLine("Word \"" + targetWord + "\" is used " + occurrancesCount + " times in the given text.");
    }
}