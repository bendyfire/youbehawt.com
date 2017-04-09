
var img1 = document.getElementById("clickButton");

var memes = new Array("<img src='meme1.jpg'>",
"<img src='meme2.jpg'>", 
"<img src='meme3.jpg'>", 
"<img src='meme5.jpg'>", 
"<img src='meme1.jpg'>",
"<img src='meme1.jpg'>",
"<img src='meme1.jpg'>",
"<img src='meme1.jpg'>",
"<img src='meme1.jpg'>",
"<img src='meme1.jpg'>",
"<img src='meme1.jpg'>",
"<img src='meme1.jpg'>",
"<img src='meme1.jpg'>",
"<img src='meme1.jpg'>",
"<img src='meme1.jpg'>",
"<img src='meme1.jpg'>",
"<img src='meme1.jpg'>",
"<img src='meme1.jpg'>",
"<img src='meme1.jpg'>",
"<img src='meme1.jpg'>",
"<img src='meme1.jpg'>",
"<img src='meme1.jpg'>",
"<img src='meme1.jpg'>",
"<img src='meme1.jpg'>",
"<img src='meme1.jpg'>",
"<img src='meme1.jpg'>",
"<img src='meme1.jpg'>",
"<img src='meme1.jpg'>",
"<img src='meme1.jpg'>");



img1.addEventListener("mousedown", function buttonClick() {
	img1.src = "button1.png";

});

img1.addEventListener("mouseup", function buttonClick() {
	img1.src = "button2.png";
			document.getElementById("camsux").innerHTML = randomLine(memes);

});

function randomLine(lines) {
	var r = Math.random();
	r = r * memes.length;
	r = Math.floor(r);
	var line = lines[r];
	return line;
}


