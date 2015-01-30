describe('BowlingScoreCard', function(){

  var scorecard;
  beforeEach(function(){
    scorecard = new ScoreCard();
  });

  describe("new game", function(){

    it("starts with score 0", function(){
      expect(scorecard.score()).toEqual(0);
    });

    it("can have a player name", function(){

    });
  })

});