"use strict";

export default function PagesHider() {
   const arr = [
       ".main-center-box__sign-up-box",
       ".main-center-box__log-in-box",
   ];

   arr.forEach((x) => {
       const element = document.querySelector(x.toString());
       element.hidden = true;
   });
}