//Initialising number of button clicks
let count = 0;

let wordList = [
    'WORLD',
    'TRADE',
    'SLOTH',
    'GREAT',
    'BARGE',
    'SURGE',
    'STORE',
    'GHOST',
    'CLEANS',
    'JOUST'
];

//Gets random word from wordList
let answerFull = wordList[Math.floor(Math.random()*wordList.length)];

//Button Clicked
document.getElementById("word-btn").onclick = function() {wordleFunc()};
function wordleFunc() {
    //Takes User input in wordInput and turns to all caps
    let wordInput = document.getElementById('word-input').value.toUpperCase();
    
    //Check alpahabet A-Z or a-z is used
    let validChars = /^[A-Za-z]+$/;
    if (!wordInput.match(validChars)) {
        alert('Only letters A-Z are allowed')
    } else if (wordInput.length !== 5) {
        //Check input length is exactly 5
        inputLength(wordInput.length)
    } else {
        //Increments number of guesses by 1
        count++;
        answerCheck(wordInput)
        //Clears input box for next guess
        let form = document.getElementById("submit-form");
        form.reset();
    }
}


/*
Checking Functions
*/

//Alert of too short/long input
function inputLength(length) {
    if (length > 5) {
        alert('Word too long')
    } else {
        alert('Word too short')
    }
}

//Checks input against answer
function answerCheck(input) {
    
    if (count>=7) {
        window.alert('Out of guesses refresh the page for a new word')
    } else { 
        let id = 'r' + String(count) + '-l0';
        answer = [...answerFull];
        //Checks letter by letter for correct placement
        [...input].forEach((element,index) => {
            id = id.slice(0, -1) + String((index+1))
            colorChanger(id,element,index)
        })
        //Alerts if correct word guessed
        if (input === answerFull) {
            window.alert('Congratulations you got the word')
        } else if (count === 6) {
            window.alert('Out of guesses the correct answer was ' + answerFull)
        }
    }
}


/*
Styling Functions
*/

function colorChanger(id, element, index) {
    if (element === answer[index]) {
        //Turns correct letter correct place green
        document.getElementById(id).innerHTML = element;
        document.getElementById(id).style.backgroundColor = '#538d4e';
    } else if (answer.includes(element)) {
        //Turns correct letter wrong place yellow
        document.getElementById(id).innerHTML = element;
        document.getElementById(id).style.backgroundColor = '#b59f3b';
    } else {
        //Turns incorrect letter grey
        document.getElementById(id).innerHTML = element;
        document.getElementById(id).style.backgroundColor = '#3A3B3C';
    }
}
