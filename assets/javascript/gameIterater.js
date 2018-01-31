function rpsGameStarter(){
    var wins = 0;
    var loses = 0;
    var ties = 0;
    var noGames = 0;

    var choiceMapping = { "s": 0, "r": 1, "p": 2};

    // Creates an array that lists out all of the options (Rock, Paper, or Scissors).
    var computerChoices = ["r", "p", "s"];

    // This function is run whenever the user presses a key.
    // var gamesToBePlayed = prompt("Enter Numbers of games to be played in whole numbers:");
    // var compWinRate = parseFloat(prompt("Enter win Rate for house in whole numbers:"));
    // GET VALUES FROM FORM HERE
    var gamesToBePlayed;
    var compWinRate;

    gamesToBePlayed = document.getElementById("noOfGames").value;
    compWinRate = parseFloat(document.getElementById("winRate").value);
    // alert(compWinRate);
    
    var compLoseRate = compWinRate + parseFloat((100 - compWinRate)/2);
    var tieRate = compLoseRate;

    // console.log("win rate: " +compWinRate);
    // console.log("lose rate: " +compLoseRate);
    // console.log("tie rate: " +tieRate);
    // console.log("win + lose = " + (compWinRate+compLoseRate) );
    // console.log("win + lose + tie = " + (compWinRate+compLoseRate+tieRate) );
    
    for(; gamesToBePlayed >= 1; gamesToBePlayed--) {
    var game = "";
    
    // Randomly chooses a choice from the options array. This is the Computer's guess.
    var userGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
    var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
    

    var mappedCompPick; 
    var mappedUserPick = choiceMapping[userGuess];

    var weightedRandomNo = parseFloat((Math.random() * 100)).toFixed(2);

    // console.log("random #: " +weightedRandomNo + " compWinRate: " +compWinRate);

    if(weightedRandomNo < compWinRate){
        mappedCompPick = makeComputerWin(mappedUserPick);
        // console.log("WIN: random #: " +weightedRandomNo + " compWinRate: " +compWinRate);
    }
    else if((weightedRandomNo => compWinRate) && (weightedRandomNo < compLoseRate)){
        mappedCompPick = makeComputerLose(mappedUserPick);
        // console.log("LOSE: random #: " +weightedRandomNo + " WinLose: " +compLoseRate);
    }
    else if(weightedRandomNo => compLoseRate){
        mappedCompPick = mappedUserPick;
        // console.log("TIE: random #: " +weightedRandomNo + " WinLoseTie: " + (compWinRate + compLoseRate + tieRate));
    }

    // console.log("Comp: " +mappedCompPick + " Player: " +mappedUserPick);

    // Alerts the key the user pressed (userGuess).
    // alert("User guess: " + userGuess);
    document.getElementById("your_choice").textContent = userGuess;

    // Alerts the Computer's guess.
    // alert("Computer guess: " + computerGuess);
    document.getElementById("comp_choice").textContent = computerGuess;

    if(mappedUserPick + 2 === mappedCompPick){
        wins++;
        game ="you";
        noGames++;
    }
    else if(mappedUserPick === mappedCompPick + 2){
        loses++;
        game ="Computer";
        noGames++;
    }
    else if(mappedUserPick > mappedCompPick){
        wins++;
        game ="you";
        noGames++;
    }
    else if(mappedUserPick < mappedCompPick){
        loses++;
        game ="Computer";
        noGames++;
    }
    else if(mappedUserPick === mappedCompPick){
        ties++;
        game ="Nobody wins - Game Tied!";
        noGames++;
    }

    var winRate = parseFloat((wins/noGames) * 100).toFixed(2);
    var loseRate = parseFloat((loses/noGames) * 100).toFixed(2);
    var tieRate = parseFloat((ties/noGames) * 100).toFixed(2);

    // console.log(wins);
    document.getElementById("winner").textContent = game;
    document.getElementById("noGames").textContent = noGames
    document.getElementById("wins").textContent = wins + " Rate: " + winRate + "%";
    document.getElementById("loses").textContent = loses + " Rate: " + loseRate + "%";
    document.getElementById("ties").textContent = ties + " Rate: " + tieRate + "%";
    }
}

function makeComputerWin(mappedUserPick){
    return (mappedUserPick === 2) ? 0 : mappedUserPick + 1;
}

function makeComputerLose(mappedUserPick){
    return (mappedUserPick === 0) ? 2 : mappedUserPick - 1;
}