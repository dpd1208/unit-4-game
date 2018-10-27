// Set Global Variables
$(document).ready(function reset() {

    // Poseidon Stats
    var poseidon = {
        "healthPoints": 100,
        "baseAttackPower": 9,
        "attackPower": 9,
        "counterAttackPower": 17,
        "card": $("#poseidon"),
        "isCharacter": false,
        "isDefender": false
    };

    // Athena Stats
    var athena = {
        "healthPoints": 110,
        "baseAttackPower": 8,
        "attackPower": 8,
        "counterAttackPower": 18,
        "card": $("#athena"),
        "isCharacter": false,
        "isDefender": false
    };

    // Artemis Stats
    var artemis = {
        "healthPoints": 120,
        "baseAttackPower": 7,
        "attackPower": 7,
        "counterAttackPower": 19,
        "card": $("#artemis"),
        "isCharacter": false,
        "isDefender": false
    };

    // Ares Stats
    var ares = {
        "healthPoints": 130,
        "baseAttackPower": 6,
        "attackPower": 6,
        "counterAttackPower": 20,
        "card": $("#ares"),
        "isCharacter": false,
        "isDefender": false
    };

    // Set Health to Character Card Footer 
    $(".poseidon-text-muted").html("<small>" + poseidon.healthPoints + "</small>");
    $(".athena-text-muted").html("<small>" + athena.healthPoints + "</small>");
    $(".artemis-text-muted").html("<small>" + artemis.healthPoints + "</small>");
    $(".ares-text-muted").html("<small>" + ares.healthPoints + "</small>");
    $("#btn").off("click");

    // Game Stage 1 - Choose Character
    function chooseCharacter() {

        var enemies = 3;

        // Your Character = Poseidon
        $(poseidon.card).click(function () {
            poseidon.isCharacter = true;
            (athena.card).detach().appendTo('#enemies').addClass("enemy");
            (artemis.card).detach().appendTo('#enemies').addClass("enemy");
            (ares.card).detach().appendTo('#enemies').addClass("enemy");
            $("#athena").off("click");
            $("#artemis").off("click");
            $("#ares").off("click");
            $("#game-stats").html("You Chose Poseidon");
            chooseDefender();
        });

        // Your Character = Athena
        $(athena.card).click(function () {
            athena.isCharacter = true;
            (poseidon.card).detach().appendTo('#enemies').addClass("enemy");
            (artemis.card).detach().appendTo('#enemies').addClass("enemy");
            (ares.card).detach().appendTo('#enemies').addClass("enemy");
            $("#poseidon").off("click");
            $("#artemis").off("click");
            $("#ares").off("click");
            $("#game-stats").html("You Chose Athena");
            chooseDefender();
        });

        // Your Character = Artemis
        $(artemis.card).click(function () {
            artemis.isCharacter = true;
            (athena.card).detach().appendTo('#enemies').addClass("enemy");
            (poseidon.card).detach().appendTo('#enemies').addClass("enemy");
            (ares.card).detach().appendTo('#enemies').addClass("enemy");
            $("#athena").off("click");
            $("#poseidon").off("click");
            $("#ares").off("click");
            $("#game-stats").html("You Chose Artemis");
            chooseDefender();
        });

        // Your Character = Ares
        $(ares.card).click(function () {
            ares.isCharacter = true;
            (athena.card).detach().appendTo('#enemies').addClass("enemy");
            (artemis.card).detach().appendTo('#enemies').addClass("enemy");
            (poseidon.card).detach().appendTo('#enemies').addClass("enemy");
            $("#poseidon").off("click");
            $("#artemis").off("click");
            $("#athena").off("click");
            $("#game-stats").html("You Chose Ares");
            chooseDefender();
        });
    };

    // Game Stage 2 - Choose Defender from Enemies
    function chooseDefender() {

        // Defender = Poseidon
        if (poseidon.card.hasClass("enemy")) {
            $("#poseidon").on("click");
            $(poseidon.card).click(function () {
                poseidon.isEnemy = true;
                (poseidon.card).detach().appendTo('#defender')
                $("#athena").off("click");
                $("#artemis").off("click");
                $("#ares").off("click");
                $("#game-stats").html("It is time to battle Poseidon!");
                battle();
            })
        };

        // Defender = Athena
        if (athena.card.hasClass("enemy")) {
            $("#athena").on("click");
            $(athena.card).click(function () {
                athena.isEnemy = true;
                (athena.card).detach().appendTo('#defender')
                $("#poseidon").off("click");
                $("#artemis").off("click");
                $("#ares").off("click");
                $("#game-stats").html("It is time to battle Athena!");
                battle();
            })
        };

        // Defender = Artemis
        if (artemis.card.hasClass("enemy")) {
            $("#artemis").on("click");
            $(artemis.card).click(function () {
                artemis.isEnemy = true;
                (artemis.card).detach().appendTo('#defender')
                $("#athena").off("click");
                $("#poseidon").off("click");
                $("#ares").off("click");
                $("#game-stats").html("It is time to battle Artemis!");
                battle();
            })
        };

        // Defender = Ares
        if (ares.card.hasClass("enemy")) {
            $("#ares").on("click");
            $(ares.card).click(function () {
                ares.isEnemy = true;
                (ares.card).detach().appendTo('#defender')
                $("#athena").off("click");
                $("#artemis").off("click");
                $("#poseidon").off("click");
                $("#game-stats").html("It is time to battle Ares!");
                battle();
            })
        };


        // Game Stage 3 - Battle
        function battle() {
            $(".btn").removeAttr("disabled", "disabled");
            $(".btn").click(function () {

                // POSEIDON ATTACKS

                //Poseidon vs. Athena
                if ((poseidon.isCharacter) && (athena.isEnemy) && (athena.healthPoints >= 1)) {
                    athena.healthPoints = (athena.healthPoints - poseidon.attackPower);
                    $(".athena-text-muted").html("<small>" + athena.healthPoints + "</small>");
                    $("#game-stats").html("You attacked Athena and did " + poseidon.attackPower + " points of damage!");
                    $(".btn").off("click");
                    setTimeout(counterAttack, 1600);
                }
                // Check if Athena loses
                if ((poseidon.isCharacter) && (athena.isEnemy) && (athena.healthPoints < 1)) {
                    alert("You beat Athena!");
                    athena.isEnemy = false;
                    enemies--;
                    $("#athena").detach();
                    setTimeout(chooseDefender, 300);
                };

                //Poseidon vs. Artemis
                if ((poseidon.isCharacter) && (artemis.isEnemy) && (artemis.healthPoints >= 1)) {
                    artemis.healthPoints = (artemis.healthPoints - poseidon.attackPower);
                    $(".artemis-text-muted").html("<small>" + artemis.healthPoints + "</small>");
                    $("#game-stats").html("You attacked Artemis and did " + poseidon.attackPower + " points of damage!");
                    $(".btn").off("click");
                    setTimeout(counterAttack, 1600);
                }
                // Check if Artemis loses
                if ((poseidon.isCharacter) && (artemis.isEnemy) && (artemis.healthPoints < 1)) {
                    alert("You beat Artemis!");
                    artemis.isEnemy = false;
                    enemies--;
                    $("#artemis").detach();
                    setTimeout(chooseDefender, 300);
                };

                //Poseidon vs. Ares
                if ((poseidon.isCharacter) && (ares.isEnemy) && (ares.healthPoints >= 1)) {
                    ares.healthPoints = (ares.healthPoints - poseidon.attackPower);
                    $(".ares-text-muted").html("<small>" + ares.healthPoints + "</small>");
                    $("#game-stats").html("You attacked Ares and did " + poseidon.attackPower + " points of damage!");
                    $(".btn").off("click");
                    setTimeout(counterAttack, 1600);
                }
                // Check if Ares loses
                if ((poseidon.isCharacter) && (ares.isEnemy) && (ares.healthPoints < 1)) {
                    alert("You beat Ares!");
                    ares.isEnemy = false;
                    enemies--;
                    $("#ares").detach();
                    setTimeout(chooseDefender, 300);
                };

                // ATHENA ATTACKS

                // Athena vs. Poseidon
                if ((athena.isCharacter) && (poseidon.isEnemy) && (poseidon.healthPoints >= 1)) {
                    poseidon.healthPoints = (poseidon.healthPoints - athena.attackPower);
                    $(".poseidon-text-muted").html("<small>" + poseidon.healthPoints + "</small>");
                    $("#game-stats").html("You attacked Poseidon and did " + athena.attackPower + " points of damage!");
                    $(".btn").attr("disabled", "disabled");
                    setTimeout(counterAttack, 1600);
                }
                // Check if Poseidon loses
                if ((athena.isCharacter) && (poseidon.isEnemy) && (poseidon.healthPoints < 1)) {
                    alert("You beat Poseidon!");
                    poseidon.isEnemy = false;
                    enemies--;
                    $("#poseidon").detach();
                    setTimeout(chooseDefender, 300);
                };

                // Athena vs. Artemis
                if ((athena.isCharacter) && (artemis.isEnemy) && (artemis.healthPoints >= 1)) {
                    artemis.healthPoints = (artemis.healthPoints - athena.attackPower);
                    $(".artemis-text-muted").html("<small>" + artemis.healthPoints + "</small>");
                    $("#game-stats").html("You attacked Artemis and did " + athena.attackPower + " points of damage!");;
                    $(".btn").attr("disabled", "disabled");
                    setTimeout(counterAttack, 1600);
                }
                // Check if Artemis loses
                if ((athena.isCharacter) && (artemis.isEnemy) && (artemis.healthPoints < 1)) {
                    alert("You beat Artemis!");
                    artemis.isEnemy = false;
                    enemies--;
                    $("#artemis").detach();
                    setTimeout(chooseDefender, 300);
                };

                // Athena vs. Ares
                if ((athena.isCharacter) && (ares.isEnemy) && (ares.healthPoints >= 1)) {
                    ares.healthPoints = (ares.healthPoints - athena.attackPower);
                    $(".ares-text-muted").html("<small>" + ares.healthPoints + "</small>");
                    $("#game-stats").html("You attacked Ares and did " + athena.attackPower + " points of damage!");
                    $(".btn").attr("disabled", "disabled");
                    setTimeout(counterAttack, 1600);
                }
                // Check if Ares loses
                if ((athena.isCharacter) && (ares.isEnemy) && (ares.healthPoints < 1)) {
                    alert("You beat Ares!");
                    ares.isEnemy = false;
                    enemies--;
                    $("#ares").detach();
                    setTimeout(chooseDefender, 300);
                };

                // ARTEMIS ATTACKS

                // Artemis vs. Poseidon
                if ((artemis.isCharacter) && (poseidon.isEnemy) && (poseidon.healthPoints >= 1)) {
                    poseidon.healthPoints = (poseidon.healthPoints - artemis.attackPower);
                    $(".poseidon-text-muted").html("<small>" + poseidon.healthPoints + "</small>");
                    $("#game-stats").html("You attacked Poseidon and did " + artemis.attackPower + " points of damage!");
                    $(".btn").attr("disabled", "disabled");
                    setTimeout(counterAttack, 1600);
                }
                // Check if Poseidon loses
                if ((artemis.isCharacter) && (poseidon.isEnemy) && (poseidon.healthPoints < 1)) {
                    alert("You beat Poseidon!");
                    poseidon.isEnemy = false;
                    enemies--;
                    $("#poseidon").detach();
                    setTimeout(chooseDefender, 300);
                };

                // Artemis vs. Athena
                if ((artemis.isCharacter) && (athena.isEnemy) && (athena.healthPoints >= 1)) {
                    athena.healthPoints = (athena.healthPoints - artemis.attackPower);
                    $(".athena-text-muted").html("<small>" + athena.healthPoints + "</small>");
                    $("#game-stats").html("You attacked Athena and did " + artemis.attackPower + " points of damage!");
                    $(".btn").attr("disabled", "disabled");
                    setTimeout(counterAttack, 1600);
                }
                // Check if Athena loses
                if ((artemis.isCharacter) && (athena.isEnemy) && (athena.healthPoints < 1)) {
                    alert("You beat Athena!");
                    athena.isEnemy = false;
                    enemies--;
                    $("#athena").detach();
                    setTimeout(chooseDefender, 300);
                };

                // Artemis vs. Ares
                if ((artemis.isCharacter) && (ares.isEnemy) && (ares.healthPoints >= 1)) {
                    ares.healthPoints = (ares.healthPoints - artemis.attackPower);
                    $(".ares-text-muted").html("<small>" + ares.healthPoints + "</small>");
                    $("#game-stats").html("You attacked Ares and did " + artemis.attackPower + " points of damage!");
                    $(".btn").attr("disabled", "disabled");
                    setTimeout(counterAttack, 1600);
                }
                // Check if Ares loses
                if ((artemis.isCharacter) && (ares.isEnemy) && (ares.healthPoints < 1)) {
                    alert("You beat Ares!");
                    ares.isEnemy = false;
                    enemies--;
                    $("#ares").detach();
                    setTimeout(chooseDefender, 300);
                };

                // ARTEMIS ATTACKS

                // Ares vs. Poseidon
                if ((ares.isCharacter) && (poseidon.isEnemy) && (poseidon.healthPoints >= 1)) {
                    poseidon.healthPoints = (poseidon.healthPoints - ares.attackPower);
                    $(".poseidon-text-muted").html("<small>" + poseidon.healthPoints + "</small>");
                    $("#game-stats").html("You attacked Poseidon and did " + ares.attackPower + " points of damage!");
                    $(".btn").attr("disabled", "disabled");
                    setTimeout(counterAttack, 1600);
                }
                // Check if Poseidon loses
                if ((ares.isCharacter) && (poseidon.isEnemy) && (poseidon.healthPoints < 1)) {
                    alert("You beat Poseidon!");
                    poseidon.isEnemy = false;
                    enemies--;
                    $("#poseidon").detach();
                    setTimeout(chooseDefender, 300);
                };

                // Ares vs. Athena
                if ((ares.isCharacter) && (athena.isEnemy) && (athena.healthPoints >= 1)) {
                    athena.healthPoints = (athena.healthPoints - ares.attackPower);
                    $(".athena-text-muted").html("<small>" + athena.healthPoints + "</small>");
                    $("#game-stats").html("You attacked Athena and did " + ares.attackPower + " points of damage!");
                    $(".btn").attr("disabled", "disabled");
                    setTimeout(counterAttack, 1600);
                }
                // Check if Athena loses
                if ((artemis.isCharacter) && (athena.isEnemy) && (athena.healthPoints < 1)) {
                    alert("You beat Athena!");
                    athena.isEnemy = false;
                    enemies--;
                    $("#athena").detach();
                    setTimeout(chooseDefender, 300);
                };


                // Ares vs. Artemis
                if ((ares.isCharacter) && (artemis.isEnemy) && (artemis.healthPoints >= 1)) {
                    artemis.healthPoints = (artemis.healthPoints - ares.attackPower);
                    $(".artemis-text-muted").html("<small>" + artemis.healthPoints + "</small>");
                    $("#game-stats").html("You attacked Artemis and did " + ares.attackPower + " points of damage!");
                    ares.attackPower = (ares.attackPower + 6);
                    $(".btn").attr("disabled", "disabled");
                    setTimeout(counterAttack, 1600);
                }
                // Check if Artemis losses
                if ((ares.isCharacter) && (artemis.isEnemy) && (artemis.healthPoints < 1)) {
                    alert("You beat Artemis!");
                    artemis.isEnemy = false;
                    $("#artemis").detach();
                    enemies--;
                    setTimeout(chooseDefender, 300);
                };

                // Counter Attack 
                function counterAttack() {

                    //Poseidon vs. Athena - Counter
                    if ((athena.healthPoints >= 1) && (poseidon.isCharacter) && (athena.isEnemy)) {
                        poseidon.attackPower = (poseidon.attackPower + 9);
                        poseidon.healthPoints = (poseidon.healthPoints - athena.counterAttackPower);
                        $(".poseidon-text-muted").html("<small>" + poseidon.healthPoints + "</small>");
                        $("#game-stats").html("Athena countered and did " + athena.counterAttackPower + " points of damage!");
                        setTimeout(battle, 300);
                    }
                    // Check if You Lose
                    if ((poseidon.healthPoints < 1) && (poseidon.isCharacter) && (athena.isEnemy)) {
                        alert("You Lose");
                        setTimeout(location.reload(true), 300);
                    };

                    //Poseidon vs. Artemis - Counter
                    if ((artemis.healthPoints >= 1) && (poseidon.isCharacter) && (artemis.isEnemy)) {
                        poseidon.attackPower = (poseidon.attackPower + 9);
                        poseidon.healthPoints = (poseidon.healthPoints - artemis.counterAttackPower);
                        $(".poseidon-text-muted").html("<small>" + poseidon.healthPoints + "</small>");
                        $("#game-stats").html("Artemis countered and did " + artemis.counterAttackPower + " points of damage!");
                        setTimeout(battle, 300);
                    }
                    // Check if You Lose
                    if ((poseidon.healthPoints < 1) && (poseidon.isCharacter) && (artemis.isEnemy)) {
                        alert("You Lose");
                        setTimeout(location.reload(true), 300);
                    };

                    //Poseidon vs. Ares - Counter
                    if ((ares.healthPoints >= 1) && (poseidon.isCharacter) && (ares.isEnemy)) {
                        poseidon.attackPower = (poseidon.attackPower + 9);
                        poseidon.healthPoints = (poseidon.healthPoints - ares.counterAttackPower);
                        $(".poseidon-text-muted").html("<small>" + poseidon.healthPoints + "</small>");
                        $("#game-stats").html("Ares countered and did " + ares.counterAttackPower + " points of damage!");
                        setTimeout(battle, 300);
                    }
                    // Check if You Lose
                    if ((poseidon.healthPoints < 1) && (poseidon.isCharacter) && (ares.isEnemy)) {
                        alert("You Lose");
                        setTimeout(location.reload(true), 300);
                    };


                    // Athena vs. Poseidon - Counter
                    if ((poseidon.healthPoints >= 1) && (athena.isCharacter) && (poseidon.isEnemy)) {
                        athena.attackPower = (athena.attackPower + 8);
                        athena.healthPoints = (athena.healthPoints - poseidon.counterAttackPower);
                        $(".athena-text-muted").html("<small>" + athena.healthPoints + "</small>");
                        $("#game-stats").html("Poseidon countered and did " + poseidon.counterAttackPower + " points of damage!");
                        setTimeout(battle, 300);
                    }
                    // Check if You Lose
                    if ((athena.healthPoints < 1) && (athena.isCharacter) && (poseidon.isEnemy)) {
                        alert("You Lose");
                        setTimeout(location.reload(true), 300);
                    };

                    // Athena vs. Artemis - Counter
                    if ((artemis.healthPoints >= 1) && (athena.isCharacter) && (artemis.isEnemy)) {
                        athena.attackPower = (athena.attackPower + 8);
                        athena.healthPoints = (athena.healthPoints - artemis.counterAttackPower);
                        $(".athena-text-muted").html("<small>" + athena.healthPoints + "</small>");
                        $("#game-stats").html("Artemis countered and did " + artemis.counterAttackPower + " points of damage!");
                        setTimeout(battle, 300);
                    }
                    // Check if You Lose
                    if ((athena.healthPoints < 1) && (athena.isCharacter) && (artemis.isEnemy)) {
                        alert("You Lose");
                        setTimeout(location.reload(true), 300);
                    };

                    // Athena vs. Ares - Counter
                    if ((ares.healthPoints >= 1) && (athena.isCharacter) && (ares.isEnemy)) {
                        athena.attackPower = (athena.attackPower + 8);
                        athena.healthPoints = (athena.healthPoints - ares.counterAttackPower);
                        $(".athena-text-muted").html("<small>" + athena.healthPoints + "</small>");
                        $("#game-stats").html("Ares countered and did " + ares.counterAttackPower + " points of damage!");
                        setTimeout(battle, 300);
                    }
                    // Check if You Lose
                    if ((athena.healthPoints < 1) && (athena.isCharacter) && (ares.isEnemy)) {
                        alert("You Lose");
                        setTimeout(location.reload(true), 300);
                    };

                    // Artemis vs. Poseidon - Counter
                    if ((poseidon.healthPoints >= 1) && (artemis.isCharacter) && (poseidon.isEnemy)) {
                        artemis.attackPower = (artemis.attackPower + 7);
                        artemis.healthPoints = (artemis.healthPoints - poseidon.counterAttackPower);
                        $(".artemis-text-muted").html("<small>" + artemis.healthPoints + "</small>");
                        $("#game-stats").html("Poseidon countered and did " + poseidon.counterAttackPower + " points of damage!");
                        setTimeout(battle, 300);
                    }
                    // Check if You Lose
                    if ((artemis.healthPoints < 1) && (artemis.isCharacter) && (poseidon.isEnemy)) {
                        alert("You Lose");
                        setTimeout(location.reload(true), 300);
                    };

                    // Artemis vs. Athena - Counter
                    if ((athena.healthPoints >= 1) && (artemis.isCharacter) && (athena.isEnemy)) {
                        artemis.attackPower = (artemis.attackPower + 7);
                        athena.healthPoints = (athena.healthPoints - artemis.counterAttackPower);
                        $(".artemis-text-muted").html("<small>" + artemis.healthPoints + "</small>");
                        $("#game-stats").html("Athena countered and did " + athena.counterAttackPower + " points of damage!");
                        setTimeout(battle, 300);
                    }
                    // Check if You Lose
                    if ((artemis.healthPoints < 1) && (artemis.isCharacter) && (athena.isEnemy)) {
                        alert("You Lose");
                        setTimeout(location.reload(true), 300);
                    };

                    // Artemis vs. Ares - Counter
                    if ((ares.healthPoints >= 1) && (artemis.isCharacter) && (ares.isEnemy)) {
                        artemis.attackPower = (artemis.attackPower + 7);
                        artemis.healthPoints = (artemis.healthPoints - ares.counterAttackPower);
                        $(".artemis-text-muted").html("<small>" + artemis.healthPoints + "</small>");
                        $("#game-stats").html("Ares countered and did " + ares.counterAttackPower + " points of damage!");
                        setTimeout(battle, 300);
                    }
                    // Check if You Lose
                    if ((artemis.healthPoints < 1) && (artemis.isCharacter) && (ares.isEnemy)) {
                        alert("You Lose");
                        setTimeout(location.reload(true), 300);
                    };

                    // Ares vs. Poseidon - Counter
                    if ((poseidon.healthPoints >= 1) && (ares.isCharacter) && (poseidon.isEnemy)) {
                        ares.attackPower = (ares.attackPower + 6);
                        ares.healthPoints = (ares.healthPoints - poseidon.counterAttackPower);
                        $(".ares-text-muted").html("<small>" + ares.healthPoints + "</small>");
                        $("#game-stats").html("Poseidon countered and did " + poseidon.counterAttackPower + " points of damage!");
                        setTimeout(battle, 300);
                    }
                    // Check if You Lose
                    if ((ares.healthPoints < 1) && (ares.isCharacter) && (poseidon.isEnemy)) {
                        alert("You Lose");
                        setTimeout(location.reload(true), 300);
                    };

                    // Ares vs. Athena - Counter
                    if ((athena.healthPoints >= 1) && (ares.isCharacter) && (athena.isEnemy)) {
                        ares.attackPower = (ares.attackPower + 6);
                        ares.healthPoints = (ares.healthPoints - athena.counterAttackPower);
                        $(".ares-text-muted").html("<small>" + ares.healthPoints + "</small>");
                        $("#game-stats").html("Athena countered and did " + athena.counterAttackPower + " points of damage!");
                        setTimeout(battle, 300);
                    }
                    // Check if You Lose
                    if ((ares.healthPoints < 1) && (ares.isCharacter) && (athena.isEnemy)) {
                        alert("You Lose");
                        setTimeout(location.reload(true), 300);
                    };

                    // Ares vs. Artemis - Counter
                    if ((artemis.healthPoints >= 1) && (ares.isCharacter) && (artemis.isEnemy)) {
                        ares.attackPower = (ares.attackPower + 6);
                        ares.healthPoints = (ares.healthPoints - artemis.counterAttackPower);
                        $(".ares-text-muted").html("<small>" + ares.healthPoints + "</small>");
                        $("#game-stats").html("Artemis countered and did " + artemis.counterAttackPower + " points of damage!");
                        setTimeout(battle, 300);
                    }
                    // Check if You Lose
                    if ((ares.healthPoints < 1) && (ares.isCharacter) && (artemis.isEnemy)) {
                        alert("You Lose");
                        setTimeout(location.reload(true), 300);
                    }
                };
            });
        };
    };
    // Start game function called
    chooseCharacter();
});