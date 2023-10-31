let myBool = confirm("Shall we play Rock, paper and scisors game ?");
if(myBool){     // user clicked Ok
    let playerchoice = prompt("Choose Rock, Paper or Scissors");
    
    if(playerchoice){     // User choosed and clicked Ok
        let player = playerchoice.toLowerCase();     // so to make all responses valid
    
        if(player==="rock" || player==="paper" || player==="scissors"){   // if user choosed and entered correctly
            let computerchoice = Math.floor(Math.random()*3) + 1;    // computer make choice
            let computer = computerchoice ===1 ? "rock" : computerchoice === 2 ? "paper" : "scissors";
            // now the game logic began
            if(player===computer){
                alert("Game Tied !!");
            }
            else{
                if(player==="rock"){
                    if(computer==="paper"){
                        alert("Player: rock\nComputer: paper\n\n Computer Wins !");
                    }
                    else{
                        alert("Player: rock\nComputer: scissors\n\n Player Wins !");
                    }
                }
                else if(player==="paper"){
                    if(computer==="rock"){
                        alert("Player: paper\nComputer: rock\n\n Player Wins !");
                    }
                    else{
                        alert("Player: paper\nComputer: scissors\n\n Computer Wins !");
                    }
                }
                else{
                    if(computer==="rock"){
                        alert("Player: scissors\nComputer: rock\n\n Computer Wins !");
                    }
                    else{
                        alert("Player: scissors\nComputer: paper\n\n Player Wins !");
                    }
                }
            }
            let playagain = confirm("Wanna Play again ?") ? location.reload() : alert("Ok, Well Played.\nHope we meet again.");
        }
        else{   // if user choosed but entered incorrectly
            alert("Please enter Rock, Paper or Scissors");
        }
    }
    else{   // User cancled
        alert("umm, I guess you changed your mind. Maybe Next time.");
    }
} 
else{ alert("OK, Maybe next time !"); }  // User Cancled