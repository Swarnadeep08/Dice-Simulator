var player1 = Math.floor(Math.random()*6) + 1;
var player2 = Math.floor(Math.random()*6) + 1;

switch(player1){
  case 1:
    document.querySelector(".img1").setAttribute("src", "images/Terning1.svg");
    break;
  case 2:
    document.querySelector(".img1").setAttribute("src", "images/Terning2.svg");
    break;
  case 3:
    document.querySelector(".img1").setAttribute("src", "images/Terning3.svg");
    break;
  case 4:
    document.querySelector(".img1").setAttribute("src", "images/Terning4.svg");
    break;
  case 5:
    document.querySelector(".img1").setAttribute("src", "images/Terning5.svg");
    break;
  case 6:
    document.querySelector(".img1").setAttribute("src", "images/Terning6.svg");
    break;
}

switch(player2){
  case 1:
    document.querySelector(".img2").setAttribute("src", "images/Terning1.svg");
    break;
  case 2:
    document.querySelector(".img2").setAttribute("src", "images/Terning2.svg");
    break;
  case 3:
    document.querySelector(".img2").setAttribute("src", "images/Terning3.svg");
    break;
  case 4:
    document.querySelector(".img2").setAttribute("src", "images/Terning4.svg");
    break;
  case 5:
    document.querySelector(".img2").setAttribute("src", "images/Terning5.svg");
    break;
  case 6:
    document.querySelector(".img2").setAttribute("src", "images/Terning6.svg");
    break;
}

console.log("Player 1 score = " + player1);
console.log("Player 2 score = " + player2);

if(player1 > player2){
    console.log("Player 1 wins...");
    document.querySelector("h1").innerText = "Player 1 wins!";
}
else if(player2 > player1){
    console.log("Player 2 wins...");
    document.querySelector("h1").innerText = "Player 2 wins!";
}
else{
    console.log("Draw...");
    document.querySelector("h1").innerText = "It's a draw!";
}
