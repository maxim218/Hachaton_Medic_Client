"use strict";

import sendPost from "./PostSender";
import Log from "./Log";
import sendGetQuery from "./sendGetQuery";


function htmlentities(s){
    s = s + "";
    let div = document.createElement('div');
    let text = document.createTextNode(s);
    div.appendChild(text);
    return div.innerHTML;
}


export default function sendGettingRecords() {
    document.querySelector(".menu-page__get-records-btn").onclick = function() {
        document.querySelector(".menu-page__records-patient-rec").innerHTML = "";

        sendGetQuery("History", (result) => {
            Log(result);
            const arr = JSON.parse(result);
            const patientMian = document.querySelector(".menu-page__user-nickname-for-getting").value;
            let ans = "";

            document.querySelector(".menu-page__records-patient-rec").innerHTML = "";

            let flag = false;

            arr.forEach((element) => {
                if(element.patient_id === patientMian) {
                    const record = htmlentities(element.record);
                    const doctor = htmlentities(element.doctor_id);
                    const patient = htmlentities(element.patient_id);
                    const s1 = "<b>Врач: </b>" + doctor + "<br>";
                    const s2 = "<b>Пациент: </b>" + patient + "<br>";
                    const s3 = "<b>Запись: </b>" + record + "<br>";
                    const s = "<div class = 'record-class'>" + s1 + s2 + s3 + "</div>" + "<br>";
                    ans += s;
                    flag = true;
                }
            });

            if(flag === true) {
                document.querySelector(".menu-page__records-patient-rec").innerHTML = "<h3>" + "Записи пациента " + patientMian + "</h3>" + ans;
            } else {
                document.querySelector(".menu-page__records-patient-rec").innerHTML = "<h3>" + "Записи пациента " + patientMian + "</h3>" + "<p>Пусто</p>";
            }

        }, "http://188.225.34.176:3000/api/");
    }
}
