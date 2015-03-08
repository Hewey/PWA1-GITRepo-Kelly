/*
	Name: Patrick Kelly
	Date: March 7, 2015
	Class & Section: PWA1-01
*/

//alert("Sup Bruh!");

var playerOneName = "Mario"; //Stores the name of player one
var playerOneHealth = 100; //Stores a value of 100 for player one health
var playerOneDamage = 20; //Stores a value of 20 for player two health

var playerTwoName = "Sonic"; //Stores the name of player two
var playerTwoHealth = 100; //Stores a value of 100 for the health of player two
var playerTwoDamage = 20; //Stores a value of 20 for the maximum damage for player two 

var roundNumber = 0; //stores a value of 0 for the current round number that will be increased later


function fight(){ // A function that contains the code to do the fighting
	alert(playerOneName + ": " + playerOneHealth + " *Start!* " + playerTwoName + ": " + playerOneHealth); //An alert that starts the fight containing the names of the players and their current health
	for(var i = 0; i<10; i++){ // Loop that rolls the damage each round
		
		var minDamageOne = playerOneDamage * .5; //Variable that calculates the minimum damage possible for player one 
		var minDamageTwo = playerTwoDamage * .5; //Variable that calculates the minimum damage possible for player two
		var damageDoneOne = Math.floor(Math.random()*(playerOneDamage-minDamageOne)+minDamageOne); // Variable that randomly calculates the damage based on the max and minimum damage possible for player one
		var damageDoneTwo = Math.floor(Math.random()*(playerTwoDamage-minDamageTwo)+minDamageTwo); // Variable that randomly calculates the damage based on the max and minimum damage possible for player two

		playerOneHealth-=damageDoneTwo; //Applies the damage done by player two to player one
		playerTwoHealth-=damageDoneOne; //Applies the damage done by player one to player two

		console.log(playerOneName + ": " + playerOneHealth + " *ROUND " + roundNumber + " OVER* " + playerTwoName + ": " + playerTwoHealth); //Displays the results of the rounds in the console

		var results = winnerCheck(); //Runs the winnerCheck function and stores the results in a variable
		
		if(results === "No winner"){//A conditional to check to see if the fight is over or not
			roundNumber++; //Increases the number of the rounds
			alert(playerOneName + ": " + playerOneHealth + " *ROUND " + roundNumber + " OVER!*" + playerTwoName + ": " + playerTwoHealth);//Displays the results of the round if the fight is not over
		} else { //If the above in not true it runs the code below
			alert(results);//Displays that the fight is over to the user
			break;//leaves the loop
		};

	};
};

function winnerCheck(){//Declares a function that will run a check to see if someone has won the fight yet
	var result = "No one won.";//Creates a variable to store who the winner is

	if(playerOneHealth<1 && playerTwoHealth<1){//Starts a condition to checkk who the winner is
		result = "You both died!";//Changes the result if both players died
	} else if(playerOneHealth<1){//If the above isnt true it runs this check to see if player one is defeated
		result = playerTwoName + " WINS!";//If player one is defeated sets the result to player two
	} else if(playerTwoHealth<1){//Checks to see if player two is defeated 
		result = playerOneName + " WINS!";//If player two is defeated sets the winner to player one
	};	
	return result;//Returns the result to where the function and stores in the results variable
};

fight();//Calls the function