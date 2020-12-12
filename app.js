//start screen

const flowTop = document.querySelector('.start-top');
const flowBtm = document.querySelector('.start-bottom');
const entry = document.querySelector('.entry');
const story = document.querySelector('.story');

let time = Date.now();
let timer = setInterval(function(){
    let timePassed = Date.now() - time;

    if (timePassed >= 1000){
        clearInterval(timer);
        flowTop.style.visibility = "hidden";
        flowBtm.style.visibility = "hidden";
        entry.style.visibility = "visible";
        return;
    }
});

const blinkBig = document.querySelector('.blink-big');
const userName = document.querySelector('.name');
 // initial position of blink div 

const blinkMove = function(){
    let length = userName.textLength;
    let posn = 470;
    for (let i = 0; i < length; i++){
        posn += 24;
    }
    blinkBig.style.left = posn + 'px';
}

userName.addEventListener('input',blinkMove);

// From name entry to story screen


let storyTell = `YOU HAVE BEEN CHOSEN FOR A GREAT MISSION. 
        YOU MUST DEFEAT COMPUTERS. CHOOSE THE WEAPON YOU NEED. BUT, BE CAUTIOUS, 
        COMPUTERS ARE EQUIPPED WITH THE LATEST WEAPONS ALSO. EVEN
        YOUR SKILLS ARE HIGH, IT IS ALL MAINLY BASED ON LUCK.`

let openStory = `COMPUTERS CONQUERED THE WORLD! YOU ARE OUR LAST HOPE!`
const storyHead = document.querySelector('.story-head');
const storyMain = document.querySelector('.story-main');

userName.addEventListener('keydown',function(event){
    if (event.which === 13){
        entry.style.visibility = "hidden";
        story.style.visibility = "visible";
        addTextByDelay(openStory,storyHead);
        setTimeout(() => {addTextByDelay(storyTell,story)},5500);
    }
})

function addTextByDelay(text,loc){
    if (text.length > 0){
    loc.append(text[0]);
    setTimeout(
        function(){
            addTextByDelay(text.slice(1),loc);
        }, 100);
    }
}


































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