var ScoreCard = function () {

  var total = 0;
  var score = 0;

  ScoreCard.prototype.defaultTotal = function() {
    return total;
  };

  ScoreCard.prototype.inputScore = function(score) {
    if (score > -1 && score < 10)
      return score;
    else
      return "Try Again";
  };

};