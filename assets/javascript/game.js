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


    //check if <div id=firstChar> is empty
    function check() {

        //if it is empty
        if ($('#firstChar').contents().length !== 0) {

            //makes sure that it's working
            console.log("works");

            //on click image that detaches and appends to secondChar div
            $(".image").on("click", function (event) {
                $(this).detach().appendTo("#secondChar");

                $(".image-container").remove();
                $("h2").remove();


                var currentImage = $(this).attr('src');

                if (currentImage === Durant.pic) {

                    $("#name2").text(Durant.name);
                    $("#offense2").text(Durant.offense);
                    $("#defense2").text(Durant.defense);
                    $("#clutch2").text(Durant.clutch);
                    $("#health2").text(Durant.health);


                } else if (currentImage === Bryant.pic) {

                    $("#name2").text(Bryant.name);
                    $("#offense2").text(Bryant.offense);
                    $("#defense2").text(Bryant.defense);
                    $("#clutch2").text(Bryant.clutch);
                    $("#health2").text(Bryant.health);


                } else if (currentImage === James.pic) {

                    $("#name2").text(James.name);
                    $("#offense2").text(James.offense);
                    $("#defense2").text(James.defense);
                    $("#clutch2").text(James.clutch);
                    $("#health2").text(James.health);


                } else if (currentImage === Jordan.pic) {

                    $("#name2").text(Jordan.name);
                    $("#offense2").text(Jordan.offense);
                    $("#defense2").text(Jordan.defense);
                    $("#clutch2").text(Jordan.clutch);
                    $("#health2").text(Jordan.health);

                }

            });


        };
    };



    //choosing a character
    function choose() {

        $(".image").on("click", function (event) {

            var currentImage = $(this).attr('src');

            if (currentImage === Durant.pic) {

                console.log(typeof (Durant.offense));

                //removes current divs
                $(this).closest(".intro-container").remove();

                //creates new div template
                chooseOpponentTemplate();

                $("#name1").text(Durant.name);
                $("#offense1").text(Durant.offense);
                $("#defense1").text(Durant.defense);
                $("#clutch1").text(Durant.clutch);
                $("#health1").text(Durant.health);

                //detach image clicked on and appends to firstChar div
                $(this).detach().appendTo("#firstChar");

                check();


            } else if (currentImage === Bryant.pic) {

                //removes current divs
                $(this).closest(".intro-container").remove();

                //creates new div template
                chooseOpponentTemplate();

                $("#name1").text(Bryant.name);
                $("#offense1").text(Bryant.offense);
                $("#defense1").text(Bryant.defense);
                $("#clutch1").text(Bryant.clutch);
                $("#health1").text(Bryant.health);


                //detach image clicked on and appends to firstChar div
                $(this).detach().appendTo("#firstChar");

                check();



            } else if (currentImage === James.pic) {

                //removes current divs
                $(this).closest(".intro-container").remove();

                //creates new div template
                chooseOpponentTemplate();

                $("#name1").text(James.name);
                $("#offense1").text(James.offense);
                $("#defense1").text(James.defense);
                $("#clutch1").text(James.clutch);
                $("#health1").text(James.health);


                //detach image clicked on and appends to firstChar div
                $(this).detach().appendTo("#firstChar");

                check();


            } else if (currentImage === Jordan.pic) {

                //removes current divs
                $(this).closest(".intro-container").remove();

                //creates new div template
                chooseOpponentTemplate();

                $("#name1").text(Jordan.name);
                $("#offense1").text(Jordan.offense);
                $("#defense1").text(Jordan.defense);
                $("#clutch1").text(Jordan.clutch);
                $("#health1").text(Jordan.health);

                //detach image clicked on and appends to firstChar div
                $(this).detach().appendTo("#firstChar");

                check();

            }


        });

        return;

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

});
