"use strict";

export default function fieldsClean () {
    const arr = [
        ".sign-up-box__login-field",
        ".sign-up-box__password-field",
        ".log-in-box__login-field",
        ".log-in-box__password-field",
    ];

    arr.forEach((x) => {
        document.querySelector(x).value = "";
    });
}

