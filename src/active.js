const slide = document.querySelectorAll('.slide > p');
const slideB = document.querySelectorAll('.slideb > p');
const activeP = document.querySelectorAll('.slide--active > p');
const activeBackP = document.querySelectorAll('.slide--active-back > p');
const active = document.querySelectorAll('.slide--active');
const activeBack = document.querySelectorAll('.slide--active-back');

function animation(position, last, second) {
  active[position].classList.add('slide--active-click');
  activeBack[position].classList.add('slide--active-back-click');
  setTimeout(() => {
    active[position].classList.remove('slide--active-click');
    activeBack[position].classList.remove('slide--active-back-click');
  }, 500);
  activatorsPosition(position, 0, last, second);
}

function activatorsPosition(position, stop, last, second) {
  setTimeout(() => {
    if (slide[position].innerText == stop) {
      slide[position].innerText = second;
      slideB[position].innerText = last;
      activeBackP[position].innerText = second;
      activeP[position].innerText = last;
    } else {
      slide[position].innerText--;
      slideB[position].innerText--;
      activeBackP[position].innerText--;
      activeP[position].innerText--;
    }
  }, 500);
}

function seconds(position) {
  animation(position, 59, 58);
}
function minutes(position) {
  animation(position, 59, 58);
}
function hours(position) {
  animation(position, 23, 22);
}
function days(position) {
  animation(position, 8, 7);
}
function time() {
  setInterval(seconds, 1000, 3);
  setInterval(minutes, 60000, 2);
  setInterval(hours, 60000 * 60, 1);
  setInterval(days, 60000 * 60 * 24, 0);
}

time();
