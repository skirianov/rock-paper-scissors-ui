function computerMove(){
    let choose = ['rock','paper','scissors'];
    let random = Math.floor(Math.random() * choose.length)
    let choice = choose[random];
    return choice;
}

let userInput = prompt("Please enter 'rock','paper'or 'scissors' to select your weapon").toLowerCase();


function playRound (a, b){
    let result;
    a = computerMove();
    b = userInput;
    console.log(a + ' ------ this is computer ----');
    console.log(b + ' ------ this is user entry ----')
    console.log ("Round 1")
    if (a === 'rock' && b === 'rock'){
        result = 'Draw!';
        return result;
    } else if (a === 'scissors' && b === 'scissors'){
        result = 'Draw!';
        return result;
    } else if  (a === 'paper' && b === 'paper'){
        result = 'Draw!';
        return result;
    } else if (a === 'rock' && b === 'scissors'){
        result = 'Computer wins!';
        return result;
    } else if (a === 'scissors' && b === 'paper') {
        result = 'Computer wins!';
        return result;
    } else if (a === 'paper' && b === 'rock'){
        result = 'Computer wins!';
        return result;
    } 
    else {
        result = "User wins!";
        return result;
    }
    
    console.log(result);
}