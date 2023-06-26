let homeScoreEl = document.getElementById('home-score');
let guestScoreEl = document.getElementById('guest-score');

let homeScore = 0;
let guestScore = 0;

document.getElementById('new-game').addEventListener('click', () => {
  homeScore = 0;
  guestScore = 0;
  setHomeScoreEl();
  setGuestScoreEl();
});

document.getElementById('home-plus1').addEventListener('click', () => {
  homeScore += 1;
  setHomeScoreEl();
});
document.getElementById('home-plus2').addEventListener('click', () => {
  homeScore += 2;
  setHomeScoreEl();
});
document.getElementById('home-plus3').addEventListener('click', () => {
  homeScore += 3;
  setHomeScoreEl();
});

document.getElementById('guest-plus1').addEventListener('click', () => {
  guestScore += 1;
  setGuestScoreEl();
});
document.getElementById('guest-plus2').addEventListener('click', () => {
  guestScore += 2;
  setGuestScoreEl();
});
document.getElementById('guest-plus3').addEventListener('click', () => {
  guestScore += 3;
  setGuestScoreEl();
});

function setHomeScoreEl(score) {
  homeScoreEl.textContent = homeScore;
}
function setGuestScoreEl(score) {
  guestScoreEl.textContent = guestScore;
}