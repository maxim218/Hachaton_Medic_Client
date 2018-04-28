"use strict";

import Log from "./Log";
import makeJQueryElements from "./makeJQueryElements";
import PagesHider from "./PagesHider";
import LoginSignupMoving from "./LoginSignupMoving";
import registrationFunc from "./registrationFunc";
import authFunc from "./authFunc";
import fieldsClean from "./fieldsClean";
import exitFunc from "./exitFunc";
import AutoAuth from "./AutoAuth";

class Start {
    constructor() {
        Log("create Start");
        makeJQueryElements();
        PagesHider();
        LoginSignupMoving();
        registrationFunc();
        authFunc();
        fieldsClean();
        exitFunc();
        document.querySelector('.main-center-box__log-in-box').hidden = false;
        document.querySelector('.main-center-box').hidden = false;
        // auth in system
        AutoAuth();
    }
}

window.onload = function() {
    new Start();
};
