"use strict";

import Log from "./Log";

function generateRandomString() {
    let s = "";
    for(let i = 0; i < 10; i++) {
        const r = Math.random();
        s = s + r.toString();
    }
    let q = s.split(".").join("");
    return q.toString();
}

export default function sendPost(operation, bodyObj, callback, urlParam) {
    const url = urlParam + operation + "/" + generateRandomString();
    Log("Url: " + url);
    const bodyString = JSON.stringify(bodyObj);
    console.log("--------------------------------------");
    console.log("Method: POST");
    console.log("Url: " + url);
    console.log("Body: " + bodyString);
    let r = new XMLHttpRequest();
    r.open("POST", url, true);
    r.setRequestHeader("Content-Type","application/json;charset=UTF-8");
    r.send(bodyString);
    r.onreadystatechange = function()  {
        if(r.readyState === 4 && r.status === 200) {
            const result = r.responseText;
            console.log("Result: " + result);
            console.log("--------------------------------------");
            r = null;
            callback(result);
        }
    }
}
