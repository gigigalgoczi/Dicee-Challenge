var randomNumber1 = Math.floor(Math.random()*6+1);
var randomDice1 = "dice" + randomNumber1 + ".png";
document.querySelector(".img1").src = "images\\" + randomDice1;

var randomNumber2 = Math.floor(Math.random()*6+1);
var randomDice2 = "dice" + randomNumber2 + ".png";
document.querySelector(".img2").src = "images\\" + randomDice2;

if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "🚩 Player 1 Wins!";
  document.querySelector("h1").style.fontSize = "5rem";
} else if (randomNumber2 > randomNumber1) {
  document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
  document.querySelector("h1").style.fontSize = "5rem";
} else {
  document.querySelector("h1").innerHTML = "Draw";
}
