// DOM = Document Object Model, how JS is used to modify websites

let countEl = document.getElementById("count-el")
let count = 0

function increment() {
  count += 1
  countEl.textContent = count
}

function save() {
  let saveEl = document.getElementById("save-el")
  saveEl.textContent += count + " - "

  count = 0
  countEl.textContent = 0
}