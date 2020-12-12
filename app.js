//start screen

const flowTop = document.querySelector('.start-top');
const flowBtm = document.querySelector('.start-bottom');
const entry = document.querySelector('.entry');
const story = document.querySelector('.story');
const page = document.querySelector('.page');

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
        entry.style.display = "none";
        story.style.visibility = "visible";
        addTextByDelay(openStory,storyHead);
        setTimeout(() => {addTextByDelay(storyTell,story)},5500);
        setTimeout(() => {
            story.style.display= "none";
            page.style.visibility = "visible";
        }, 35000)
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


const rock = document.getElementById('usr-rock');
const paper = document.getElementById('usr-paper');
const scissors = document.getElementById('usr-scissors');
const log = document.querySelector('.game');


let pick;

rock.addEventListener('click',(e)=>{
    pick = e.target.name;
    playRound();
})
paper.addEventListener('click',(e)=>{
    pick = e.target.name;
    playRound();
})
scissors.addEventListener('click',(e)=>{
    pick = e.target.name;
    playRound();
})

function computerMove(){
    let choose = ['rock','paper','scissors','rock','paper','scissors','rock','paper','scissors','rock','paper','scissors'];
    let random = Math.floor(Math.random() * choose.length)
    let choice = choose[random];
    return choice;
}

function playRound (a, b){
    let result;
    a = computerMove();
    b = pick;
    let count = 0;
    let newLog = document.createElement('p');
    newLog.style.backgroundColor = "black";
    newLog.innerText = `---- ${a} ---- Computer Weapon \n ---- ${b} ---- user Weapon`
    log.appendChild(newLog);
    
    if (a === 'rock' && b === 'rock'){
        result = 'Draw!';
        const newLog = document.createElement('p');
        newLog.innerText = result;
        newLog.style.backgroundColor = "black";
        log.appendChild(newLog);
    } else if (a === 'scissors' && b === 'scissors'){
        result = 'Draw!';
        const newLog = document.createElement('p');
        newLog.innerText = result;
        newLog.style.backgroundColor = "black";
        log.appendChild(newLog);
    } else if  (a === 'paper' && b === 'paper'){
        result = 'Draw!';
        const newLog = document.createElement('p');
        newLog.innerText = result;
        newLog.style.backgroundColor = "black";
        log.appendChild(newLog);
    } else if (a === 'rock' && b === 'scissors'){
        result = 'Computer wins!';
        const newLog = document.createElement('p');
        newLog.innerText = result;
        newLog.style.backgroundColor = "black";
        log.appendChild(newLog);
    } else if (a === 'scissors' && b === 'paper') {
        result = 'Computer wins!';
        const newLog = document.createElement('p');
        newLog.innerText = result;
        newLog.style.backgroundColor = "black";
        log.appendChild(newLog);
    } else if (a === 'paper' && b === 'rock'){
        result = 'Computer wins!';
        const newLog = document.createElement('p');
        newLog.innerText = result;
        newLog.style.backgroundColor = "black";
        log.appendChild(newLog);
    } 
    else {
        result = "User wins!";
        const newLog = document.createElement('p');
        newLog.innerText = result;
        newLog.style.backgroundColor = "black";
        log.appendChild(newLog);
    }
    
    if (result === 'Computer wins!'){
        compRes++;
        let scoreText = `Computer score is ---- ${compRes}`;
        const newLog = document.createElement('p');
        newLog.innerText = scoreText;
        newLog.style.backgroundColor = "black";
        log.appendChild(newLog);
    } else if (result === 'User wins!'){
        userRes++;
        let scoreText = `User score is ---- ${userRes}`;
        const newLog = document.createElement('p');
        newLog.innerText = scoreText;
        newLog.style.backgroundColor = "black";
        log.appendChild(newLog);
    } else {
        const newLog = document.createElement('p');
        newLog.innerText = 'That was a draw, no points for you guys =(';
        newLog.style.backgroundColor = "black";
        log.appendChild(newLog);
}
        (re = () => {newLog = document.createElement('p');
        newLog.innerText = `Score table is ------ Computer | ${compRes} | ----- User | ${userRes} | ------`;
        newLog.style.backgroundColor = "black";
        log.appendChild(newLog);})();

    if (count === 4 || userRes === 3 || compRes === 3){
            newLog.innerText = `This was last round and the winner is: `;
            newLog.style.backgroundColor = "black";
            log.appendChild(newLog);
            count = 0;
    if (compRes > userRes){
        newLog.innerText = `[[[[COMPUTER]]]] ------- ${compRes} ------- points`;
        newLog.style.backgroundColor = "black";
        log.appendChild(newLog);
    } else {
        newLog.innerText = `[[[[MANKIND WON]]]] ------- ${userRes} ------ points`;
        newLog.style.backgroundColor = "black";
        log.appendChild(newLog);
    };
    userRes = 0;
    compRes = 0;
    count ++;
}
}

let compRes = 0;
let userRes = 0;


