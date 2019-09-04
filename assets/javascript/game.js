$(document).ready(function() {

// First, I need to create an array of objects
// Each Object will have the following the following properties:
// title, health, attack, counter, image

var characters = [
    {
        title: "Koala",
        health: 120,
        attack: 20,
        counter: 5,
        image_url: "assets/images/koala.jpg"
    },
    {
        title: "Fox",
        health: 125,
        attack: 15,
        counter: 15,
        image_url: "assets/images/fox.jpg"
    },
    {
        title: "Goat",
        health: 115,
        attack: 10,
        counter: 25,
        image_url: "assets/images/goat.jpg"
    },
    {
        title: "David",
        health: 105,
        attack: 5,
        counter: 10,
        image_url: "assets/images/david.jpg"
    }
];
        
    var userIndex = "";
    var opponentIndex;
    var userCurrentHealth = 0;
    var userAttack = 0;
    var opponentCurrentHealth = 0;
    var opponentCounter = 0;
    var initialized = false;
    var userHealthId;
    var opponentHealthId;
    var opponentsDefeated = 0; 
    var opponentSelected = true;
    var newGame = true; 

    var koalaDiv = $("<div>");
    koalaDiv.addClass("characters");
    koalaDiv.addClass("koala");
    koalaDiv.addClass("unchosen");
    koalaDiv.attr("alive", "true");
    koalaDiv.attr("enemy", "true");
    koalaDiv.attr("opponent", "false");
    koalaDiv.attr("index", "0");
    var koalaTitle = $("<p>");
    koalaTitle.attr("id", "koala-title");
    var koalaPic = $("<img>");
    koalaPic.attr("src", characters[0].image_url);
    var koalaHealth = $("<p>");
    koalaHealth.attr("id", "health0");
    $("#characters").append(koalaDiv);
    $(".koala").append(koalaTitle);
    $("#koala-title").text(characters[0].title);
    $(".koala").append(koalaPic);
    $(".koala").append(koalaHealth);
    $("#health0").text(characters[0].health);

    var foxDiv = $("<div>");
    foxDiv.addClass("characters");
    foxDiv.addClass("fox");
    foxDiv.addClass("unchosen");
    foxDiv.attr("alive", "true");
    foxDiv.attr("enemy", "true");
    foxDiv.attr("opponent", "false");
    foxDiv.attr("index", "1");
    var foxTitle = $("<p>");
    foxTitle.attr("id", "fox-title");
    var foxPic = $("<img>");
    foxPic.attr("src", characters[1].image_url);
    var foxHealth = $("<p>");
    foxHealth.attr("id", "health1");
    $("#characters").append(foxDiv);
    $(".fox").append(foxTitle);
    $("#fox-title").text(characters[1].title);
    $(".fox").append(foxPic);
    $(".fox").append(foxHealth);
    $("#health1").text(characters[1].health);

    var goatDiv = $("<div>");
    goatDiv.addClass("characters");
    goatDiv.addClass("goat");
    goatDiv.addClass("unchosen");
    goatDiv.attr("alive", "true");
    goatDiv.attr("enemy", "true");
    goatDiv.attr("opponent", "false");
    goatDiv.attr("index", "2");
    var goatTitle = $("<p>");
    goatTitle.attr("id", "goat-title");
    var goatPic = $("<img>");
    goatPic.attr("src", characters[2].image_url);
    var goatHealth = $("<p>");
    goatHealth.attr("id", "health2");
    $("#characters").append(goatDiv);
    $(".goat").append(goatTitle);
    $("#goat-title").text(characters[2].title);
    $(".goat").append(goatPic);
    $(".goat").append(goatHealth);
    $("#health2").text(characters[2].health);

    var davidDiv = $("<div>");
    davidDiv.addClass("characters");
    davidDiv.addClass("david");
    davidDiv.addClass("unchosen");
    davidDiv.attr("alive", "true");
    davidDiv.attr("enemy", "true");
    davidDiv.attr("opponent", "false");
    davidDiv.attr("index", "3");
    var davidTitle = $("<p>");
    davidTitle.attr("id", "david-title");
    var davidPic = $("<img>");
    davidPic.attr("src", characters[3].image_url);
    var davidHealth = $("<p>");
    davidHealth.attr("id", "health3");
    $("#characters").append(davidDiv);
    $(".david").append(davidTitle);
    $("#david-title").text(characters[3].title);
    $(".david").append(davidPic);
    $(".david").append(davidHealth);
    $("#health3").text(characters[3].health);

    $(".unchosen").on("click", function() {
        $(this).attr("enemy", "false");
        if (userIndex === "") {
            userIndex = parseInt($(this).attr("index"));
        }
        if (newGame == true) {
        $("#me").append(this);
            if (koalaDiv.attr("enemy") === "true") {
                koalaDiv.addClass("enemy");
                $("#enemies").append(koalaDiv);
                newGame = false;
            } 
            if (foxDiv.attr("enemy") === "true") {
                foxDiv.addClass("enemy");
                $("#enemies").append(foxDiv);
                newGame = false;
            } 
            if (goatDiv.attr("enemy") === "true") {
                goatDiv.addClass("enemy");
                $("#enemies").append(goatDiv);
                newGame = false;
            } 
            if (davidDiv.attr("enemy") === "true") {
                davidDiv.addClass("enemy");
                $("#enemies").append(davidDiv);
                newGame = false;
            } 
        }
    });

    $(document).on("click", ".enemy", function() {
        $(this).attr("opponent", "true")
        // opponentIndex = parseInt($(this).attr("index"));
        if (koalaDiv.attr("opponent") === "true" && opponentSelected == true) {
            opponentIndex = parseInt($(this).attr("index"));
            koalaDiv.addClass("opponent");
            $("#opponent").append(koalaDiv);
            koalaDiv.attr("opponent", "false")
            opponentSelected = false;
        } 
        if (foxDiv.attr("opponent") === "true" && opponentSelected == true) {
            opponentIndex = parseInt($(this).attr("index"));
            foxDiv.addClass("opponent");
            $("#opponent").append(foxDiv);
            foxDiv.attr("opponent", "false")
            opponentSelected = false;
        } 
        if (goatDiv.attr("opponent") === "true" && opponentSelected == true) {
            opponentIndex = parseInt($(this).attr("index"));
            goatDiv.addClass("opponent");
            $("#opponent").append(goatDiv);
            goatDiv.attr("opponent", "false")
            opponentSelected = false;
        } 
        if (davidDiv.attr("opponent") === "true" && opponentSelected == true) {
            opponentIndex = parseInt($(this).attr("index"));
            davidDiv.addClass("opponent");
            $("#opponent").append(davidDiv);
            davidDiv.attr("opponent", "false")
            opponentSelected = false;
        } 
    });

    $("button").click(function() {

        userHealthId = "#health" + userIndex;
        opponentHealthId = "#health" + opponentIndex;

        if (initialized === false && opponentsDefeated === 0) {
            userCurrentHealth = characters[userIndex].health;
            userAttack = characters[userIndex].attack; 
            opponentCurrentHealth = characters[opponentIndex].health;
            opponentCounter = characters[opponentIndex].counter
        }

        if (initialized === false && opponentsDefeated >= 1) {
            opponentCurrentHealth = characters[opponentIndex].health;
            opponentCounter = characters[opponentIndex].counter
        }

            userCurrentHealth = userCurrentHealth - opponentCounter;
                $(userHealthId).text(userCurrentHealth);

            opponentCurrentHealth = opponentCurrentHealth - userAttack;
                console.log("userAttack: ", userAttack);
                $(opponentHealthId).text(opponentCurrentHealth);

            userAttack = userAttack + characters[userIndex].attack
                console.log("userAttack (power-up): ", userAttack);
                initialized = true; 

        if (opponentCurrentHealth <= 0) {
            $(".opponent").remove();
            opponentsDefeated++;
            console.log(opponentsDefeated);
            initialized = false; 
            opponentSelected = true; 
        }
    });
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

        // for (var key in characters) {
        //  console.log(characters[key].title);
        // }