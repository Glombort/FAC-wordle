var count = 0;
var wordList = ['WORLD','TRADE','SLOTH','GREAT','BARGE','SURGE','STORE','GHOST','CLEANS','JOUST']
var answerFull = wordList[Math.floor(Math.random()*wordList.length)];
document.getElementById("word-btn").onclick = function() {wordleFunc()};

function wordleFunc() {
    var wordInput = document.getElementById('word-input').value.toUpperCase();
    // Check word length is correct
    if (wordInput.length < 5) {
        window.alert('Word too short')
    } else if (wordInput.length > 5) {
        window.alert('Word too long')
    } else {
        count++;
        answerCheck(wordInput)
    }
    //Clears input box
    var form = document.getElementById("submit-form");
    form.reset();
}

function checkNum(str) {
  let numbers = 0
  for (let i = 0; i < str.length; i++) {
    if (!isNaN(str[i])) {
      numbers++
    }
  }
  return numbers < 0 ? [true] : [false,"You need at least two numbers"]
}

function answerCheck(input) {
    
    if (count>=7) {
        window.alert('Out of guesses refresh the page for a new word')
    } else { 
        var id = 'r' + String(count) + '-l0';
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
