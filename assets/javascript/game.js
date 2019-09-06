$(document).ready(function() {

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
    var opponentSelected = false;
    var newGame = true;
    var userTitle = "";
    var opponentTitle = "";

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
        $("#pick-character-header").remove();
        $("#enemies-header").text("Enemies Available to Attack")
        $(this).attr("enemy", "false");
        if (userIndex === "") {
            userIndex = parseInt($(this).attr("index"));
        }
        if (newGame == true) {

        $("#me").append(this);
        $("#me-header").text("Me");

        var buttonDiv = $("<button>");
        buttonDiv.attr("type", "button");
        buttonDiv.addClass("attack-button");
        buttonDiv.attr("id", "attack");
        buttonDiv.text("Attack!")
        var vsP = $("<p>");
        vsP.addClass("vs-text");
        vsP.text("Vs.");
        $("#button-div").append(vsP);
        $("#button-div").append(buttonDiv);
        var placeholderP = $("<p>");

        $("#opponent-header").text("Opponent");
        $("#opponent").text("?");

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
        $("#opponent-header").text("Opponent");
        if (koalaDiv.attr("opponent") === "true" && opponentSelected == false) {
            $("#notifications").text("This is combat. You must attack!");
            opponentIndex = parseInt($(this).attr("index"));
            koalaDiv.addClass("opponent");
            $("#opponent").html(koalaDiv);
            koalaDiv.attr("opponent", "false")
            opponentSelected = true;
        } 
        if (foxDiv.attr("opponent") === "true" && opponentSelected == false) {
            $("#notifications").text("This is combat. You must attack!");
            opponentIndex = parseInt($(this).attr("index"));
            foxDiv.addClass("opponent");
            $("#opponent").html(foxDiv);
            foxDiv.attr("opponent", "false")
            opponentSelected = true;
        } 
        if (goatDiv.attr("opponent") === "true" && opponentSelected == false) {
            $("#notifications").text("This is combat. You must attack!");
            opponentIndex = parseInt($(this).attr("index"));
            goatDiv.addClass("opponent");
            $("#opponent").html(goatDiv);
            goatDiv.attr("opponent", "false")
            opponentSelected = true;
        } 
        if (davidDiv.attr("opponent") === "true" && opponentSelected == false) {
            $("#notifications").text("This is combat. You must attack!");
            opponentIndex = parseInt($(this).attr("index"));
            davidDiv.addClass("opponent");
            $("#opponent").html(davidDiv);
            davidDiv.attr("opponent", "false")
            opponentSelected = true;
        } 
    });

    $(document).on("click", "button", function() {
        $("#notifications").text("You must select an opponent prior to attack!");
        if (opponentSelected == true) {

        userHealthId = "#health" + userIndex;
        opponentHealthId = "#health" + opponentIndex;
        console.log("userIndex & opponentIndex: ", userIndex, " - ", opponentIndex)
        userTitle = characters[userIndex].title;
        opponentTitle = characters[opponentIndex].title;
        console.log("userTitle & opponentTitle: ", userTitle, " - ", opponentTitle)
        var notificationP = $("<p>");
        

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


                opponentCurrentHealth = opponentCurrentHealth - userAttack;
                    console.log("userAttack: ", userAttack);
                    $(opponentHealthId).text(opponentCurrentHealth);

                if (opponentCurrentHealth > 0) {
                    userCurrentHealth = userCurrentHealth - opponentCounter;
                        $(userHealthId).text(userCurrentHealth);
                }
        
                $("#notifications").html("You attacked " + opponentTitle + " for " + userAttack + " damage. " + "<br>" + opponentTitle + " attacked you back for " + opponentCounter + " damage.");

                userAttack = userAttack + characters[userIndex].attack
                    console.log("userAttack (power-up): ", userAttack);
                    initialized = true; 


        if (opponentCurrentHealth <= 0) {
            $(".opponent").remove();
            $("#opponent-header").text("");
            $("#notifications").html("You attacked " + opponentTitle + " for " + userAttack + " damage. " + "<br>" + "As a result, you have defeated " + opponentTitle + ".");
            opponentsDefeated++;
            initialized = false; 
            opponentSelected = false; 
            if (opponentsDefeated < 3) {
                $("#notifications").html("You attacked " + opponentTitle + " for " + userAttack + " damage. " + "<br>" + "As a result, you have defeated " + opponentTitle + "." + "<br>" + "Choose a new opponent!");
            }
            if (opponentsDefeated == 3) {
                $("#notifications").html("You have defeated the final foe. " + "<br>" + "You are the champion planet Earth!");
            }
        }

        if (userCurrentHealth <= 0) {
            $("#notifications").text("You've been defeated by " + opponentTitle + ".");
        }

        }

    });

    
});

// 9-5-2019 - What remains to be done?
// Notifications for when I attack a character
// Example: You attacked Fox for 24 damage.
//          David attacked you back for 25 damage. 

// Notifications
// If I defeat an opponent, I should see a notification.
// For example, "You have defeated Koala, you can choose to fight another enemy."

// Notifications
// If I click the "Attack!" button without an opponent selected, I should get
// the following notification: "No opponent selected! Choose an enemy"

// Notifications for when I am defeated or win
// Example: You've been defeated...Game OVER!!!
// Example: You won!

// A "Reset" button for when I Win or Lose. Resetting the game into a new game. 



