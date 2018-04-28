"use strict";

import sendPost from "./PostSender";
import dialogShow from "./dialogShow";
import Log from "./Log";
import PagesHider from "./PagesHider";

export default function AutoAuth() {
    if(localStorage.getItem("LOGIN_X") !== null && localStorage.getItem("PASSWORD_X") !== null) {
        const login = localStorage.getItem("LOGIN_X");
        const password = localStorage.getItem("PASSWORD_X");

        sendPost("authorization", {
            login: login,
            password: password
        }, (result) => {
            if(result === "AVTORIZ_YES") {
                // close window
                PagesHider();
                Log("Show page");
                localStorage.setItem("LOGIN_X", login);
                localStorage.setItem("PASSWORD_X", password);
                document.querySelector(".menu-page__login-label").innerHTML = "Пользователь " + localStorage.getItem("LOGIN_X");
                document.querySelector('.main-center-box__menu-page').hidden = false;
            }
        }, "http://server-back-123.herokuapp.com/");
    }
}