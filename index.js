
let randomNumber1 = Math.floor(Math.random() * 6) + 1; 
let randomNumber2 = Math.floor(Math.random() * 6) + 1;
let randomImageSource1 = "images/dice" + randomNumber1 + ".png"; 
let randomImageSource2 = "images/dice" + randomNumber2 + ".png";

let image = document.querySelectorAll("img");

image[0].setAttribute("src", randomImageSource1);
image[1].setAttribute("src", randomImageSource2);

if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = " Play 1 Wins!";
}
else if (randomNumber2 > randomNumber1) {
  document.querySelector("h1").innerHTML = "Player 2 Wins! ";
}
else {
  document.querySelector("h1").innerHTML = "Draw!";
}
