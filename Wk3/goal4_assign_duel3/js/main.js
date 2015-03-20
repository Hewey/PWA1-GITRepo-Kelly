/*
	Name: Patrick Kelly
	Date: March 20,2015
	Class & Section: PWA1-01
*/

//alert("Sup Bruh!");

var playerOne = {Name:"Mario", Health:100, Damage:20}; //An object that stores the name, health, and damage of player one

var playerTwo = {Name:"Sonic", Health:100, Damage:20}; //An object that stores the name, health, and damage of player two

var players = [playerOne, playerTwo]; //An array that stores the players

var roundNumber = 0; //stores a value of 0 for the current round number that will be increased later

document.getElementById("kabal").innerHTML = playerOne.Name + ": " + playerOne.Health; //A method that selects a part of the DOM that edits the html with the name and health of player one

document.getElementById("kratos").innerHTML = playerTwo.Name + ": " + playerTwo.Health; //A method that selects a part of the DOM that edits the html with the name and health of player two

document.getElementById("fight_btn").onclick = function fight(){ // A method that selects part of the DOM that when clicked calls a function

	var minDamageOne = playerOne.Damage * .5; //Variable that calculates the minimum damage possible for player one 
	var minDamageTwo = playerTwo.Damage * .5; //Variable that calculates the minimum damage possible for player two
	var damageDoneOne = Math.floor(Math.random()*(playerOne.Damage-minDamageOne)+minDamageOne); // Variable that randomly calculates the damage based on the max and minimum damage possible for player one
	var damageDoneTwo = Math.floor(Math.random()*(playerTwo.Damage-minDamageTwo)+minDamageTwo); // Variable that randomly calculates the damage based on the max and minimum damage possible for player two

	playerOne.Health-=damageDoneTwo; //Applies the damage done by player two to player one
	playerTwo.Health-=damageDoneOne; //Applies the damage done by player one to player two

	console.log(playerOne.Name + ": " + playerOne.Health + " *ROUND " + roundNumber + " OVER* " + playerTwo.Name + ": " + playerTwo.Health); //Displays the results of the rounds in the console

	var results = winnerCheck(); //Runs the winnerCheck function and stores the results in a variable
		
	if(results === "No one won."){//A conditional to check to see if the fight is over or not
		roundNumber++; //Increases the number of the rounds
		document.getElementById("kabal").innerHTML = playerOne.Name + ": " + playerOne.Health; //A method that selects part of the DOM and edits the html with the health of the player after the round is over if the fight is not over
		document.getElementById("kratos").innerHTML = playerTwo.Name + ": " + playerTwo.Health; //A method that selects part of the DOM and edits the html with the health of the player after the round is over if the fight is not over
		document.getElementById("round").innerHTML = "Round " + roundNumber + " is over. Click to start the next round!" //A method selects part of the DOM and edits the html with the round number that was just completed and is instructs the user how to comtinue if the fight is not over

	} else { //If the above in not true it runs the code below
		document.getElementById("kabal").innerHTML = results; // A method that displays the results of the fight if the fight is over
		document.getElementById("kratos").innerHTML = results; // A method that displays the results of the fight if the fight is over
		document.getElementById("round").innerHTML = results; // A method that displays the results of the fight if the fight is over
		document.getElementById("fight_btn").onclick = null; // A method that displays the results of the fight if the fight is over
	};
		
};

function winnerCheck(){//Declares a function that will run a check to see if someone has won the fight yet
	var result = "No one won.";//Creates a variable to store who the winner is

	if(playerOne.Health<1 && playerTwo.Health<1){//Starts a condition to checkk who the winner is
		result = "You both died!";//Changes the result if both players died
	} else if(playerOne.Health<1){//If the above isnt true it runs this check to see if player one is defeated
		result = playerTwo.Name + " WINS!";//If player one is defeated sets the result to player two
	} else if(playerTwo.Health<1){//Checks to see if player two is defeated 
		result = playerOne.Name + " WINS!";//If player two is defeated sets the winner to player one
	};	
	return result;//Returns the result to where the function and stores in the results variable
};
