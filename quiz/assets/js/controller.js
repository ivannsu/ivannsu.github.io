function populate() {

  if(quiz.isEnded()) {
    showScore();
  } else {
    let questionElm = document.getElementById('question');
    let optionsElm = document.getElementsByClassName('answer');
    let footerElm = document.getElementById('footer');

    questionElm.innerHTML = quiz.getQuestion();
    footerElm.innerHTML = quiz.getQuestionInfo();

    for(let i = 0; i < optionsElm.length; i++) {
      optionsElm[i].innerHTML = quiz.getOptions()[i];
      optionsElm[i].onclick = function() {
        if(quiz.checkAnswer(optionsElm[i].innerHTML)) {
          quiz.scores++;
        }
        quiz.changeQuestion();
        populate();
      }
    }
  }
}

function showScore() {
  let container = document.getElementById('score');
  let scoreElm = document.getElementById('score-number');
  let resetBtn = document.getElementById('reset');

  scoreElm.innerHTML = quiz.getScore();
  container.style.display = 'block';

  resetBtn.addEventListener('click', function() {
    quiz.reset();
    populate();
    container.style.display = 'none';
  });
}

let questions = [
  new Question('Buah yang memiliki duri?', ['Apel', 'Jeruk', 'Durian', 'Nanas'], 'Durian'),
  new Question('Hewan berkaki dua?', ['Ayam', 'Tikus', 'Singa', 'Kucing'], 'Ayam'),
  new Question('Hewan yang memiliki tanduk?', ['Anjing', 'Badak', 'Ular', 'Burung'], 'Badak'),
  new Question('Hewan yang hidup dilaut', ['Kelinci', 'Tikus', 'Ikan', 'Kucing'], 'Ikan'),
  new Question('Hewan yang tinggal di Kutub Utara', ['Beruang Kutub', 'Tikus', 'Ikan', 'Kucing'], 'Beruang Kutub')
];

let quiz = new Quiz(questions);

populate();