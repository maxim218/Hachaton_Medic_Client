"use strict";

export default function fieldsClean () {
    const arr = [
        ".sign-up-box__login-field",
        ".sign-up-box__password-field",
        ".log-in-box__login-field",
        ".log-in-box__password-field",
        ".menu-page__user-name-field",
        ".menu-page__user-record-field",
        ".menu-page__user-nickname-for-getting",
    ];

    arr.forEach((x) => {
        document.querySelector(x).value = "";
    });
}

