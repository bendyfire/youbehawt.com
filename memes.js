
var img1 = document.getElementById("clickButton");

var memes = new Array("<img src='memes/meme1.jpg'>",
"<img src='memes/meme2.jpg'>", 
"<img src='memes/meme3.jpg'>", 
"<img src='memes/meme5.jpg'>", 
"<img src='memes/meme1.jpg'>",
"<img src='memes/meme1.jpg'>",
"<img src='memes/meme1.jpg'>",
"<img src='memes/meme1.jpg'>",
"<img src='memes/meme1.jpg'>",
"<img src='memes/meme1.jpg'>",
"<img src='memes/meme1.jpg'>",
"<img src='memes/meme1.jpg'>",
"<img src='memes/meme1.jpg'>",
"<img src='memes/meme1.jpg'>",
"<img src='memes/meme1.jpg'>",
"<img src='memes/meme1.jpg'>",
"<img src='memes/meme1.jpg'>",
"<img src='memes/meme1.jpg'>",
"<img src='memes/meme1.jpg'>",
"<img src='memes/meme1.jpg'>",
"<img src='memes/meme1.jpg'>",
"<img src='memes/meme1.jpg'>",
"<img src='memes/meme1.jpg'>",
"<img src='memes/meme1.jpg'>",
"<img src='memes/meme1.jpg'>",
"<img src='memes/meme1.jpg'>",
"<img src='memes/meme1.jpg'>",
"<img src='memes/meme1.jpg'>",
"<img src='memes/meme1.jpg'>");



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


