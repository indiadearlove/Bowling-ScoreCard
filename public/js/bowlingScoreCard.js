var ScoreCard = function () {

  var total = 0;
  var goScore = 0;

  ScoreCard.prototype.defaultTotal = function() {
    return total;
  };

  ScoreCard.prototype.inputScore = function(goScore) {
    if (goScore > -1 && goScore < 10)
      return goScore;
    if (goScore == "X")
      return (goScore = 10);
    else
      return "Try Again";
  };

  ScoreCard.prototype.round = function(first, second){
    if (first + second < 11 && first + second > -1)
      return (first + second)
    else
      return "Try Again"
  };

};