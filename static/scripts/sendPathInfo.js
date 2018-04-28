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
            // noinspection JSAnnotator
            function generateRandomString() {
                let s = "";
                for(let i = 0; i < 10; i++) {
                    const r = Math.random();
                    s = s + r.toString();
                }
                let q = s.split(".").join("");
                return q.toString();
            }

            // ok ok ok
            const obj = {
                $class: "org.bcdoc.History",
                id: generateRandomString() + 'kk' + generateRandomString(),
                title: info,
                tag: [],
                record: info,
                created_at: new Date().toISOString(),
                updated_at: new Date().toISOString(),
                doctor_id: localStorage.getItem("LOGIN_X"),
                patient_id: user,
                  c1: user,
                  c2: info,
                  c3: "XXYYZZ",
                  tt_user: localStorage.getItem("LOGIN_X"),
            };

            sendPost("History", obj, (result) => {
                console.log(result);
                if(result !== null) {
                    dialogShow("<p>Запись о пациенте успешно добавлена.</p>", function() {
                        // close window
                        fieldsClean();
                    });
                }
            }, "http://188.225.34.176:3000/api/");
        }
    }
}