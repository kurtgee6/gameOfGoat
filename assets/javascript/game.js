

$(document).ready(function() {

var currentUserOffense;
var currentUserdefense;
var currentUserClutch;
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
	    offense:650,
	    defense:620,
	    clutch:640,
	    health: 100,
	    pic: "assets/images/kobe-bryant.png"
	}

////////////////////////////////////////////////////////////////////////
/////////GET IMAGE SOURCE TO DISPLAY TO DIFFERENT CLASS ////////////////
////////////////////////////////////////////////////////////////////////

		$(".image").on("click", function(event) {

		   if ($('#appendToImage2').contents().length !== 0) {
		   	return true;
		   }
	       		 var url = $(event.target).attr('src');

	       if ($('#appendToImage1').contents().length === 0){

	       		 $(this).detach().appendTo("#appendToImage1");

	       		 $(".header").text("Select your Opponent");

	    			checkPlayer(url);
	       		 	
	       } else {

	       		 $(this).detach().appendTo("#appendToImage2");

	       		 checkPlayer(url);
	       		
	       }

		});


		$("button").click(function (event) {
			
			var className = $(event.target).attr("class").split(" ")[2];

			var currentUserOffense;
			var currentUserdefense;
			var currentUserClutch;

			if (className === "offense-1") {

					if (Jordan.offense > Bryant.offense) {
						console.log("hello");
					}

			} else if (className === "defense-1") {

			}	else if (className === "clutch-1") {

			}

		});



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

			function setFirstPlayer() {
		       	$(".offense").text( name + " Offense: " + offense);
	       		$(".defense").text( name + " Defense: " + defense);
	       		$(".clutch").text( name + " Clutch: " + clutch);
	       		$(".health1").text( name + " Health: " + health);
			}

			function setSecondPlayer() {
		       	$(".offense1").text( name + " Offense: " + offense);
	       		$(".defense1").text( name + " Defense: " + defense);
	       		$(".clutch1").text( name + " Clutch: " + clutch);
	       		$(".health2").text( name + " Health: " + health);
			}

		}
});










