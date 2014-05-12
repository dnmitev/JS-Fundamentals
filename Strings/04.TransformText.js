(function () {
    "use strict";

    //var text = "We are <mixcase>living</mixcase> in a <upcase>yellow submarine</upcase>. We <mixcase>don't</mixcase> have <lowcase>ANYTHING</lowcase> else.";
    var text = document.getElementById("sample").textContent;

    String.prototype.toMixedCase = function () {
        var i,
            result = "";

        for (i = 0; i < this.length; i += 1) {
            if (Math.floor(Math.random() * 2) === 1) {
                result += this[i].toUpperCase();
            } else {
                result += this[i].toLowerCase();
            }
        }

        return result;
    }

    function transformText(text) {
        var i,
            lowCase = false,
            upCase = false,
            mixCase = false,
            stack = [],
            transformedText = "";

        for (i = 0; i < text.length; i += 1) {
            // searching text for casing tags and push them into the stack
            // every new opened tag is pushed and every closed is popped so the last stack element is the current casing
            if (text.substr(i, 9) === "<mixcase>") {
                mixCase = true;
                stack.push("mix");
                i += 8;
                continue;
            }

            if (text.substr(i, 10) === "</mixcase>") {
                mixCase = false;
                stack.pop();
                i += 9;
                continue;
            }

            if (text.substr(i, 8) === "<upcase>") {
                upCase = true;
                stack.push("up");
                i += 7;
                continue;
            }

            if (text.substr(i, 9) === "</upcase>") {
                upCase = false;
                stack.pop();
                i += 8;
                continue;
            }

            if (text.substr(i, 9) === "<lowcase>") {
                lowCase = true;
                stack.push("low");
                i += 8;
                continue;
            }

            if (text.substr(i, 10) === "</lowcase>") {
                lowCase = false;
                stack.pop();
                i += 9;
                continue;
            }

            if (lowCase && stack[stack.length - 1] === "low") {
                transformedText += text[i].toLowerCase();
                continue;
            }

            if (upCase && stack[stack.length - 1] === "up") {
                transformedText += text[i].toUpperCase();
                continue;
            }

            if (mixCase && stack[stack.length - 1] === "mix") {
                transformedText += text[i].toMixedCase();
                continue;
            }

            // if there are no casing tags the current char is added to the transformed text
            transformedText += text[i];
        }

        return transformedText;
    }

    jsConsole.writeLine(transformText(text));
})();