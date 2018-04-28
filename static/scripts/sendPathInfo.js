"use strict";

import generateSendDataMessageControl from "./generateSendDataMessageControl";
import dialogShow from "./dialogShow";
import Log from "./Log";

export default function sendPathInfo() {
    const t1 = document.querySelector(".menu-page__user-name-field");
    const t2 = document.querySelector(".menu-page__user-record-field");

    document.querySelector(".menu-page__send-button").onclick = function() {
        Log("Click");

        const user = t1.value;
        const info = t2.value;

        const content = generateSendDataMessageControl (user, info);

        if(content !== "OK") {
            dialogShow(content, function() {
                // close window
            });
        } else {
            // ok ok ok
        }
    }
}