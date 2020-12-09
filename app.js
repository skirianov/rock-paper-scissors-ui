function computerMove(){
    let choose = ['rock','paper','scissors'];
    let random = Math.floor(Math.random() * choose.length)
    let choice = choose[random];
    return choice;
}




function playRound (a, b){
    let result;
    a = computerMove();
    b = prompt("Please enter 'rock','paper'or 'scissors' to select your weapon").toLowerCase();
    console.log(a + ' ------ this is computer ----');
    console.log(b + ' ------ this is user entry ----')
    if (a === 'rock' && b === 'rock'){
        result = 'Draw!';
        console.log(result);
        return result;
    } else if (a === 'scissors' && b === 'scissors'){
        result = 'Draw!';
        console.log(result);
        return result;
    } else if  (a === 'paper' && b === 'paper'){
        result = 'Draw!';
        console.log(result);
        return result;
    } else if (a === 'rock' && b === 'scissors'){
        result = 'Computer wins!';
        console.log(result);
        return result;
    } else if (a === 'scissors' && b === 'paper') {
        result = 'Computer wins!';
        console.log(result);
        return result;
    } else if (a === 'paper' && b === 'rock'){
        result = 'Computer wins!';
        
        console.log(result);    
        return result;
    } 
    else {
        result = "User wins!";
        
        console.log(result);
        return result;
    }
    
}

let compRes = 0;
let userRes = 0;

function game(play){
    console.log ('There will be 5 rounds to compete');

    for (let i = 0; i < 5; i ++){
        
        console.log (`Round ${i+1}`)
        let res = playRound();

        if (res === 'Computer wins!'){
            compRes++;
            console.log(`Computer score is ---- ${compRes}`)
        } else if (res === 'User wins!'){
            userRes++;
            console.log(`User score is ---- ${userRes}`)
        } else {
            console.log('That was a draw, no points for you guys =(')
    }
    console.log(`Score table is ------ Computer | ${compRes} | ----- User | ${userRes} | ------`)
    if (i === 4 || userRes === 3 || compRes === 3){
        console.log(`This was last round and the winner is: `);
        if (compRes > userRes){
            console.log(`[[[[COMPUTER]]]] ------- ${compRes} ------- points`);
        } else {
            console.log(`[[[[MANKIND WON]]]] ------- ${userRes} ------ points`)
        };
        userRes = 0;
        compRes = 0;
    }
}
}