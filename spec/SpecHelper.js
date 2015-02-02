describe('BowlingScoreCard', function(){

  var scorecard;
  beforeEach(function(){
    scorecard = new ScoreCard();
  });

  describe("new game", function(){

    it("starts with total 0", function(){
      expect(scorecard.defaultTotal()).toEqual(0);
    });

  });

  describe("scores", function(){
    
    it("can return the score", function(){
      expect(scorecard.inputScore(5)).toEqual(5);
    });

    it("has to be within 0-9", function(){
      expect(scorecard.inputScore(11)).toEqual("Try Again")
    });

    it("if X is entered score is 10", function(){
      expect(scorecard.inputScore('X')).toEqual(10)
    });

  });

  describe("rounds", function(){

    it("inputs two scores per round", function(){
      expect(scorecard.round(3, 4)).toEqual(7)
    });

    it("scores can not be more then 10", function(){
      expect(scorecard.round(6, 7)).toEqual("Try Again")
    });

  });

});