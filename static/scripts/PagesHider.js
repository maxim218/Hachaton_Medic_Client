"use strict";

import fieldsClean from "./fieldsClean";

export default function PagesHider() {
   const arr = [
       ".main-center-box__sign-up-box",
       ".main-center-box__log-in-box",
       ".main-center-box__menu-page",
   ];

   $(".dialog-window").dialog("close");

   fieldsClean();

   arr.forEach((x) => {
       const element = document.querySelector(x.toString());
       element.hidden = true;
   });
}