var words = [
    'рыба',
    'собака',
    'лошадь',
    'кот',
    'собака'
]

var word = words[Math.floor(Math.random() * words.length)]; // случайное слово

var answerArray = [];
for (var i = 0; i < word.length; i++){
    answerArray[i] = " _ ";
}
var remainingLetters = word.length; // кол-во букв, которые нужно угадать

while (remainingLetters > 0) {
    alert(answerArray.join(""));
    var guess = prompt('Угадайте букву или нажмите Отмена для выхода из игры.'); //предпологаемая буква или выход из игры по желанию игрока
    if (guess === null){
        break; // если нажата отмена, произойдёт выход из игры, цикла
    }else if(guess.length !== 1) {
        alert("Пожалуйста введите одну букву!") // ввёл более одной буквы
    } else {
        for (var j = 0;j < word.length; j++){
            if(word[j] === guess){  
                answerArray[j] = guess;
                remainingLetters-- ;
            }
        }
    }
}
alert(answerArray.join(''));
alert('Отлично! Вы разгадали слово ' + word);