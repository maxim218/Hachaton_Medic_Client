"use strict";

export default function exitFunc() {
    document.querySelector(".menu-page__exit-button").onclick = function () {
        localStorage.clear();
        window.location = "/";
    }
}
