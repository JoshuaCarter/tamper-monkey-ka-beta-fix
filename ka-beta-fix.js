// ==UserScript==
// @name         Kiss Anime Beta Server Fix
// @namespace    Khada
// @version      0.1
// @description  Auto add "&pfail=1" to KA vid urls ending in "&s=beta" or "&s=default".
// @author       khadakuraki@gmail.com
// @match        http://*kissanime.ru/*&s=beta
// @match        http://*kissanime.ru/*&s=default
// @exclude      http://*kissanime.ru/*&pfail=1
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    //reload page with same url + "&pfail=1"
    window.location.replace(window.location.href + "&pfail=1");
})();