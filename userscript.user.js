// ==UserScript==
// @name         Google Developers Docs Stylesheets
// @namespace    https://github.com/ochen1/google-developers-docs-stylesheets/
// @version      1.0
// @description  Userstyles for Google Developers Documentation
// @author       ochen1
// @match        https://developers.google.com/resources/api-libraries/documentation/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    document.head.insertAdjacentHTML("beforeend", '<link rel="stylesheet" href="//fonts.googleapis.com/css?family=Google+Sans:400,500|Roboto:400,400italic,500,500italic,700,700italic|Roboto+Mono:400,500,700|Material+Icons">');
    document.head.insertAdjacentHTML("beforeend", '<link rel="stylesheet" href="https://www.gstatic.com/devrel-devsite/prod/v7cbba9dce83f2a54b727914bb06dd524b80e611a7d1fe33e121163235013f003/developers/css/app.css">');
    document.head.insertAdjacentHTML("beforeend", '<style>html body{display:table;width:75vw;margin:0 auto;padding-bottom:5em}h1{font:400 32px/40px Google Sans,Noto Sans,Noto Sans JP,Noto Sans KR,Noto Naskh Arabic,Noto Sans Thai,Noto Sans Hebrew,Noto Sans Bengali,sans-serif!important}h2{font:400 24px/32px Google Sans,Noto Sans,Noto Sans JP,Noto Sans KR,Noto Naskh Arabic,Noto Sans Thai,Noto Sans Hebrew,Noto Sans Bengali,sans-serif!important}h3{font:400 20px/28px Google Sans,Noto Sans,Noto Sans JP,Noto Sans KR,Noto Naskh Arabic,Noto Sans Thai,Noto Sans Hebrew,Noto Sans Bengali,sans-serif!important}</style>');

})();
