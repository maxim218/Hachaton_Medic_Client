"use strict";

import Log from "./Log";

export default function sendGetQuery(operation, callback, urlParam) {
    const url = urlParam + operation;
    Log("Url: " + url);
    console.log("--------------------------------------");
    console.log("Method: GET");
    console.log("Url: " + url);
    let r = new XMLHttpRequest();
    r.open("GET", url, true);
    r.setRequestHeader("Content-Type","text/plain;charset=UTF-8");
    r.send(null);
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
