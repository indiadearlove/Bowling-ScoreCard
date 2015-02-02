var ScoreCard = function () {

  var total = 0;
  var score = 0;

  ScoreCard.prototype.defaultTotal = function() {
    return total;
  };

  ScoreCard.prototype.inputScore = function(score) {
    return score;
  };

};