// VARIABLES

let cards = []
let sum = 0

let hasBlackJack = false
let isAlive = false
let message = ""

let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")

// let sumEl = document.querySelector("#sum-el")

let player = {
    name: "Player 1",
    chips: 145
}


let playerEl = document.getElementById("player-el")
playerEl.textContent = player.name + ": $" + player.chips


// FUNCTIONS

function getRandomCard() {
    let randomNumber = Math.floor( Math.random()*13 ) + 1
    
    if (randomNumber > 10){
        return 10
    } else if (randomNumber === 1) {
        return 11
    } else {
        return randomNumber
    }
}

function startGame () {
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()

    cards = [firstCard, secondCard]

    sum = firstCard + secondCard
    renderGame()
}

function renderGame () {
    cardsEl.textContent = "Cards: "

    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " - "
    }

    sumEl.textContent = "Sum: " + sum

    if (sum <= 20) {
        message = "Draw card"
        isAlive = true
    } else if (sum === 21) {
        message = "Winner winner, chicken dinner! 🥳"
        hasBlackJack = true
        isAlive = false
    } else {
        message = "Unlucky 😭"
        isAlive = false
    }

    messageEl.textContent = message
}

function newCard() {
    if (isAlive === true && hasBlackJack === false){
        let card = getRandomCard()
        sum += card
        cards.push(card)
        renderGame()   
    }
}


// Loops

// for (let i = 10; i < 101; i += 10) {
//     console.log(i)
// }

// Definis primero que i es igual a 10 y menor a 101 (Start y finish) Y despues le indicás los "steps", como contar. En este caso de +10 en +10, o segun como esta escrito i= i+10
