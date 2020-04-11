// ==UserScript==
// @name         Google Calendar Reminders/Tasks Hider
// @namespace    https://nkantar.com/
// @version      0.1
// @description  Hides the "Reminders" and "Tasks" calendars from the "My calendars" list in Google Calendar
// @author       Nik Kantar
// @include      https://calendar.google.com/*
// @grant        none
// @run-at       document-idle
// ==/UserScript==

;(function() {
  document.querySelector("div[data-text='Tasks']").parentNode.parentNode.parentNode.parentNode.style.height = "128px";
  document.querySelector("div[data-text='Tasks']").parentNode.parentNode.parentNode.remove();
  document.querySelector("div[data-text='Reminders']").parentNode.parentNode.parentNode.remove();
  document.querySelector("div[data-text='Virtual Hangs']").parentNode.parentNode.parentNode.style.transform = "translateY(96px)";
})()
