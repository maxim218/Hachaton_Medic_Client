"use strict";

import Log from "./Log";
import generateMessage from "./generateMessage";
import dialogShow from "./dialogShow";
import sendPost from "./PostSender";
import PagesHider from "./PagesHider";

export default function authFunc() {
    const loginField = document.querySelector(".log-in-box__login-field");
    const passwordField = document.querySelector(".log-in-box__password-field");

    document.querySelector(".log-in-box__log-in-button").onclick = function() {
        Log("Auth try");

        const login = loginField.value;
        const password = passwordField.value;

        const content = generateMessage(login, password);

        if(content === "OK") {
            // ok
            sendPost("authorization", {
                login: login,
                password: password
            }, (result) => {
                if(result === "AVTORIZ_YES") {
                    dialogShow("<p>Авторизация прошла успешно.</p>", function() {
                        // close window
                        PagesHider();
                        Log("Show page");
                        document.querySelector('.main-center-box__menu-page').hidden = false;
                    });
                }

                if(result === "AVTORIZ_NO") {
                    dialogShow("<p>Неверный логин или пароль.</p>", function() {
                        // close window
                    });
                }
            }, "http://server-back-123.herokuapp.com/");
        } else {
            //bad
            dialogShow(content, function() {
                // close window
            });
        }
    }
}
