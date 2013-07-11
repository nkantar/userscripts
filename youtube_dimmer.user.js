// ==UserScript==
// @name       YouTube Dimmer
// @namespace  youtube_dimmer
// @include http://*.youtube.com/watch?v=*
// @version    1.0
// @description  This script dims the page of a YouTube video, while keeping the video bright. It also provides a switch.
// @copyright  2013+, Nikola Kantar, nkantar.com
// @require  http://code.jquery.com/jquery-2.0.3.min.js
// ==/UserScript==

// css to style the divs
var style = '<style type="text/css">\
#overlay { display: block; height: 100%; width: 100%; position: fixed; top: 0; left; 0; margin: 0; background: rgba(0,0,0,.9); overflow: hidden; z-index: 100; }\
#toggle { display: block; height: auto; width: 40px; position: fixed; top: 0; left: 0; margin: 0; padding: 5px; z-index: 300; cursor: pointer; text-align: center; background: silver; color: black;}\
</style>';

// toggle function
var script = '<script type="text/javascript">\
function toggle() {\
    if(document.getElementById("overlay").style.display == "block") {\
        document.getElementById("overlay").style.display = "none";\
		document.getElementById("toggle").innerHTML = "Dim";\
    } else {\
        document.getElementById("overlay").style.display = "block";\
		document.getElementById("toggle").innerHTML = "Undim";\
    }\
}\
</script>';

// overlay and toggle button divs
var overlay = '<div id="overlay" onclick="toggle()" style="display: block;"></div>';
var toggle = '<div id="toggle" onclick="toggle()">Undim</div>';

// move the player up above the rest of the page...
$("#movie_player").css("z-index", "200");
// ...add the css and JS...
$("head").append(style + script);
// ...and finally the two divs
$("body").append(overlay + toggle);