let messageEl = document.getElementById("message-el")
let cardsEl = document.getElementById("cards")
let sumEl = document.getElementById("sum")
let playerEl = document.getElementById("player-el")

let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""
let player = {
  name: "Sarah",
  chips: 100
}

playerEl.textContent = player.name + ": $" + player.chips

function getRandomCard() {
  let card = Math.floor(Math.random() * 13) + 1
  if (card === 1) {
    return 11
  } else if (card > 10) {
    return 10
  } else {
    return card
  }
}

function startGame() {
  isAlive = true
  let firstCard = getRandomCard()
  let secondCard = getRandomCard()
  cards = [firstCard, secondCard]
  sum = firstCard + secondCard

  renderGame()
}

function renderGame() {
  cardsEl.textContent = "Cards: "
  for (let i = 0; i < cards.length; i++) {
    cardsEl.textContent += cards[i] + " "
  }

  sumEl.textContent = "Sum: " + sum

  if (sum <= 20) {
    message = "Do you want to draw a new card?"
  } else if (sum === 21) {
    message = "Woohoo! You've got Blackjack!"
    hasBlackJack = true
  } else {
    message = "You're out of the game!"
    isAlive = false
  }
  messageEl.textContent = message
}

function newCard() {
  if (isAlive === true && hasBlackJack === false) {
    let card = getRandomCard()
    sum += card
    cards.push(card)
    renderGame()
  }
}