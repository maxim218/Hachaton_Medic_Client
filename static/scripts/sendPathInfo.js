"use strict";

import generateSendDataMessageControl from "./generateSendDataMessageControl";
import dialogShow from "./dialogShow";
import Log from "./Log";
import sendPost from "./PostSender";
import fieldsClean from "./fieldsClean";

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
            const obj = {
              c1: user,
              c2: info,
              c3: "XXYYZZ",
              user: localStorage.getItem("LOGIN_X"),
            };

            sendPost("adding_record", obj, (result) => {
                console.log(result);
                if(result === "ADD_RECORD_OK") {
                    dialogShow("<p>Запись о пациенте успешно добавлена.</p>", function() {
                        // close window
                        fieldsClean();
                    });
                }
            }, "http://server-back-123.herokuapp.com/");
        }
    }
}