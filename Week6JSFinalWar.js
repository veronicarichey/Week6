//Veronica Richey

// Deal 26 Cards to each Player from a Deck of 52 cards.
// Iterate through the turns where each Player plays a Card.
// The Player who played the higher card is awarded a point
// Ties result in zero points for both Players
// After all cards have been played, display the score and declare the winner.
// Write a Unit Test using Mocha and Chai for at least one of the functions you write.

 class Card {
     constructor(suit, value){
     this.suit = suit;
     this.value = value;
 }

}

 class Deck {
     constructor(){
        this.cards = [];
     }
     addCard(card) {
        if(card instanceof Card) {
            this.cards.push(card);
        } else {
            throw new Error(`You can only add an instance of a Card. Argument is not a card: ${card}`)
        }   
    }
    
 }

class Game {
    constructor() {
     this.decks = [];
    }
//runs the game functions in order and then starts the game
    begin(){
        var suits = ["diamond", "heart", "spade", "club"];
        var value = [2,3,4,5,6,7,8,9,10,11,12,13,14];
        //build deck
        this.build(suits, value);
        //shuffle deck
        this.shuffle();
        //setup players
        this.setup();
        //start the game
        this.start();
    }
    //builds the card deck
    build(suits, value){
        let tempDeck = new Deck();
        for(let i=0; i < suits.length; i++) {
            for(let j=0; j < value.length; j++) {
                let temp = new Card(suits[i], value[j]);
                tempDeck.addCard(temp);
            }
        }
        this.decks.push(tempDeck);
      //this is running the suits array and the value array creating the deck 
        
       if(this.decks[0].cards.length != 52){
        throw new Error("Error deck of cards could not be made.")
       }
       return this.decks[0].cards.length;
    }

    //shuffles the deck using Fisher-Yates (aka Knuth) Shuffle method found on stack overflow
    shuffle(){
        let currentIndex = this.decks[0].cards.length,  randomIndex;

        // While there remain elements to shuffle.
        while (currentIndex != 0) {
      
          // Pick a remaining element.
          randomIndex = Math.floor(Math.random() * currentIndex);
          currentIndex--;
      
          // And swap it with the current element
          [this.decks[0].cards[currentIndex], this.decks[0].cards[randomIndex]] = [
            this.decks[0].cards[randomIndex], this.decks[0].cards[currentIndex]];
        }
        // for(let i = 0; i < this.decks[0].cards.length; i++) {
        //     console.log(this.decks[0].cards[i].suit +" " + this.decks[0].cards[i].value);
        // }
        // used for debugging

    }
// to set up the game we are dividing the new deck array into two arrays. player 1 will receive the first
// deck with elements 0-25 as its cards. Player two will receive the last half of the array elements 26-52
    setup(){
        const middleIndex = Math.ceil(this.decks[0].cards.length / 2);
        // console.log(middleIndex);
        let player1Deck = new Deck();
        for(let i =0; i< middleIndex; i++){
            let suit = this.decks[0].cards[i].suit;
            let value = this.decks[0].cards[i].value;
            player1Deck.addCard(new Card(suit,value));
        }
        
        this.decks.push(player1Deck); 
        //reset tempDeck  
        let player2Deck = new Deck();
        for(let i =middleIndex; i< this.decks[0].cards.length; i++){
            let suit = this.decks[0].cards[i].suit;
            let value = this.decks[0].cards[i].value;
            player2Deck.addCard(new Card(suit,value));
        }
        this.decks.push(player2Deck);
        //console.log(this.decks.length);

        for(let i = 0; i < this.decks[1].cards.length; i++) {
             console.log(this.decks[1].cards[i].suit +" " + this.decks[1].cards[i].value);
         }
    }

    //starts the game
    start() { 
        console.log("Let's Begin")
        var gameOver = false;
        var player1Score = 0;
        var player2Score = 0;
        var counter = 0;
        var roundNum = 1;
        var loopEnd = this.decks[1].cards.length;
        while(gameOver != true){
    // play will continue until we reach the end of the players decks. And game over will print
            
            if (counter == loopEnd) {
                gameOver = true;
                console.log("Game over");
            } else {
                console.log("PLayer 1 plays "+this.decks[1].cards[counter].suit + " " +this.decks[1].cards[counter].value);
                console.log("PLayer 2 plays "+this.decks[2].cards[counter].suit + " " +this.decks[2].cards[counter].value);
                if(this.decks[1].cards[counter].value > this.decks[2].cards[counter].value){
                    player1Score ++;
                    console.log("Player 1 won round "  + roundNum);
                } else if(this.decks[1].cards[counter].value < this.decks[2].cards[counter].value){
                    player2Score ++;
                    console.log("Player 2 won round "  + roundNum);
                }
            }
            counter++; // after each round a point will be added to the players score
            roundNum++;
        }
        if(player1Score > player2Score){
            console.log("Player 1 won!!!");
            console.log("Player 1 had " + player1Score + " points. Player 2 had " + player2Score);
        } else {
            console.log("Player 2 won!!!");
            console.log("Player 1 had " + player1Score + " points. Player 2 had " + player2Score);
        }
    }
}


let game = new Game();
game.begin();