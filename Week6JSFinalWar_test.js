

//TEst to see if code is building the deck of cards correctly
var expect = chai.expect;
let gameTest = new Game();
let gameTest2 = new Game();
var suits1 = ["diamond", "heart", "spade", "club"];
var value1 = [2,3,4,5,6,7,8,9,10,11,12,13,14];
var suits2 = ["diamond", "heart", "spade", "club"];
var value2 = [1,2,3,4,5,6,7,8,9,10,11,12,13,14];
describe ('MyFunctions', function() {
    describe('#Build', function() {
        it('should build a deck of 52 cards', function() {
            var x= gameTest.build(suits1,value1);
            expect(x).to.equal(52);
        });

        it('it should throw an error if its not 52 cards', function() {
            expect(function() {
                gameTest2.build(suits2,value2);
            }).to.throw(Error);
        });
    });
});
