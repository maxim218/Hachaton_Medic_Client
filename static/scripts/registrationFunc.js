"use strict";

import ContentStringWatcher from "./ContentStringWatcher";
import generateMessage from "./generateMessage";
import dialogShow from "./dialogShow";
import sendPost from "./PostSender";
import Log from "./Log";
import PagesHider from "./PagesHider";

export default function registrationFunc() {
    const loginField = document.querySelector(".sign-up-box__login-field");
    const passwordField = document.querySelector(".sign-up-box__password-field");

    document.querySelector(".sign-up-box__sign-up-button").onclick = function() {
        const login = loginField.value;
        const password = passwordField.value;

        const content = generateMessage(login, password);

        if(content === "OK") {
            // ok
            sendPost("registration", {
                login: login,
                password: password
            }, (result) => {
                if(result === "REGISTRATION_NO") {
                    dialogShow("<p>Пользователь с таким логином уже зарегистрирован.</p>", function() {
                        // close window
                    });
                }

                if(result === "REGISTRATION_YES") {
                    dialogShow("<p>Регистрация прошла успешно.</p>", function() {
                        // close window
                        PagesHider();
                        Log("Show page");
                        document.querySelector(".main-center-box__log-in-box").hidden = false;

                        sendPost("Doctor", {
                            $class: "org.bcdoc.Doctor",
                            id: login,
                            firstName: login,
                            lastName: login,
                            speciality: login,
                            hospital: login
                        }, (result) => {
                            Log("-------------");
                            Log(result);
                            Log("-------------");
                        }, "http://188.225.34.176:3000/api/");
                    });
                }
            }, "http://server-back-123.herokuapp.com/");
        } else {
            // bad
            dialogShow(content, function() {
                // close window
            });
        }
    }
}