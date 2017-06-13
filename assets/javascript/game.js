

$(document).ready(function() {

var hasFirstPlayerBeenSet = false;
var hasSecondPlayerBeenSet = false;

	var Jordan = {
	    name: "Michael Jordan",
	    offense:700,
	    defense:650,
	    clutch: 680,
	    health: 100,
	    pic: "assets/images/michael-jordan.png"
	}

	var James = {
	    name: "Lebron James",
	    offense:650,
	    defense:620,
	    clutch: 610,
	    health: 100,
	    pic: "assets/images/lebron-james.png"
	}

	var Durant = {
	    name: "Kevin Durant",
	    offense:630,
	    defense:600,
	    clutch: 630,
	    health: 100,
	    pic: "assets/images/kevin-durant.png"
	}


	var Bryant = {
	    name: "Kobe Bryant",
	    offense:670,
	    defense:620,
	    clutch:640,
	    health: 100,
	    pic: "assets/images/kobe-bryant.png"
	}


	function play(){
       var audio = document.getElementById("audio");
       audio.play();
                 }


////////////////////////////////////////////////////////////////////////
/////////GETS IMAGE SOURCE TO DISPLAY TO DIFFERENT CLASS ///////////////
////////////////////////////////////////////////////////////////////////

		$(".image").on("click", function(event) {

			play();

		   if ($('#appendToImage2').contents().length !== 0) {
		   	return true;
		   }
	       		 var url = $(event.target).attr('src');

	       if ($('#appendToImage1').contents().length === 0){

	       		 $(this).detach().appendTo("#appendToImage1");

	       		 $(".header").text("Select your Opponent");

	       		 	play();

	    			checkPlayer(url);
	       		 	
	       } else {

	       		 $(this).detach().appendTo("#appendToImage2");

	       		 checkPlayer(url);
	       		
	       }

		});

////////////////////////////////////////////////////////////////////////
/////////CHECKS PLAYER IMAGES AND DISPLAYS CORRECT STATS ////////////////
////////////////////////////////////////////////////////////////////////

		function checkPlayer(url) {
			var name;
			var offense;
			var defense;
			var clutch;
			var health;

				if (url === Jordan.pic) {

					name = "Michael Jordan";
					offense = Jordan.offense;
		    		defense = Jordan.defense;
		    		clutch = Jordan.clutch;
		    		health = Jordan.health;

	       		} else if (url === Bryant.pic) {

	       			name = "Kobe Bryant";
	       			offense = Bryant.offense;
		    		defense = Bryant.defense;
		    		clutch = Bryant.clutch;
		    		health = Jordan.health;

	       		} else if (url === Durant.pic) {

	       			name = "Kevin Durant";
	       			offense = Durant.offense;
		    		defense = Durant.defense;
		    		clutch = Durant.clutch;
		    		health = Jordan.health;

	       		} else if (url === James.pic) {

	       			name = "Lebron James";
	       			offense = James.offense;
		    		defense = James.defense;
		    		clutch = James.clutch;
		    		health = Jordan.health;
	       		} 

			if (hasFirstPlayerBeenSet === false ) {
				setFirstPlayer();
				hasFirstPlayerBeenSet = true;
			} else {
				setSecondPlayer();
			}

			var activeOpponent1 = {
				playeName: "player",
				playerOffense: 0,
				playerDefense: 0,
				playerClutch: 0,
				playerHealth: 0
			}

			var activeOpponent2 = {
				playerName: "player",
				playerOffense: 0,
				playerDefense: 0,
				playerClutch: 0,
				playerHealth: 0
			}

			function setFirstPlayer() {

		       	$(".offense").text( name + " Offense: " + offense);
		       	activeOpponent1. = playerOffense;
	       		$(".defense").text( name + " Defense: " + defense);
	       		activeOpponent1.defense = playerDefense;
	       		$(".clutch").text( name + " Clutch: " + clutch);
	       		activeOpponent1.clutch = playerClutch;
	       		$(".health1").text( name + " Health: " + health);
	       		activeOpponent1.health = playerHealth
	       		activeOpponent1.name = playerName;


	       		console.log("set first player is" + activeOpponent1.name);


			}

			function setSecondPlayer() {
		       	$(".offense1").text( name + " Offense: " + offense);
	       		$(".defense1").text( name + " Defense: " + defense);
	       		$(".clutch1").text( name + " Clutch: " + clutch);
	       		$(".health2").text( name + " Health: " + health);
			}

		}

//////////////////////////////////////////////////////////////////////////////
////CHECKS IMAGE CLICKED THEN BUTTON ATTACKS ACCORDING TO PLAYER STATS ///////
//////////////////////////////////////////////////////////////////////////////


		// $("button").click(function (event) {
			
		// 	var className = $(event.target).attr("class").split(" ")[2];

		// 	if (className === "offense-1") {

		// 			if (jordan.) {
		// 				console.log("hello");
		// 			}


		// 	}

		// });



});










