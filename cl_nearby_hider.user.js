// ==UserScript==
// @name            Craigslist "Nearby" hider
// @namespace       cl_nearby_hider
// @include         http://*.craigslist.org/search/sss?*
// @version         1.0
// @description     This script hides the "Nearby" section of Craigslist results and provides a toggle.
// @copyright       2013+, Nikola Kantar, nkantar.com
// @require         http://code.jquery.com/jquery-latest.js
// ==/UserScript==

// change the "Nearby results" label
$("h4").children("span").html("Click <a id='nearby_toggle' href='#'>here</a> to display/hide nearby postings.");

// initial toggling
nearby_toggle();

// toggle switch
$("#nearby_toggle").click(function() {
    nearby_toggle();
});

// toggle function
function nearby_toggle() {
    $("h4").nextAll().toggle();
}
