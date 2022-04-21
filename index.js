
function randomDice() {

    var randomNumber1 = Math.floor((Math.random() * 6) + 1);
    document.querySelector(".img1").setAttribute("src", "images/dice" + randomNumber1 + ".png");

    var randomNumber2 = Math.floor((Math.random() * 6) + 1);
    document.querySelector(".img2").setAttribute("src", "images/dice" + randomNumber2 + ".png");


    if (randomNumber1 === randomNumber2) {
        document.querySelector("h1").innerHTML = "Draw! Refresh to play again!";
    }

    else if (randomNumber1 > randomNumber2){
        document.querySelector("h1").innerHTML = "Player 1 Wins! Refresh to play again!";
    }

    else if (randomNumber2 > randomNumber1) {
        document.querySelector("h1").innerHTML = "Player 2 Wins! Refresh to play again!";
    }
    
    setTimeout(function(){
      document.querySelector("h1").innerHTML = "Refresh page to play again!"
    }, 1500);

}

randomDice();
