let formEl = document.getElementById("form")
let lengthEl = document.getElementById("length")
let volumeEl = document.getElementById("volume")
let massEl = document.getElementById("mass")

let n = 0

function onInput(e) {
  event.preventDefault()
  n = document.getElementById("value").value
  computeLength()
  computeVolume()
  computeMass()
}
formEl.addEventListener('input', onInput)

function computeLength() {
  let feet = (n * 3.281).toFixed(3)
  let meters = (n / 3.281).toFixed(3)
  lengthEl.textContent = n + " meters = " + feet + " feet | " +
                         n + " feet = " + meters + " meters"
}

function computeVolume() {
  let gallons = (n / 3.785).toFixed(3)
  let liters = (n * 3.785).toFixed(3)
  volumeEl.textContent = n + " liters = " + gallons + " gallons | " +
                         n + " gallons = " + liters + " liters"
}

function computeMass() {
   let pounds = (n * 2.205).toFixed(3)
   let kilos = (n / 2.205).toFixed(3)
   massEl.textContent = n + " kilos = " + pounds + " pounds | " +
                          n + " pounds = " + kilos + " kilos"
}