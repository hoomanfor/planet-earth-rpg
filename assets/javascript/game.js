$(document).ready(function() {

// First, I need to create an array of objects
// Each Object will have the following the following properties:
// title, health, attack, counter, image

var characters = [
    {
        title: "koala",
        health: 120,
        attack: 20,
        counter: 5,
        image_url: "assets/images/koala.jpg"
    },
    {
        title: "fox",
        health: 125,
        attack: 15,
        counter: 15,
        image_url: "assets/images/fox.jpg"
    },
    {
        title: "goat",
        health: 115,
        attack: 10,
        counter: 25,
        image_url: "assets/images/goat.jpg"
    },
    {
        title: "david",
        health: 105,
        attack: 5,
        counter: 10,
        image_url: "assets/images/david.jpg"
    }
];


        // for (var i = 0; i < characters.length; i++) {
        //     var characterDiv = $("<div>");
        //     characterDiv.attr("class", "characters");
        //     characterDiv.attr("id", characters[i].title)
        //     var characterId = "#" + characters[i].title
        //     $("#characters").append(characterDiv);
        //     var titleP = $("<p>");
        //     titleP.text(characters[i].title);
        //     $(characterId).append(titleP)
        //     var characterImg = $("<img>");
        //     characterImg.attr("src", characters[i].image_url);
        //     characterImg.attr("width", "150px");
        //     characterImg.attr("height", "125px");
        //     $(characterId).append(characterImg);
        //     var healthP = $("<p>");
        //     healthP.text(characters[i].health);
        //     $(characterId).append(healthP);
        // }
        
        // $("#characters").on("click", function () {
        //     console.log($(this).attr())
        // });

    var koalaImg = $("<img>");
    koalaImg.attr("src", characters[0].image_url);
    koalaImg.attr("alive", "true");
    koalaImg.attr("enemy", "true");
    koalaImg.attr("opponent", "false");
    koalaImg.attr("index", "0");
    $("#characters").append(koalaImg);
    var foxImg = $("<img>");
    foxImg.attr("src", characters[1].image_url);
    foxImg.attr("alive", "true");
    foxImg.attr("enemy", "true");
    foxImg.attr("opponent", "false");
    foxImg.attr("index", "1");
    $("#characters").append(foxImg);
    var goatImg = $("<img>");
    goatImg.attr("src", characters[2].image_url);
    goatImg.attr("alive", "true");
    goatImg.attr("enemy", "true");
    goatImg.attr("opponent", "false");
    goatImg.attr("index", "2");
    $("#characters").append(goatImg);
    var davidImg = $("<img>");
    davidImg.attr("src", characters[3].image_url);
    davidImg.attr("alive", "true");
    davidImg.attr("enemy", "true");
    davidImg.attr("opponent", "false");
    davidImg.attr("index", "3");
    $("#characters").append(davidImg);

    $("img").on("click", function () {
        $("#characters").empty();
        $(this).attr("enemy", "false");
        $("#me").append(this);
            if (koalaImg.attr("enemy") === "true") {
                koalaImg.attr("class", "enemy");
                $("#enemies").append(koalaImg);
            } 
            if (foxImg.attr("enemy") === "true") {
                foxImg.attr("class", "enemy");
                $("#enemies").append(foxImg);
            } 
            if (goatImg.attr("enemy") === "true") {
                goatImg.attr("class", "enemy");
                $("#enemies").append(goatImg);
            } 
            if (davidImg.attr("enemy") === "true") {
                davidImg.attr("class", "enemy");
                $("#enemies").append(davidImg);
            } 
    });

    $(document).on("click", ".enemy", function () {
        $(this).attr("opponent", "true")
        if (koalaImg.attr("opponent") === "true") {
            $("#opponent").append(koalaImg);
        } 
        if (foxImg.attr("opponent") === "true") {
            foxImg.attr("class", "enemy");
            $("#opponent").append(foxImg);
        } 
        if (goatImg.attr("opponent") === "true") {
            goatImg.attr("class", "enemy");
            $("#opponent").append(goatImg);
        } 
        if (davidImg.attr("opponent") === "true") {
            davidImg.attr("class", "enemy");
            $("#opponent").append(davidImg);
        } 
    });

    // for (var key in characters) {
    //     console.log(characters[key].title);
    // }

});

// You are able to pick a Character to fight with against Enemy characters
// At the beginning of the game, there are 4 characters you choose from. 

// There are 4 main areas on the page.
// Your Character, Enemies Available to Attack, Fight Section (attack button), Defender Section

// When I choose my character, the three remaining characters drop down to the "Enemies Available to Attack Section.

// From there, I need to choose one of these remaining characters to fight first.

// When I choose one, that character drops down to the Defender section.

// Each character in the game has 3 attributes: `Health Points`, `Attack Power` and `Counter Attack Power`.

// For example, if the base Attack Power is 6, each attack will increase the Attack Power by 6 (12, 18, 24, 30 and so on).

// Unlike the player's `Attack Points`, `Counter Attack Power` never changes.

// The `Health Points`, `Attack Power` and `Counter Attack Power` of each character must differ.

// A winning player must pick their characters wisely by first fighting an enemy with low `Counter Attack Power`. This will allow them to grind `Attack Power` and to take on enemies before they lose all of their `Health Points`. Healing options would mess with this dynamic.

// Your players should be able to win and lose the game no matter what character they choose. The challenge should come from picking the right enemies, not choosing the strongest player.