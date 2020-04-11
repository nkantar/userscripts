// ==UserScript==
// @name       YouTube Dimmer
// @namespace  youtube_dimmer
// @include http://*.youtube.com/watch?v=*
// @version    1.2
// @description  Dims the page of a YouTube video, while keeping the video bright. It also provides a toggle.
// @copyright  2013+, Nikola Kantar, nkantar.com
// @require http://code.jquery.com/jquery-latest.js
// ==/UserScript==


////////////
// player //

document.getElementById("movie_player").style.zIndex = "200";
$("#player").attr("class", "watch-playlist-collapsed watch-medium");
// document.getElementById("player").className += " watch-playlist-collapsed"; // TODO: uncomment when resizing is resolved
// document.getElementById("player").className += " watch-large"; // TODO: fix


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
