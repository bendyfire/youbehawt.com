
var img1 = document.getElementById("clickButton");

var memes = new Array("<img src='memes/meme1.jpg'>",
"<img src='memes/meme2.jpg'>", 
"<img src='memes/meme3.jpg'>", 
"<img src='memes/meme4.jpg'>", 
"<img src='memes/meme5.jpg'>",
"<img src='memes/meme6.jpg'>",
"<img src='memes/meme7.jpg'>",
"<img src='memes/meme8.jpg'>",
"<img src='memes/meme9.gif'>",
"<img src='memes/meme10.jpg'>",
"<img src='memes/meme11.jpg'>",
"<img src='memes/meme12.jpg'>",
"<img src='memes/meme13.jpg'>",
"<img src='memes/meme14.jpg'>",
"<img src='memes/meme15.jpg'>",
"<img src='memes/meme16.jpg'>",
"<img src='memes/meme17.jpg'>",
"<img src='memes/meme18.jpg'>",
"<img src='memes/meme19.jpg'>",
"<img src='memes/meme20.jpg'>",
"<img src='memes/meme21.jpg'>",
"<img src='memes/meme22.jpg'>",
"<img src='memes/meme23.jpg'>",
"<img src='memes/meme24.jpg'>",
"<img src='memes/meme25.jpg'>",
"<img src='memes/meme26.jpg'>",
"<img src='memes/meme27.jpg'>",
"<img src='memes/meme28.jpg'>",
"<img src='memes/meme29.jpg'>",
"<img src='memes/meme30.jpg'>");



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


