
var img1 = document.getElementById("clickButton");

var memes = new Array("");



img1.addEventListener("mousedown", function buttonClick() {
	img1.src = "button1.png";

});

img1.addEventListener("mouseup", function buttonClick() {
	img1.src = "button2.png";
																																																										alert ("You thought you was goona get memes, but you'll never get me memes!");
			document.getElementById("camsux").innerHTML = randomLine(memes);

});

function randomLine(lines) {
	var r = Math.random();
	r = r * memes.length;
	r = Math.floor(r);
	var line = lines[r];
	return line;
}


