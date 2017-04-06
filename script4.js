
var img1 = document.getElementById("clickButton");

var memes = new Array();



img1.addEventListener("mousedown", function buttonClick() {
	img1.src = "button1.png";
	document.getElementById("camsux").innerHTML = randomLine(memes);
});

img1.addEventListener("mouseup", function buttonClick() {
	img1.src = "button2.png";
});

function randomLine(lines) {
	var r = Math.random();
	r = r * memes.length;
	r = Math.floor(r);
	var line = lines[r];
	return line;
}
