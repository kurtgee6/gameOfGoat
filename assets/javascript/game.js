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

        if ($('#secondChar').contents().length === 0) {

            console.log("works");

            $(".image").on("click", function (event) {
                $(this).detach().appendTo("#secondChar");
            })
        } else {
            console.log("not working");
        }
    }

    //choosing a character
    function choose() {

        $(".image").on("click", function (event) {

            var currentImage = $(this).attr('src');

            if (currentImage === Durant.pic) {

                //removes current divs
                $(this).closest(".intro-container").remove();

                //creates new div template
                chooseOpponentTemplate();

                //detach image clicked on and appends to new div
                $(this).detach().appendTo("#firstChar");


                check();

            } else if (currentImage === Bryant.pic) {

                //removes current divs
                $(this).closest(".intro-container").remove();

                //creates new div template
                chooseOpponentTemplate();

                //detach image clicked on and appends to new div
                $(this).detach().appendTo("#firstChar");



            } else if (currentImage === James.pic) {

                //removes current divs
                $(this).closest(".intro-container").remove();

                //creates new div template
                chooseOpponentTemplate();

                //detach image clicked on and appends to new div
                $(this).detach().appendTo("#firstChar");


            } else if (currentImage === Jordan.pic) {

                //removes current divs
                $(this).closest(".intro-container").remove();

                //creates new div template
                chooseOpponentTemplate();

                //detach image clicked on and appends to new div
                $(this).detach().appendTo("#firstChar");

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
            "</div>" + "</div>");


        return;
    }




});
