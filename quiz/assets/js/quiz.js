function Quiz(questions) {
  this.questions = questions;
  this.scores = 0;
  this.questionIndex = 0;
}

Quiz.prototype.getQuestion = function() {
  return this.questions[this.questionIndex].question;
}

Quiz.prototype.getOptions = function() {
  return this.questions[this.questionIndex].options;
}

Quiz.prototype.getQuestionInfo = function() {
  return 'Soal ke-' + (this.questionIndex + 1) + ' dari ' + this.questions.length;
}

Quiz.prototype.getScore = function() {
  return this.scores * 20;
}

Quiz.prototype.checkAnswer = function(choice) {
  return (this.questions[this.questionIndex].answer === choice) ? true : false;
}

Quiz.prototype.changeQuestion = function() {
  this.questionIndex++;
}

Quiz.prototype.isEnded = function() {
  return (this.questionIndex === this.questions.length) ? true : false;
}

Quiz.prototype.reset = function() {
  this.scores = 0;
  this.questionIndex = 0;
}