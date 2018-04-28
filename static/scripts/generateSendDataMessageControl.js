"use strict";

export default function generateSendDataMessageControl (user, info) {
    const messages = [];

    if(user.length === 0) {
        messages.push("Поле ввода пациента пусто.");
    }

    if(info.length === 0) {
        messages.push("Поле ввода записи пусто.");
    }

    for(let i = 0; i < messages.length; i++) {
        messages[i] = "<p>" + messages[i] + "</p>";
    }

    if(messages.length === 0) {
        return "OK";
    }

    return messages.join("");
}
