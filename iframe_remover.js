// ==UserScript==
// @name         IFrame Remover
// @namespace    nobody
// @version      0.1
// @match        http://*/*
// @match        https://*/*
// @grant        GM_log
// ==/UserScript==

(function() {
    GM_log('Welcome to IFrame Remover!');
    setInterval(function() {
        for (const frame of document.querySelectorAll('iframe')) {
            frame.remove();
        }
    }, 5 * 1000);
})();
