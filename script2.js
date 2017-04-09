
var img1 = document.getElementById("clickButton");



img1.addEventListener("mousedown", function buttonClick() {
	img1.src = "button1.png";
});

img1.addEventListener("mouseup", function buttonClick() {
	img1.src = "button2.png";
	alert("congrats on wasting your time!");
});
