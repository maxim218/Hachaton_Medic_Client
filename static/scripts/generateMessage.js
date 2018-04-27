"use strict";

import ContentStringWatcher from "./ContentStringWatcher";

export default function generateMessage(login, password) {
    const messages = [];

    if(login.length === 0) {
        messages.push("Поле ввода логина пусто.");
    }

    if(new ContentStringWatcher(login).normalString() === false) {
        messages.push("Поле ввода логина содержит запретные символы.")
    }

    if(password.length === 0) {
        messages.push("Поле ввода пароля пусто.");
    }

    if(new ContentStringWatcher(password).normalString() === false) {
        messages.push("Поле ввода пароля содержит запретные символы.");
    }

    for(let i = 0; i < messages.length; i++) {
        messages[i] = "<p>" + messages[i] + "</p>";
    }

    if(messages.length === 0) {
        return "OK";
    }

    return messages.join("");
}