"use strict";

import Log from "./Log";
import makeJQueryElements from "./makeJQueryElements";
import PagesHider from "./PagesHider";
import LoginSignupMoving from "./LoginSignupMoving";
import registrationFunc from "./registrationFunc";
import authFunc from "./authFunc";

class Start {
    constructor() {
        Log("create Start");
        makeJQueryElements();
        PagesHider();
        LoginSignupMoving();
        registrationFunc();
        authFunc();
        document.querySelector('.main-center-box__log-in-box').hidden = false;
        document.querySelector('.main-center-box').hidden = false;
    }
}

window.onload = function() {
    new Start();
};
