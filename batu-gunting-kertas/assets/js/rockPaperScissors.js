function RockPaperScissors(pattern, patternKey) {
  this.pattern = pattern;
  this.patternKey = patternKey;
  this.inputPattern = {}
  this.userChoice = 0; // 0
  this.comChoice = 0; // 2
  this.winnerChoice = '';
  this.winnerName = '';
}

RockPaperScissors.prototype.setUserChoice = function(choice) {
  this.userChoice = choice;
}

RockPaperScissors.prototype.setComChoice = function() {
  let randomNum = Math.floor(Math.random() * 3);
  if(this.userChoice === randomNum) {
    return this.setComChoice();
  } else {
    this.comChoice = randomNum;
  }
}

RockPaperScissors.prototype.processPattern = function() {
  
  for(let i = 0; i < this.patternKey.length; i++) {
    if(i === this.userChoice) {
      this.inputPattern[this.patternKey[i]] = 1;
    } else if(i === this.comChoice) {
      this.inputPattern[this.patternKey[i]] = 1;
    } else {
      this.inputPattern[this.patternKey[i]] = 0;
    }
  }
}

RockPaperScissors.prototype.getWinnerChoice = function() {
  let input = this.inputPattern;

  for(let i = 0; i < this.pattern.length; i++) {
    let pattern = this.pattern[i];

    if(input.rock === pattern.rock && input.paper === pattern.paper && input.scissors === pattern.scissors) {
      this.winnerChoice = pattern.result;
    }
  }
}

RockPaperScissors.prototype.getWinnerName = function() {
  if(this.winnerChoice === this.patternKey[this.userChoice]) {
    this.winnerName = 'Kamu';
  } else {
    this.winnerName = 'Komputer';
  }
}
