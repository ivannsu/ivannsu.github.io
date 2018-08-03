function Question(question, options, answer) {
  this.question = question;
  this.options = options;
  this.answer = answer;
}

Question.prototype.checkAnswer = function(choice) {
  return (this.answer === choice) ? true : false;
}