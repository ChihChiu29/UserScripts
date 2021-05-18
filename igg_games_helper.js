// ==UserScript==
// @name         IGG Games Helper
// @namespace    nobody
// @version      0.1
// @match        http://bluemediafiles.com/*
// @match        https://mega.nz/*
// @grant        GM_log
// ==/UserScript==

(function() {
    GM_log('Welcome to IGG Games Helper!');
    function runUntil(fn, intervalSec, untilSec) {
        const intervalId = setInterval(fn, intervalSec * 1000);
        setTimeout(function() {
            clearInterval(intervalId);
        }, untilSec * 1000);
    }

    if (window.location.hostname === 'bluemediafiles.com') {
        runUntil(function() {
            // const adsRight = document.querySelector('#ads-right');
            // const button = adsRight.nextElementSibling;
            // if (button && button.tagName === 'DIV') {
            //    GM_log('Goodbye redirect page!');
            //    document.querySelector('form').submit();
            //}
            const button = document.querySelector('#nut');
            if (button) {
                GM_log('Goodbye redirect page!');
                button.click();
            }
        }, 15 /*Clicking too soon will go back*/, 60);
    } else if (window.location.hostname === 'mega.nz') {
        runUntil(function() {
            const button = document.querySelector('.download-file');
            if (button) {
                GM_log('Start download!');
                button.click();
            }
        }, 5, 30);
    }
})();
