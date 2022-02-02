var count = 0;
document.getElementById("word-btn").onclick = function() {wordleFunc()};
function wordleFunc() {
    var wordInput = document.getElementById('word-input').value.toUpperCase();
    // Check word length is correct
    if (wordInput.length < 5) {
        window.alert('Word too short')
    } else if (wordInput.length > 5) {
        window.alert('Word too long')
    } else {
        // Increments to the next row and checks if number of guesses is greater than 6
        count++;
        if (count>=7) {
            window.alert('Too many guesses')
        } else { 
            var id = 'r' + String(count) + '-l0';
            var answer = ['W','O','R','L','D'];
            //Checks letter by letter for correct placement
            [...wordInput].forEach((element,index) => {
                //Gets correct element id for each letter tile
                id = id.slice(0, -1) + String((index+1))
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
            })
            //Alerts if correct word guessed
            if (wordInput === 'WORLD') {
                window.alert('Congratulations you got the word')
            }
        }
    }
    //Clears input field for next input
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


