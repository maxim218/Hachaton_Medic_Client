"use strict";

import PagesHider from "./PagesHider";
import Log from "./Log";

export default function LoginSignupMoving() {
    const x1 = document.querySelector(".sign-up-box__log-in-page-label");
    const x2 = document.querySelector(".log-in-box__sign-up-page-label");

    x1.onclick = function() {
        PagesHider();
        Log("Show page");
        document.querySelector(".main-center-box__log-in-box").hidden = false;
    };

    x2.onclick = function() {
        PagesHider();
        Log("Show page");
        document.querySelector(".main-center-box__sign-up-box").hidden = false;
    };
}