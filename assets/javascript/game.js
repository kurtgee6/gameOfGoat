var kevImage;
var lebImage;
var kobImage;
var micImage;

$(document).ready(function () {

    //objects of characters
    var Jordan = {
        name: "Michael Jordan",
        offense: 700,
        defense: 650,
        clutch: 680,
        health: 100,
        pic: "assets/images/michael-jordan.png"
    }

    var James = {
        name: "Lebron James",
        offense: 660,
        defense: 620,
        clutch: 630,
        health: 100,
        pic: "assets/images/lebron-james.png"
    }

    var Durant = {
        name: "Kevin of Durant",
        offense: 630,
        defense: 600,
        clutch: 630,
        health: 100,
        pic: "assets/images/kevin-durant.png"
    }

    var Bryant = {
        name: "Kobe Bryant",
        offense: 670,
        defense: 620,
        clutch: 640,
        health: 100,
        pic: "assets/images/kobe-bryant.png"
    }

    //onclick function for start button
    $("#startButton").on("click", function (event) {

        //removing elements once user clicks start
        $(this).closest(".intro-container").remove();

        //image sources
        kevImage = 'src=assets/images/kevin-durant.png';
        lebImage = 'src=assets/images/kobe-bryant.png';
        kobImage = 'src=assets/images/lebron-james.png';
        micImage = 'src=assets/images/michael-jordan.png';

        //calling back the user baller choice
        chooseBallerTemplate();

        //choosing a character function
        choose();

    });


    //choosing a character
    function choose() {

        $(".image").on("click", function (event) {

            var currentImage = $(this).attr('src');

            if (currentImage === Durant.pic) {

                //removes current divs
                $(this).closest(".intro-container").remove();

                //creates new div template
                chooseOpponentTemplate();

                $("#name1").text("NAME: " + Durant.name);
                $("#offense1").text("OFFENSE: " + Durant.offense);
                $("#defense1").text("DEFENSE: " + Durant.defense);
                $("#clutch1").text("CLUTCH: " + Durant.clutch);
                $("#health1").text("HEALTH: " + Durant.health);

                //detach image clicked on and appends to firstChar div
                $(this).detach().appendTo("#firstChar");

                check();


            } else if (currentImage === Bryant.pic) {

                //removes current divs
                $(this).closest(".intro-container").remove();

                //creates new div template
                chooseOpponentTemplate();

                $("#name1").text("NAME: " + Bryant.name);
                $("#offense1").text("OFFENSE: " + Bryant.offense);
                $("#defense1").text("DEFENSE: " + Bryant.defense);
                $("#clutch1").text("CLUTCH: " + Bryant.clutch);
                $("#health1").text("HEALTH: " + Bryant.health);


                //detach image clicked on and appends to firstChar div
                $(this).detach().appendTo("#firstChar");

                check();



            } else if (currentImage === James.pic) {

                //removes current divs
                $(this).closest(".intro-container").remove();

                //creates new div template
                chooseOpponentTemplate();

                $("#name1").text("NAME: " + James.name);
                $("#offense1").text("OFFENSE: " + James.offense);
                $("#defense1").text("DEFENSE: " + James.defense);
                $("#clutch1").text("CLUTCH: " + James.clutch);
                $("#health1").text("HEALTH: " + James.health);


                //detach image clicked on and appends to firstChar div
                $(this).detach().appendTo("#firstChar");

                check();


            } else if (currentImage === Jordan.pic) {

                //removes current divs
                $(this).closest(".intro-container").remove();

                //creates new div template
                chooseOpponentTemplate();

                $("#name1").text("NAME: " + Jordan.name);
                $("#offense1").text("OFFENSE: " + Jordan.offense);
                $("#defense1").text("DEFENSE: " + Jordan.defense);
                $("#clutch1").text("CLUTCH: " + Jordan.clutch);
                $("#health1").text("HEALTH: " + Jordan.health);

                //detach image clicked on and appends to firstChar div
                $(this).detach().appendTo("#firstChar");

                check();

            }


        });

        return;

    };



    //check if <div id=firstChar> is empty
    function check() {

        //if it is empty
        if ($('#firstChar').contents().length !== 0) {

            //on click image that detaches and appends to secondChar div
            $(".image").on("click", function (event) {
                $(this).detach().appendTo("#secondChar");

                $(".image-container").remove();
                $("h2").remove();

                $("#charContainer").append("<div id=buttonContainer>" + "<button id=offense>OFFENSE" +
                    "</button>" + "<button id=defense>DEFENSE" + "</button>" +
                    "<button id=clutch>CLUTCH" + "</button>" + "</div>");


                var currentImage = $(this).attr('src');

                if (currentImage === Durant.pic) {

                    $("#name2").text("NAME: " + Durant.name);
                    $("#offense2").text("OFFENSE: " + Durant.offense);
                    $("#defense2").text("DEFENSE: " + Durant.defense);
                    $("#clutch2").text("CLUTCH: " + Durant.clutch);
                    $("#health2").text("HEALTH: " + Durant.health);

                } else if (currentImage === Bryant.pic) {

                    $("#name2").text("NAME: " + Bryant.name);
                    $("#offense2").text("OFFENSE: " + Bryant.offense);
                    $("#defense2").text("DEFENSE: " + Bryant.defense);
                    $("#clutch2").text("CLUTCH: " + Bryant.clutch);
                    $("#health2").text("HEALTH: " + Bryant.health);


                } else if (currentImage === James.pic) {

                    $("#name2").text("NAME: " + James.name);
                    $("#offense2").text("OFFENSE: " + James.offense);
                    $("#defense2").text("DEFENSE: " + James.defense);
                    $("#clutch2").text("CLUTCH: " + James.clutch);
                    $("#health2").text("HEALTH: " + James.health);


                } else if (currentImage === Jordan.pic) {

                    $("#name2").text("NAME: " + Jordan.name);
                    $("#offense2").text("OFFENSE: " + Jordan.offense);
                    $("#defense2").text("DEFENSE: " + Jordan.defense);
                    $("#clutch2").text("CLUTCH: " + Jordan.clutch);
                    $("#health2").text("HEALTH: " + Jordan.health);

                }

                fight();

            });
        };
    };


    //called after user hits start button
    function chooseBallerTemplate() {

        $("#characterPage").append("<div class= intro-container>" +
            "<h2> CHOOSE YOUR BALLER" + "</h2>" +
            "<div class=image-container>" +
            "<img class = image " + kevImage + ">" + "<img class = image " + lebImage + ">" +
            "<img class = image " + kobImage + ">" + "<img class = image " + micImage + ">" +
            "</div>" +
            "</div>");

        return;
    }

    //gets called after first player is chosen
    function chooseOpponentTemplate() {
        $("#characterPage").append("<div class= intro-container>" +
            "<h2> CHOOSE YOUR OPPONENT" + "</h2>" +
            "<div class=image-container>" +
            "<img class = image " + kevImage + ">" + "<img class = image " + lebImage + ">" +
            "<img class = image " + kobImage + ">" + "<img class = image " + micImage + ">" +
            "</div>" + "<div id=charContainer>" + "<div id=firstChar>" + "</div>" + "<div id=secondChar>" +
            "</div>" + "<h1>VS. " + " </h1>" + "</div>" + "<div id=statsContainer>" + "<div id=stats1>" +
            "<div id=name1>" + "</div>" + "<div id=health1>" + "</div>" + "<div id=clutch1>" + "</div>" +
            "<div id=defense1>" + "</div>" + "<div id=offense1>" + "</div>" + "</div>" + "<div id=stats2>" +
            "<div id=name2>" + "</div>" + "<div id=health2>" + "</div>" + "<div id=clutch2>" + "</div>" +
            "<div id=defense2>" + "</div>" + "<div id=offense2>" + "</div>" + "</div>" + "</div>");

        return;
    }


    function fight() {
        $("#offense").on("click", function (event) {
            console.log("offense");

            var url = $(event.target).attr('src');

            if (url === Durant.pic) {
                console.log($(this).attr('src'));
            } else {
                console.log("wrong");
            }
        });

        $("#defense").on("click", function (event) {
            console.log("defense");
        });

        $("#clutch").on("click", function (event) {
            console.log("clutch");
        });

        return;

    }

});
