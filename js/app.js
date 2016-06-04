// Audio Player
var waterfall = document.getElementById("waterfall-audio");
function playWaterfall() {
    waterfall.play();
    rain.pause();
    birds.pause();
    wind.pause();
    console.log("Playing Waterfall");
}

var rain = document.getElementById("rain-audio");
function playRain() {
    rain.play();
    waterfall.pause();
    birds.pause();
    wind.pause();

}


var birds = document.getElementById("birds-audio");
function playBirds() {
    birds.play();
    waterfall.pause();
    rain.pause();
    wind.pause();

}


var wind = document.getElementById("wind-audio");
function playWind() {
    wind.play();
    rain.pause();
    birds.pause();
    waterfall.pause();
}


function pauseSounds() {
  waterfall.pause();
  birds.pause();
  rain.pause();
  wind.pause();
}



// Modal Alert
var ALERT_TITLE = "Hello :)";
var ALERT_BUTTON_TEXT = "Close";

if(document.getElementById) {
	window.alert = function(txt) {
		createCustomAlert(txt);
	}
}

function createCustomAlert(txt) {
	d = document;

	if(d.getElementById("modalContainer")) return;

	mObj = d.getElementsByTagName("body")[0].appendChild(d.createElement("div"));
	mObj.id = "modalContainer";
	mObj.style.height = d.documentElement.scrollHeight + "px";

	alertObj = mObj.appendChild(d.createElement("div"));
	alertObj.id = "alertBox";
	if(d.all && !window.opera) alertObj.style.top = document.documentElement.scrollTop + "px";
	alertObj.style.left = (d.documentElement.scrollWidth - alertObj.offsetWidth)/2 + "px";
	alertObj.style.visiblity="visible";

	h1 = alertObj.appendChild(d.createElement("h1"));
	h1.appendChild(d.createTextNode(ALERT_TITLE));

	msg = alertObj.appendChild(d.createElement("p"));
	//msg.appendChild(d.createTextNode(txt));
	msg.innerHTML = txt;

	btn = alertObj.appendChild(d.createElement("a"));
	btn.id = "closeBtn";
	btn.appendChild(d.createTextNode(ALERT_BUTTON_TEXT));
	btn.href = "#";
	btn.focus();
	btn.onclick = function() { removeCustomAlert();return false; }

	alertObj.style.display = "block";

}

function removeCustomAlert() {
	document.getElementsByTagName("body")[0].removeChild(document.getElementById("modalContainer"));
}
function ful(){
alert('Alert this pages');
}
