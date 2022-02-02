var count = 0;
document.getElementById("word-btn").onclick = function() {wordleFunc()};
function wordleFunc() {
    var wordInput = document.getElementById('word-input').value.toUpperCase();
    if (wordInput.length < 5) {
        window.alert('Word too short')
    } else if (wordInput.length > 5) {
        window.alert('Word too long')
    } else {
        count++;
        if (count>=7) {
            window.alert('Too many guesses')
        } else { 
            var id = 'r' + String(count) + '-l0';
            var answer = ['W','O','R','L','D'];
            [...wordInput].forEach((element,index) => {
                id = id.slice(0, -1) + String((index+1))
                if (element === answer[index]) {
                    document.getElementById(id).innerHTML = element;
                    document.getElementById(id).style.backgroundColor = '#538d4e';
                } else if (answer.includes(element)) {
                    document.getElementById(id).innerHTML = element;
                    document.getElementById(id).style.backgroundColor = '#b59f3b';
                } else {
                    document.getElementById(id).innerHTML = element;
                    document.getElementById(id).style.backgroundColor = '#3A3B3C';
                }
            })
            if (wordInput === 'WORLD') {
                window.alert('Congratulations you got the word')
            }
        }
    }
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


