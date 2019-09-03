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
        
    var userIndex = "";
    var opponentIndex;
    var userCurrentHealth = 0;
    var userAttack = 0;
    var opponentCurrentHealth = 0;
    var opponentCounter = 0;
    var initialized = false;

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
    koalaHealth.attr("id", "koala-health");
    $("#characters").append(koalaDiv);
    $(".koala").append(koalaTitle);
    $("#koala-title").text(characters[0].title);
    $(".koala").append(koalaPic);
    $(".koala").append(koalaHealth);
    $("#koala-health").text(characters[0].health);


    // var koalaImg = $("<img>");
    // koalaImg.attr("src", characters[0].image_url);
    // koalaImg.attr("class", "unchosen")
    // koalaImg.attr("alive", "true");
    // koalaImg.attr("enemy", "true");
    // koalaImg.attr("opponent", "false");
    // koalaImg.attr("index", "0");
    // $(".koala").append(koalaImg);
    var foxImg = $("<img>");
    foxImg.attr("src", characters[1].image_url);
    foxImg.attr("class", "unchosen")
    foxImg.attr("alive", "true");
    foxImg.attr("enemy", "true");
    foxImg.attr("opponent", "false");
    foxImg.attr("index", "1");
    $("#characters").append(foxImg);
    var goatImg = $("<img>");
    goatImg.attr("src", characters[2].image_url);
    goatImg.attr("class", "unchosen")
    goatImg.attr("alive", "true");
    goatImg.attr("enemy", "true");
    goatImg.attr("opponent", "false");
    goatImg.attr("index", "2");
    $("#characters").append(goatImg);
    var davidImg = $("<img>");
    davidImg.attr("src", characters[3].image_url);
    davidImg.attr("class", "unchosen")
    davidImg.attr("alive", "true");
    davidImg.attr("enemy", "true");
    davidImg.attr("opponent", "false");
    davidImg.attr("index", "3");
    $("#characters").append(davidImg);

    $(".unchosen").on("click", function() {
        $(this).attr("enemy", "false");
        if (userIndex === "") {
            userIndex = parseInt($(this).attr("index"));
        }
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

    $(document).on("click", ".enemy", function() {
        $(this).attr("opponent", "true")
        opponentIndex = parseInt($(this).attr("index"));
        if (koalaImg.attr("opponent") === "true") {
            koalaImg.attr("class", "opponent");
            $("#opponent").append(koalaImg);
            koalaImg.attr("opponent", "false")
        } 
        if (foxImg.attr("opponent") === "true") {
            foxImg.attr("class", "opponent");
            $("#opponent").append(foxImg);
            foxImg.attr("opponent", "false")
        } 
        if (goatImg.attr("opponent") === "true") {
            goatImg.attr("class", "opponent");
            $("#opponent").append(goatImg);
            goatImg.attr("opponent", "false")
        } 
        if (davidImg.attr("opponent") === "true") {
            davidImg.attr("class", "opponent");
            $("#opponent").append(davidImg);
            davidImg.attr("opponent", "false")
        } 
    });

    $("button").click(function() {
        console.log("userIndex: " , userIndex);
        console.log("opponentIndex: ", opponentIndex);
        if (!initialized) {
            userCurrentHealth = characters[userIndex].health;
            userAttack = characters[userIndex].attack; 
            opponentCurrentHealth = characters[opponentIndex].health;
            opponentCounter = characters[opponentIndex].counter

        }
        userCurrentHealth = userCurrentHealth - opponentCounter;
        opponentCurrentHealth = opponentCurrentHealth - userAttack; 
        console.log("userAttack(pre-power-up): ", userAttack);
        userAttack = userAttack + characters[userIndex].attack
        initialized = true; 
        if (opponentCurrentHealth <= 0) {
            $(".opponent").remove();
            initialized = false; 
        }
        
        console.log("userCurrentHealth: ", userCurrentHealth);
        console.log("opponentCurrentHealth: ", opponentCurrentHealth);
        console.log("userAttack(post-power-up): ", userAttack);
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