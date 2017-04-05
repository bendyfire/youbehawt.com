
var img1 = document.getElementById("clickButton");

var jokes = ["potatoes"];


img1.addEventListener("mousedown", function buttonClick() {
	img1.src = "button1.png";
	document.getElementById("camsux").innerHTML = randomLine(jokes);
});

img1.addEventListener("mouseup", function buttonClick() {
	img1.src = "button2.png";
});

function randomLine(lines) {
	var r = Math.random();
	r = r * jokes.length;
	r = Math.floor(r);
	var line = lines[r];
	return line;
}
