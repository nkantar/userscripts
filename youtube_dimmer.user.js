// ==UserScript==
// @name       YouTube Dimmer
// @namespace  youtube_dimmer
// @include http://*.youtube.com/watch?v=*
// @version    1.1
// @description  This script dims the page of a YouTube video, while keeping the video bright. It also provides a switch.
// @copyright  2013+, Nikola Kantar, nkantar.com
// ==/UserScript==


////////////
// player //

document.getElementById("movie_player").style.zIndex = "200";
document.getElementById("player").className += " watch-playlist-collapsed";
//document.getElementById("player").className += " watch-medium"; // TODO: fix


/////////
// CSS //

var css = '#overlay { display: block; height: 100%; width: 100%; position: fixed; top: 0; left; 0; margin: 0; background: rgba(0,0,0,.9); overflow: hidden; z-index: 100; }\
#toggle { display: block; height: auto; width: 40px; position: fixed; top: 0; left: 0; margin: 0; padding: 5px; z-index: 300; cursor: pointer; text-align: center; background: silver; color: black;}';
var style = document.createElement("style");
style.type = "text/css";
style.appendChild(document.createTextNode(css));
document.getElementsByTagName("head")[0].appendChild(style);


/////////////
// overlay //

var div = document.createElement("div");
div.id = "overlay";
div.style.display = "block";
div.onclick = function toggle() {
    if(document.getElementById("overlay").style.display == "block") {
        document.getElementById("overlay").style.display = "none";
		document.getElementById("toggle").innerHTML = "Dim";
    } else {
        document.getElementById("overlay").style.display = "block";
		document.getElementById("toggle").innerHTML = "Undim";
    }
};
document.body.appendChild(div);


////////////
// toggle //

var toggle = document.createElement("div");
toggle.id = "toggle";
toggle.onclick = function toggle() {
    if(document.getElementById("overlay").style.display == "block") {
        document.getElementById("overlay").style.display = "none";
		document.getElementById("toggle").innerHTML = "Dim";
    } else {
        document.getElementById("overlay").style.display = "block";
		document.getElementById("toggle").innerHTML = "Undim";
    }
};
toggle.innerHTML = "Undim";
document.body.appendChild(toggle);