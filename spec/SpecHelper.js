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

    it("")

  });

});