$(function () {
    'use strict';
    var paragraph = document.createElement("ul");
    var output = document.getElementById("output");
    var press = document.getElementById("doList").onkeypress = function (event) {
        if (event.which == 13 || event.keyCode == 13) {
            var input = document.getElementById("doList").value;
            console.log(input);
            output.appendChild(paragraph);
            output.innerHTML += "<li>" + input + "</li>";
            return false;
        } else {
            return true;
        }

    };
    output.addEventListener("click", function () {
        $(output).toggleClass("output-line");
        console.log("Successful Line-through");
    });
});