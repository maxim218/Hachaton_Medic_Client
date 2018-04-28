"use strict";

import sendPost from "./PostSender";
import Log from "./Log";


function htmlentities(s){
    s = s + "";
    let div = document.createElement('div');
    let text = document.createTextNode(s);
    div.appendChild(text);
    return div.innerHTML;
}


export default function sendGettingRecords() {
    document.querySelector(".menu-page__get-records-btn").onclick = function() {
        const login = localStorage.getItem("LOGIN_X");

        sendPost("get_records_of_user", {
            userName: login
        }, (result) => {
            Log(result);
            const arr = JSON.parse(result);

            arr.forEach((element) => {
                const pacient = htmlentities(element.record_header);
                const content = htmlentities(element.record_body);
                const doctor = htmlentities(element.author);
            });

        }, "http://server-back-123.herokuapp.com/");
    }
}
