(function () {
    "use strict";

    function isPalindrome(word) {
        var i,
            limit = parseInt(word.length / 2);

        for (i = 0; i <= limit; i += 1) {
            if (word[i] !== word[word.length - 1 - i]) {
                return false;
            }
        }

        return true;
    }

    function extractPalindromes(text) {
        var i,
            len = text.length,
            palindromes = [];

        for (i = 0; i < len; i+=1) {
            if (isPalindrome(text[i]) && text[i].length > 1) {
                palindromes.push(text[i]);
            }
        }

        return palindromes;
    }

    var text = document.getElementById("sample").textContent.trim().split(" ");

    jsConsole.writeLine("Palindromes: " + extractPalindromes(text).join(" | "));
})();