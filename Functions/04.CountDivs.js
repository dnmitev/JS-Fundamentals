(function () {
    "use strict";

    // http://coursesweb.net/javascript/getelementsbytagname here you can find explanation about the .getElementByTagName function
    var arrOfDivs = document.getElementsByTagName("div");

    jsConsole.writeLine("there are " + arrOfDivs.length + " div elements on this page");
}) ();