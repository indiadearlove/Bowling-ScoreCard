describe('BowlingScoreCard', function(){

  var scorecard;
  beforeEach(function(){
    scorecard = new ScoreCard();
  });

  describe("new game", function(){

    it("starts with score 0", function(){
      expect(scorecard.defaultScore()).toEqual(0);
    });

  })

});