

let element1 = document.getElementById('player1');
let element2 = document.getElementById('player2');
let roll = document.getElementById('btn1')
let roll2 = document.getElementById('btn2')
let diceOutCome = [1, 2, 3, 4, 5, 6];
let diceImageValue = ['images/1.png', 'images/2.png', 'images/3.png', 'images/4.png', 'images/5.png', 'images/dice6b.png'];
let outCome = document.getElementById('result');



class Dice{
    constructor(element ){
        this.displayDice = element;
        this.dice = diceOutCome;
        this.diceImage = diceImageValue;
        this.diceValue = 0
        this.rolled  = true
    }
    rollDice(){
        this.diceValue = Math.floor(Math.random() * this.dice.length + 1);
        this.displayDice.setAttribute('src', diceImageValue[this.diceValue - 1])
        this.rolled = true
        console.log(this.rolled)
        return this.diceValue
    }
}

let player1 = new Dice(element1);
let player2 = new Dice(element2)
roll.addEventListener('click', function (){player1.rollDice()})
roll2.addEventListener('click', function (){player2.rollDice()})
function getWinner (){
    if(player1 && player2){
        if(player1 == player2){
            outCome.innerHTML = 'tie'
        }else if(player1 > player2){
            outCome.innerText = 'player1 wins'
        }else{
            // outCome.innerText = 'player2 wins'
        }
    }
}
getWinner()









