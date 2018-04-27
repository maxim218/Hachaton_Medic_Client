"use strict";

export default function dialogShow(contentText, callback) {
    document.querySelector(".dialog-window__content-label").innerHTML = contentText;
    document.querySelector(".dialog-window__ok-btn").onclick = function() {
        $(".dialog-window").dialog("close");
        callback();
    };
    $(".dialog-window").dialog("open");
}
